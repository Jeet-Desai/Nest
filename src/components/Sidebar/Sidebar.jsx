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
} from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { MdNotificationsActive } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { Link as RouterLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome />,
      text: "Home",
      link: "/",
    },
    {
      icon: <IoSearch />,
      text: "Search",
    },
    {
      icon: <MdNotificationsActive />,
      text: "Notifications",
    },
    {
      icon: <IoIosAddCircle />,
      text: "Create",
    },
    {
      icon: (
        <Avatar
          size={"xs"}
          name={"Jeet Desai MUSIC"}
          src={"/profile-pic.png"}
        />
      ),
      text: "Profile",
      link: "/profile",
    },
    // {
    //   icon:<SlLogout />,
    //   text:"Logout",
    //   link:"/auth"
    // }
  ];

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
        gap={5}
        h={"full"}
        w={"full"}
      >
        <Flex
          direction={"column"}
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
        >
          <Image src="/Nest-2.png" h={"70px"} mr={3.5} />
          <Flex justifyContent={"center"}>
            <Text fontSize={"20px"} letterSpacing={"10px"} color={"#4d7f96"}>
              NEST
            </Text>
          </Flex>
        </Flex>

        {/* <Link to={"/"} as={RouterLink} pl={2} display={{base:"block",md:"none"}}>
          <AiFillHome />
        </Link> */}
        {sidebarItems.map((item, index) => {
          return (
            <Tooltip
              openDelay={300}
              hasArrow
              label={item.text}
              display={{ base: "block", md: "none" }}
            >
              <Link
                // display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                // justifyContent={{base:"center",md:"flex-start"}}
                fontSize={"29px"}
                _hover={{ bg: "whiteAlpha.400" }}
                
              >
                <Flex alignItems={"center"} justifyContent={"center"} w={10} h={10} display={{base:"flex",md:"none"}}>
                {item.icon}
                </Flex>
                <Flex w={168} display={{base:"none",md:"flex"}}
                h={9} alignItems={"center"} justifyContent={{base:"center",md:"flex-start"}}>
                <Flex w={8}>
                {item.icon}
                </Flex>
                <Box ml={2} fontSize={18} display={{base:"none",md:"block"}}>
                  {item.text}
                </Box>
                </Flex>
                

              </Link>
            </Tooltip>
          );
        })}
        <Tooltip
              openDelay={300}
              hasArrow
              label={"Logout"}
              display={{ base: "block", md: "none" }}
            >
              <Link
                // display={"flex"}
                to={"/auth"}
                as={RouterLink}
                alignItems={"center"}
                // justifyContent={{base:"center",md:"flex-start"}}
                fontSize={"24px"}
                _hover={{ bg: "whiteAlpha.400" }}
                mt={{md:"auto"}}
              >
                <Flex alignItems={"center"} justifyContent={"center"} w={10} h={10} display={{base:"flex",md:"none"}}>
                <SlLogout />
                </Flex>
                <Flex w={168} display={{base:"none",md:"flex"}}
                h={9} alignItems={"center"} justifyContent={{base:"center",md:"flex-start"}}>
                <Flex>
                <SlLogout />
                </Flex>
                <Box ml={3} fontSize={18} display={{base:"none",md:"block"}}>
                  Log out
                </Box>
                </Flex>
              </Link>
            </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
