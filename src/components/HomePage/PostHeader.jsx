import { Avatar, Box, Button, Flex, Link, Text } from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom"
import React from 'react'
import { timeAgo } from '../../hooks/useTimeAgo'
import useFollowUnfollow from '../../hooks/useFollowUnfollow'

const PostHeader = ({post,creator}) => {
  const {isFollowing,isUpdating,FollowUnfollow} = useFollowUnfollow(post.createdBy)
  return (
    <div>
      <Flex alignItems={"center"} justifyContent={"space-between"}  py={5} px={{base:2,md:0}}>
        <Flex alignItems={"center"}>
          <Link as={RouterLink} to={`/${creator.userName}`} _hover={{textDecoration:"none"}} >
          <Avatar src={creator.profilePicURL} size={"sm"}/>
          </Link>
          <Link as={RouterLink} to={`/${creator.userName}`} _hover={{textDecoration:"none"}} >
          <Text ml={2}>{creator.userName}</Text>
          </Link>
          <Box ml={2} color={"gray"}>
            {timeAgo(post.createdAt)}
          </Box>
        </Flex>
        <Button
        color={"blue.600"}
        bg={"none"}
        _hover={{color:"white",bg:"none"}}
        transition={"0.2s ease-in-out"}
        isLoading={isUpdating}
        cursor={"pointer"}
        onClick={FollowUnfollow}
        
        >
          <Text>{isFollowing ? "Unfollow" : "Follow"}</Text>
        </Button>
      </Flex>
    </div>
  )
}

export default PostHeader