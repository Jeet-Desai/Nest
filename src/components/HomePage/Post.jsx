import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
 
const Post = (props) => {
  return (
    <Box>
        <PostHeader username={props.username} avatar={props.avatar}/>
        <Box borderRadius={4} overflow={"hidden"}>
        <Image src={props.image}/>
        </Box>
        {/* <PostFooter username={props.username} caption={props.caption} page="home"/> */}
    </Box>
    
  )
}

export default Post