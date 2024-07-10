import { Box, Button, CloseButton, Flex,Image,Input,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,Textarea,Tooltip, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import useEditPic from "../../hooks/useEditPic";
import useCreatePost from "../../hooks/useCreatePost";


const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imgref= useRef(null);
  const {editPic,selectedFile,setSelectedFile} = useEditPic();
  const [caption,setCaption]=useState("");
  const {isUpdating,createPost}=useCreatePost();
  const handleCreatePost = async()=>{
    await createPost(selectedFile,caption);
    // alert("WA")
    setCaption("")
    setSelectedFile(null)
    onClose();
  }
  return (
    <>
      <Tooltip
        openDelay={300}
        hasArrow
        label={"Create"}
        display={{ base: "block", md: "none" }}
      >
        <Flex
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
            <IoIosAddCircle />
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
            <IoIosAddCircle />
            </Flex>
            <Box ml={2} fontSize={18} display={{ base: "none", md: "block" }}>
              Create
            </Box>
          </Flex>
        </Flex>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent bg={"black"} border={"1px solid white"} maxW={"400px"}>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6}>
						<Textarea placeholder='Post caption...' value={caption} onChange={(e)=>setCaption(e.target.value)}/>

						<Input type='file' hidden ref={imgref} onChange={editPic}/>
            <BsFillImageFill
            onClick={()=>
              imgref.current.click()
            }
             style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
							size={16}/>
            {selectedFile && (
              <Flex mt={3} w={"full"} position={"relative"} justifyContent={"center"}>
                <Image h={300} w={270} objectFit={"cover"} src={selectedFile} alt="Selected Image"/>
                <CloseButton
                  position={"absolute"}
                  top={-3}
                  right={2}
                  onClick={()=>{
                    setSelectedFile("");
                  }}
                />
              </Flex>
            )}

					</ModalBody>
          <ModalFooter>
            <Button isLoading={isUpdating} mr={3} onClick={handleCreatePost}>Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Create;
