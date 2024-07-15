import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegComment, FaV } from "react-icons/fa6";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../icons/icons";
import { motion } from "framer-motion";
import { useMotionValue, useVelocity } from "framer-motion";
import LikeButton from "./LikeButton";
import useAuthStore from "../../store/useAuthStore";
import useAddComment from "../../hooks/useAddComment";
import useLikeUnlike from "../../hooks/useLikeUnlike";

const PostFooter = (props) => {
  const authUser = useAuthStore((state) => state.user);
  const { addComment, isCommenting } = useAddComment();
  const [comment, setComment] = useState("");
  const { likeUnllike, liked, setLiked,likeCount,setCount } = useLikeUnlike(props.post);
  const likeit = () => {
    likeUnllike();
  };
  return (
    <Box mb={5} px={2}>
      <Flex alignItems={"center"} gap={4} mt={4} pt={0}>
        <LikeButton isliked={liked} likeit={likeit} />
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      {likeCount != 0 && <Text mt={2}>{likeCount} likes</Text>}
      {props.page == "profile" && (
        <Text pl={0.5}>
          {/* <Text pl={0} as={"span"} fontWeight={"bold"}>{props.username}</Text> */}
          {/* <Text as={"span"}>{" "+props.caption}</Text> */}
          {/* <Text mt={2} pl={0}color={"gray"} display={props.page=="profile" ? "none" : "block"}>View all 50 comments</Text> */}
        </Text>
      )}

      {/* <Flex justifyContent={"space-between"} alignItems={"center"}> */}
      {/* </Flex> */}
      {authUser ? (
        <InputGroup>
          <Input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant={"flushed"}
            placeholder="Add a comment..."
          />
          <InputRightElement>
            <Button
              color={"blue.600"}
              _hover={{ color: "white" }}
              transition={"0.2s ease-in-out"}
              cursor={"pointer"}
              bg={"none"}
              onClick={() => {
                addComment(props.post.id, comment);
                setComment("");
              }}
              isLoading={isCommenting}
            >
              <Text>Post</Text>
            </Button>
          </InputRightElement>
        </InputGroup>
      ) : null}
    </Box>
  );
};

export default PostFooter;
