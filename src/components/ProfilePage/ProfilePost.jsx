import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  GridItem,
  Image,
  Img,
  Text,
  VStack,
  useDisclosure,
  Link
} from "@chakra-ui/react";
import React, { useState } from "react";
import {Link as RouterLink} from "react-router-dom"
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FilledCommentLogo } from "../../icons/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import Comment from "./Comment";
import PostFooter from "../HomePage/PostFooter";
import useProfileStore from "../../store/useProfileStore";
import useAuthStore from "../../store/useAuthStore";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../../firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import useShowToast from "../../hooks/useShowToast";
import { timeAgo } from "../../hooks/useTimeAgo";

const ProfilePost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userProfile = useProfileStore((state) => state.userProfile);
  const authUser = useAuthStore((state) => state.user);
  const [isDeleting, setDeleting] = useState(false);
  const deleteUserPost = useProfileStore((state) => state.deletePost);
  const showToast = useShowToast();
  const deletePost = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post ?")) return;
    if (isDeleting) return;
    setDeleting(true);
    try {
      const imgRef = ref(storage, `posts/${id}`);
      await deleteObject(imgRef);
      const postRef = doc(firestore, "posts", id);
      const userRef = doc(firestore, "users", authUser.uid);
      await deleteDoc(postRef);
      await updateDoc(userRef, {
        posts: arrayRemove(id),
      });
      deleteUserPost(id);
      showToast("Success", "Post deleted successfully!", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setDeleting(false);
    }
  };
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        position={"relative"}
        aspectRatio={"1/1"}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          bottom={0}
          right={0}
          justifyContent={"center"}
          alignItems={"center"}
          bg={"blackAlpha.500"}
          gap={4}
        >
          <Flex alignItems={"center"}>
            <AiFillHeart size={22} />
            <Text fontWeight={"bold"} ml={"2px"}>
              {post.likes.length}
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <FilledCommentLogo />
            <Text fontWeight={"bold"} ml={1}>
              {post.comments.length}
            </Text>
          </Flex>
        </Flex>

        <Img src={post.imageURL} h={"100%"} w={"100%"} objectFit={"cover"} />
      </GridItem>

      <Modal
        size={{ base: "2xl", md: "5xl" }}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap={4}
              w={{ base: "70%", md: "full" }}
              p={3}
              mx={"auto"}
              maxH={"90vh"}
              minH={"50vh"}
              direction={{base:"column",md:"row"}}
            >
              <Flex
                flex={1.5}
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                aspectRatio={"4/5"}
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
              >
                <Image
                h={400}
                  objectFit={"cover"}
                  src={post.imageURL}
                  alt={"Profile Post"}
                />
                <Box mt={"auto"} mb={-6} w={"full"}>
                  <PostFooter post={post} page="profile" />
                </Box>
              </Flex>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"}>
                    <Link as={RouterLink} to={`/${userProfile.userName}`}>
                      <Avatar src={userProfile.profilePicURL} size={"sm"} />
                    </Link>
                    <Flex direction={"column"} ml={4}>
                      <Flex>
                        <Link
                          as={RouterLink}
                          to={`/${userProfile.userName}`}
                          _hover={{ textDecoration: "none" }}
                        >
                          <Text fontSize={14} fontWeight={600}>
                            {userProfile.userName}
                          </Text>
                        </Link>
                        <Text fontSize={15} ml={2}>
                          {post.caption}
                        </Text>
                      </Flex>
                      <Text fontSize={12} color={"gray.500"}>
                        {timeAgo(post.createdAt)}
                      </Text>
                    </Flex>
                  </Flex>

                  {authUser?.userName === userProfile.userName && (
                    <Button
                      isLoading={isDeleting}
                      bg={"transparent"}
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      <MdDelete />
                    </Button>
                  )}
                </Flex>
                <Divider my={4} bg={"gray.400"} />

                <VStack
                  maxH={"350px"}
                  overflow={"auto"}
                  alignItems={"flex-start"}
                >
                  {post.comments.map((comment, ind) => (
                    <Comment key={ind} comment={comment} />
                  ))}
                </VStack>
                <Box mt={"auto"}>
                  <PostFooter post={post} page="profile" />
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
