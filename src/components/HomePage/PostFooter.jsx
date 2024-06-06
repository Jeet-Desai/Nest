import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegComment, FaV } from "react-icons/fa6";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../icons/icons";
import {motion} from "framer-motion"
import { useMotionValue, useVelocity } from "framer-motion"
import LikeButton from "./LikeButton";


const PostFooter = (props) => {
  const [isliked, togglelike] = useState(false);
  const [likecount, setcount] = useState(100);
  const [showComment,setComment]=useState(false);

  function likeit() {
    if(isliked)
    {
      togglelike(false);
      setcount(likecount-1);
    }
    else
    {
      togglelike(true);
      setcount(likecount+1);
    }
  }

  function addcomment()
  {
    if(showComment)
      {
        setComment(false);
      }
      else
      {
        setComment(true);
      }
  }
  return (
    <Box mb={5} px={2}>
      <Flex alignItems={"center"} gap={4} mt={4} pt={0}>
        <LikeButton isliked={isliked} likeit={likeit} />
        <Box cursor={"pointer"} fontSize={18} onClick={addcomment}>
          <CommentLogo />
        </Box>
        </Flex>
        <Text mt={2}>{likecount} likes</Text>
        {props.caption ?(
          <Text pl={0.5}>
          <Text as={"span"} fontWeight={"bold"}>{props.username}</Text>
          <Text as={"span"}>{" "+props.caption}</Text>
        </Text>
        ) :null}
        
        <Text mt={2} color={"gray"} display={props.page=="profile" ? "none" : "block"}>View all 50 comments</Text>
        {/* <Flex justifyContent={"space-between"} alignItems={"center"}> */}
        {/* </Flex> */}
        {showComment || props.page=="profile" ? (
          <InputGroup>
          <Input variant={"flushed"} placeholder="Add a comment..."/>
          <InputRightElement>
          <Box
          color={"blue.600"}
          _hover={{color:"white"}}
          transition={"0.2s ease-in-out"}
          cursor={"pointer"}
          >
            <Text>Post</Text>
          </Box>
          </InputRightElement>
          </InputGroup>
        ) :null}
        
    </Box>
  );
};

export default PostFooter;
