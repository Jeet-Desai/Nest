import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Comment = (props) => {
  return (
    <>
        <Flex alignItems={"center"}>
            <Avatar src={props.avatar} size={"sm"}/>
            <Flex  direction={"column"} ml={4}>
            <Flex>
            <Text fontSize={14}fontWeight={600}>
                      {props.username}
            </Text>
            <Text fontSize={15} ml={2}>
                {props.text}
            </Text>
            </Flex>
            <Text fontSize={12} color={"gray.500"}>{props.postedBefore}</Text>
            </Flex>
        </Flex>
    </>
  )
}

export default Comment