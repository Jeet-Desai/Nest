import { Box, Flex, Text } from '@chakra-ui/react'
import { MdGridOn } from "react-icons/md";
import React from 'react'
import { NotificationsLogo, SaveLogo } from '../../icons/icons';
import { CiBookmark } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

const ProfileTabs = () => {
  return (
    <Flex w={"full"} justifyContent={"center"} gap={6} mt={"-1px"} letterSpacing={0.9}>
        <Flex alignItems={"center"} cursor={"pointer"} pt={4} borderTop={"1px solid"}>
            <Box fontSize={17}>
            <MdGridOn/>
            </Box>
            <Text display={{base:"none",sm:"block"}} ml={1.5}>POSTS</Text>
        </Flex>
        <Flex alignItems={"center"} pt={4} cursor={"pointer"}>
            <Box fontSize={17} >
            <CiBookmark/>
            </Box>
            <Text display={{base:"none",sm:"block"}} ml={1.5}>SAVED</Text>
        </Flex>
        <Flex alignItems={"center"} pt={4} cursor={"pointer"}>
            <Box fontSize={17}>
            <FaRegHeart/>
            </Box>
            <Text display={{base:"none",sm:"block"}} ml={1.5}>LIKED</Text>
        </Flex>
    </Flex>
  )
}

export default ProfileTabs