import React from "react";
import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import useFetchUserPosts from "../../hooks/useFetchUserPosts";

const ProfilePosts = () => {

  const { posts, isUpdating } = useFetchUserPosts();

  if (!isUpdating && posts.length === 0) {
    return (
      <Flex flexDir="column" textAlign={"center"} mx={"auto"} mt={10}>
        <Text fontSize={"2xl"}>No Posts Found!</Text>
      </Flex>
    );
  }
  return (
		<Grid
			templateColumns={"repeat(3,1fr)"}
			gap={1}
			columnGap={1}
      mt={5}
		>
			{/* {isUpdating &&
				[0, 1, 2].map((_, idx) => (
					<VStack key={idx} alignItems={"flex-start"} gap={4}>
						<Skeleton w={"full"}>
							<Box h='300px'>contents wrapped</Box>
						</Skeleton>
					</VStack>
				))} */}

			{!isUpdating && (
				<>
					{posts.map((post) => (
						<ProfilePost post={post} key={post.id} />
					))}
				</>
			)}
		</Grid>
	);


};

export default ProfilePosts;
