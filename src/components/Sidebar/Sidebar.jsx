import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  Tooltip,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Button,
} from "@chakra-ui/react";
import { React,useEffect, useState } from "react";
import { SlLogout } from "react-icons/sl";
import {motion} from "framer-motion"
import useLogout from "../../hooks/useLogout";
import Home from "./Home";
import Create from "./Create";
import Profile from "./Profile";
import Search from "./Search";
import Suggested from "./Suggested";

const Sidebar = () => {

  const {signOutUser,isLoggingOut}=useLogout();
  const [rot,activate]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      activate(false);
    },1600)
  },[])

  return (
    <Box
      h={{ base: "45px", md: "100vh" }}
      borderRight={{md:"1px solid"}}
      py={{md:4}}
      px={{ base: "2", md: "4" }}
      position={"fixed"}
      // top={{md:"0"}}
      bottom={-1}
      left={0}
      right={{base:0,md:"auto"}}
      bg="black"
    >
      <Flex
        justifyContent={{base:"space-between",md:"flex-start"}}
        direction={{ base: "row", md: "column" }}
        gap={{base:0,md:4}}
        h={"full"}
        w={"full"}
      >
        <Flex
          direction={"column"}
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
        >
          <motion.div animate={rot ? {rotate:360} : null} whileHover={rot? null : {rotate:720}} transition={rot ? {duration:0.125,repeat:13,repeatDelay:0} : {duration:0.35}}>
          <Image src="/Nest_New.png" h={"70px"} mr={3.5} />
          </motion.div>
          <Flex justifyContent={"center"}>
            <Text fontSize={"20px"} letterSpacing={"10px"} color={"#4d7f96"}>
              NEST
            </Text>
          </Flex>
        </Flex>
        

        {/* <Link to={"/"} as={RouterLink} pl={2} display={{base:"block",md:"none"}}>
          <AiFillHome />
        </Link> */}
        <Home />
        <Search/>
        <Suggested />
        <Create/>
        <Profile/>
        <Tooltip
              openDelay={300}
              hasArrow
              label={"Logout"}
              display={{ base: "block", md: "none" }}
            >
              <Flex
                alignItems={"center"}
                fontSize={"24px"}
                _hover={{ bg: "whiteAlpha.400" }}
                mt={{md:"auto"}}
                onClick={signOutUser}
                cursor={"pointer"}
                borderRadius={5}
              >
                <Flex  pb={"6px"} pr={1} alignItems={"center"} justifyContent={"center"} w={10} h={10} display={{base:"flex",md:"none"}}>
                <SlLogout />
                </Flex>
                <Flex w={168} display={{base:"none",md:"flex"}}
                h={9} alignItems={"center"} justifyContent={{base:"center",md:"flex-start"}}>
                <Flex ml={2}>
                <SlLogout />
                </Flex>
                <Button p={0} fontWeight={400} isLoading={isLoggingOut} _hover={{bg:"transparent"}} bg={"transparent"} ml={3.5} fontSize={18} display={{base:"none",md:"block"}}>
                Log out
                </Button>
                </Flex>
              </Flex>
            </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
