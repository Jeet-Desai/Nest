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
} from "@chakra-ui/react";
import React from "react";
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

const ProfilePost = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              10
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <FilledCommentLogo />
            <Text fontWeight={"bold"} ml={1}>
              5
            </Text>
          </Flex>
        </Flex>

        <Img src={props.img} h={"100%"} w={"100%"} objectFit={"cover"} />
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
            <Flex gap={4} w={{ base: "70%", md: "full" }} p={3} mx={"auto"}>
              <Box
                flex={1.5}
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                aspectRatio={"4/5"}

              >
                <Image 
                objectFit={"cover"} w={"100%"} h={"100%"} src={props.img} alt={"Profile Post"} />
              </Box>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"}>
                    <Avatar
                      src="profile-pic.png"
                      alt="profile picture"
                      size={"sm"}
                    />
                    <Text fontSize={14} ml={2} fontWeight={600}>
                      jeetdesaimusic
                    </Text>
                  </Flex>

                  <Button bg={"transparent"}>
                    <MdDelete />
                  </Button>
                </Flex>
                <Divider my={4} bg={"gray.400"} />

                <VStack maxH={"350px"} overflow={"auto"} alignItems={"flex-start"}>
                    <Comment avatar="profile-pic-2.jpg" 
                     username="chaitalidesai"
                     text="Lovely pic!"
                     postedBefore="2d ago"
                    />
                    <Comment avatar="profile-pic-3.jpg" 
                     username="mehul_p_desai"
                     text="Amazing!"
                     postedBefore="1d ago"
                    />
                    <Comment avatar="profile-pic-5.jpg" 
                     username="rushan_bot"
                     text="I am bot🤖"
                     postedBefore="5d ago"
                    />
                </VStack>
                <Box mt={"auto"}>
                    <PostFooter page="profile"/>
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
