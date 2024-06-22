import { Button,Box, Avatar, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import useFollowUnfollow from "../../hooks/useFollowUnfollow";
import useAuthStore from "../../store/useAuthStore";

const SuggestedUser = ({user,setUser}) => {
  const { isFollowing, isUpdating, FollowUnfollow } = useFollowUnfollow(user.uid);
  const authUser = useAuthStore(state=>state.user);

  const handleFollowUnfollow = async()=>{
    await FollowUnfollow();
    setUser({...user,
      followers : !isFollowing ?  [...user.followers, authUser] : 
      user.followers.filter((follower) => follower.uid !== authUser.uid)
  })
  }
  return (
    <Flex my={2} alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Flex>
        <Avatar src={user.profilePicURL} size={"md"} />
        <VStack ml={3} gap={0} justifyContent={"center"}>
          <Text fontSize={14} fontWeight={"600"}>
            {user.userName}
          </Text>
          <Text
            color={"rgb(168, 168, 168)"}
            alignSelf={"flex-start"}
            fontSize={12}
          >
            {user.followers.length} followers
          </Text>
        </VStack>
      </Flex>
      {authUser.uid!==user.uid && (
      <Button
        color={"blue.600"}
        _hover={{ color: "white",bg:"transparent" }}
        transition={"0.2s ease-in-out"}
        cursor={"pointer"}
        fontSize={14}
        p={0}
        bg={"transparent"}
        onClick={handleFollowUnfollow}
        isLoading={isUpdating}
      >
        <Text>{isFollowing ? "Unfollow" : "Follow"}</Text>
      </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
