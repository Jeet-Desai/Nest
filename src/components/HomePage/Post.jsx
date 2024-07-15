import { Box,Flex,Image, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import useGetUserbyUID from '../../hooks/useGetUserbyUID'
 
const Post = ({post}) => {
  const {userProfile,isUpdating,setUpdating} = useGetUserbyUID(post.createdBy)
  return (
    <Box>
        {isUpdating && (
          <VStack gap={4} mb={5} alignItems={"flex-start"}>
          <Flex alignItems={"center"} gap={2}>
            <SkeletonCircle size={10} />
            <Skeleton height="10px" w={"200px"} />
          </Flex>
          <Skeleton w={"full"} h={"500px"} border={"5px solid green"} />
        </VStack>
        )}
        {!isUpdating &&  <PostHeader post={post} creator={userProfile}/>}
        <Box borderRadius={4} overflow={"hidden"}>
        <Image src={post.imageURL} maxH={{base:450,md:600}} w={"full"} objectFit={"cover"}/>
        </Box>
        {!isUpdating && <PostFooter post={post} creator={userProfile} page="home"/>}
    </Box>
    
  )
}

export default Post