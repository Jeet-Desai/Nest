import { Box, Flex, Text, VStack,Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
    const year=new Date().getFullYear();
  return (
    <VStack px={2} gap={4}>
        <SuggestedHeader/>
        <Flex  mt={2} alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text color={"rgb(168, 168, 168)"} fontSize={14}>Suggested for you</Text>
        <Text fontSize={14} _hover={{color:"rgb(168, 168, 168)"}} fontWeight={"600"} cursor={"pointer"}>See All</Text>
        </Flex>

        <VStack w={"full"} >
            {/* <SuggestedUser username="dilipbhainaik" avatar="profile-pic-6.jpg" followers="50k"/> */}
            {/* <SuggestedUser username="rushan_bot" avatar="profile-pic-5.jpg" followers="7"/> */}
            {/* <SuggestedUser username="jimit_desai03" avatar="profile-pic-4.jpg" followers="700"/> */}
        </VStack>

        <Box mt={2} fontSize={13.5} alignSelf={"flex-start"}>
        &copy; {year} Built By{" "}
        <Link target={"_blank"} href={"https://www.linkedin.com/in/jeet-desai-98502823a/"} _hover={{color:"rgb(168, 168, 168)"}} style={{textDecoration:"none"}}>Jeet Desai</Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers