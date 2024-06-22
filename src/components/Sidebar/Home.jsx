import { Box, Flex, Link, Tooltip } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'

const Home = () => {
  return (
    <>
        <Tooltip
              openDelay={300}
              hasArrow
              label={"Home"}
              display={{ base: "block", md: "none" }}
            >
              <Link
                // display={"flex"}
                to={"/"}
                as={RouterLink}
                // alignItems={"center"}
                // justifyContent={{base:"center",md:"flex-start"}}
                fontSize={"29px"}
                _hover={{ bg: "whiteAlpha.400"}}
                borderRadius={5}
              >
                <Flex alignItems={"center"} justifyContent={"center"} w={10} h={10} display={{base:"flex",md:"none"}}>
                <AiFillHome />
                </Flex>
                <Flex w={168} display={{base:"none",md:"flex"}}
                h={10} alignItems={"center"} justifyContent={{base:"center",md:"flex-start"}}>
                <Flex ml={2} w={8}>
                <AiFillHome />
                </Flex>
                <Box ml={2} fontSize={18} display={{base:"none",md:"block"}}>
                  Home
                </Box>
                </Flex>
                

              </Link>
            </Tooltip>
    </>
  )
}

export default Home