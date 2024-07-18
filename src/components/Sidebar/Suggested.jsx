import { Box, Flex, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";
import useGetSuggested from "../../hooks/useGetSuggested";
import SuggestedUser from "../HomePage/SuggestedUser";
import useFetchFeedPosts from "../../hooks/useFetchFeedPosts";
import { useLocation } from "react-router-dom";

const Suggested = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const page="Suggested"
  const {posts,isUpdating} = useFetchFeedPosts()
  const { sUsers,removeUser,isLoading } = useGetSuggested(page);
  
  const {pathname}=useLocation()
  const shouldGlow= !isUpdating && posts.length==0 && pathname==="/";
  return (
    <>
      <Tooltip
        openDelay={300}
        hasArrow
        label={"Suggested Users"}
        display={{ base: "block", md: "none" }}
      >
        <Flex
        sx={{
          animation: shouldGlow ? `glow 1s ease-in-out infinite alternate` : "none",
          "@keyframes glow": {
            "0%": { boxShadow: "0 0 5px #4d7f96" },
            "100%": { boxShadow: "0 0 20px #4d7f96" },
          },
          outline: shouldGlow ? "2px solid #4d7f96" : "none",
          boxShadow: shouldGlow ? "0 0 10px #4d7f96" : "none",
        }}
          fontSize={"29px"}
          _hover={{ bg: "whiteAlpha.400" }}
          cursor={"pointer"}
          borderRadius={5}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            w={10}
            h={10}
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
          >
            <FaUsers />
          </Flex>
          <Flex
            w={168}
            display={{ base: "none", md: "flex" }}
            h={10}
            alignItems={"center"}
            justifyContent={{ base: "center", md: "flex-start" }}
            onClick={onOpen}
          >
            <Flex ml={2} w={8}>
              <FaUsers/>
            </Flex>
            <Box
            
             ml={2} fontSize={18} display={{ base: "none", md: "block" }}>
              Suggested
            </Box>            
          </Flex>

        </Flex>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
          <ModalHeader>Suggested Users</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex
              mb={4}
              gap={4}
              flexDir={"column"}
              maxH={"250px"}
              overflowY={"auto"}
              px={6}
            >
              {!isLoading && sUsers.length==0 && (<Text>No Suggested Users🙁</Text>)}
              {sUsers.map((user) => (
                <SuggestedUser
                  user={user}
                  key={user.id}
                  removeUser={removeUser}
                />
              ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Suggested;
