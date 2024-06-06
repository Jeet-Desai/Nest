import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const PostHeader = (props) => {
  return (
    <div>
      <Flex alignItems={"center"} justifyContent={"space-between"}  py={5} px={2}>
        <Flex alignItems={"center"}>
          <Avatar src={props.avatar} size={"sm"}/>
          <Text ml={2}>{props.username}</Text>
          <Box ml={2} color={"gray"}>
            1w
          </Box>
        </Flex>
        <Box
        color={"blue.600"}
        _hover={{color:"white"}}
        transition={"0.2s ease-in-out"}
        cursor={"pointer"}
        >
          <Text>Unfollow</Text>
        </Box>
      </Flex>
    </div>
  )
}

export default PostHeader