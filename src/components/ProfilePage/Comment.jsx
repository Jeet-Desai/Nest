import { Avatar, Flex, Link, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom"
import React from 'react'
import useGetUserbyUID from '../../hooks/useGetUserbyUID';
import { timeAgo } from './../../hooks/useTimeAgo';

const Comment = (props) => {
  const comment=props.comment;
  const {userProfile,isUpdating,setUpdating}= useGetUserbyUID(comment.createdBy);
  console.log("USER IS",userProfile);
  // alert("CALLED")
  if(isUpdating)
    return(
    <>
    <Flex w={"full"} alignItems={"center"} gap={3}>
      <SkeletonCircle/>
      <Flex direction={"column"} gap={2}>
        <Skeleton h={2} w={"200px"}/>
        <Skeleton h={2} w={"60px"}/>
      </Flex>
    </Flex>
    </>
  )
  return (
    <>
        <Flex>
            <Link as={RouterLink} to={`/${userProfile.userName}`} >
            <Avatar src={userProfile?.profilePicURL} size={"sm"}/>
            </Link>
            <Flex  direction={"column"} ml={4}>
            <Flex>
            <Flex direction={"column"} alignItems={"flex-start"}>
            <Link as={RouterLink} to={`/${userProfile.userName}`} _hover={{textDecoration:"none"}}>
            <Text fontSize={14}fontWeight={600}>
                      {userProfile?.userName}
            </Text>
            </Link>
            <Text fontSize={12} color={"gray.500"}>{timeAgo(comment.createdAt)}</Text>
            </Flex>
            <Text fontSize={15} ml={2}>
                {comment.commentText}
            </Text>
            </Flex>

            </Flex>
        </Flex>
    </>
  )
}

export default Comment