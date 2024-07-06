import { Box, Button, Flex,FormControl,FormLabel,Input,Modal,ModalBody,ModalCloseButton,ModalContent,ModalHeader,ModalOverlay,Tooltip, useDisclosure } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import SuggestedUser from "../HomePage/SuggestedUser";
import { useRef } from "react";
import useSearchUser from "../../hooks/useSearchUser";


const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchRef= useRef(null);
  const {isUpdating,user,setUser,searchUser} = useSearchUser();

  const handleSearchUser = (e)=>{
    e.preventDefault();
    searchUser(searchRef.current.value);
  }

  return (
    <>
      <Tooltip
        openDelay={300}
        hasArrow
        label={"Search"}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          fontSize={"29px"}
          _hover={{ bg: "whiteAlpha.400" }}
          cursor={"pointer"}
          borderRadius={5}
          onClick={onOpen}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            w={10}
            h={10}
            display={{ base: "flex", md: "none" }}
          >
            <IoSearch />
          </Flex>
          <Flex
            w={168}
            display={{ base: "none", md: "flex" }}
            h={10}
            alignItems={"center"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Flex ml={2} w={8}>
            <IoSearch />
            </Flex>
            <Box ml={2} fontSize={18} display={{ base: "none", md: "block" }}>
              Search
            </Box>
          </Flex>
        </Flex>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={()=>{
        setUser(null);
        onClose();
      }}>
        <ModalOverlay/>
        <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
					<ModalHeader>Search user</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<form onSubmit={handleSearchUser}>
							<FormControl>
								<FormLabel>Username</FormLabel>
								<Input placeholder='jeetdesaimusic' ref={searchRef} />
							</FormControl>

							<Flex w={"full"} justifyContent={"flex-end"}>
								<Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isUpdating}>
									Search
								</Button>
							</Flex>
						</form>
						{user && <SuggestedUser user={user} setUser={setUser}/>}
					</ModalBody>
				</ModalContent>
      </Modal>
    </>

  )
}

export default Search