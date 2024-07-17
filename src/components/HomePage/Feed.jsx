import {
  Container,
  Flex,
  Box,
  VStack,
  SkeletonCircle,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import useFetchFeedPosts from "../../hooks/useFetchFeedPosts";

const Feed = () => {
  const { posts, isUpdating } = useFetchFeedPosts();
  return (
    <Container maxW={"container.sm"} px={{ base: 0, md: 3 }}>
      {!isUpdating && posts.length==0 && (
        <>
        <Text fontSize={19} textAlign={"center"}>Looks like your feed is empty 🙁</Text>
        <Text fontSize={19} textAlign={"center"}>Click the "Suggested Users" icon to follow some new friends!</Text>
        </>
      )}
      {isUpdating
        && [0, 1, 2, 3].map((item, index) => (
            <VStack key={index} gap={4} mb={5} alignItems={"flex-start"}>
              <Flex alignItems={"center"} gap={2}>
                <SkeletonCircle size={10} />
                <Skeleton height="10px" w={"200px"} />
              </Flex>
              <Skeleton w={"full"} h={"500px"} border={"5px solid green"} />
            </VStack>
          ))
        }
        {!isUpdating  &&
          posts.map((post) => <Post post={post}  key={post.id} />)}
    </Container>
  );
};

export default Feed;
