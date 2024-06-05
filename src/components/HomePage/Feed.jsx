import { Container, Flex, Box, VStack, SkeletonCircle, Image, Skeleton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Post from "./Post"

const Feed = () => {
  const [isloading,setLoad]=useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  },[])
  return (
    <Container  maxW={"container.sm"} px={3}>

        {isloading ? (
          [0,1,2,3].map((item,index)=>(
            <VStack key={index} gap={4} mb={5} alignItems={"flex-start"}>
              <Flex alignItems={"center"} gap={2}>
                <SkeletonCircle size={10}/>
                <Skeleton height='10px' w={"200px"}/>
              </Flex>
              <Skeleton w={"full"} h={"500px"} border={"5px solid green"}/>
            </VStack>
            )
          )
        ) : (
          <Box>
          <Post username="jeetdesaimusic" image="profile-pic.png" avatar="profile-pic.png" caption="Bound by Beats ❤️"/>
          <Post username="chaitalidesai" image="img6.jpg" avatar="profile-pic-2.jpg" caption="Loving myself!"/>
          <Post username="mehul_p_desai" image="profile-pic-3.jpg" avatar="profile-pic-3.jpg" caption="A much needed escape!"/>
          <Post username="jeetdesaimusic" image="img1.jpg" avatar="profile-pic.png" caption="Like father like son..."/>
          </Box>
        ) }
        
    </Container>
  )
}

export default Feed