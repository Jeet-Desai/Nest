import { Button, Box, Avatar, Flex, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from "react";
import useFollowUnfollow from "../../hooks/useFollowUnfollow";
import useAuthStore from "../../store/useAuthStore";
import { Link } from "react-router-dom";

const SuggestedUser = ({ user, setUser, removeUser }) => {
  const { isFollowing, isUpdating, FollowUnfollow } = useFollowUnfollow(
    user.uid
  );
  const authUser = useAuthStore((state) => state.user);

  const handleFollowUnfollow = async () => {
    if (removeUser) {
      setTimeout(()=>{removeUser(user.uid)},600)
    }
    await FollowUnfollow(); //This does not change below isfollowing
    setUser({
      ...user,
      followers: !isFollowing
        ? [...user.followers, authUser.uid]
        : user.followers.filter((follower) => follower !== authUser.uid),
    });
    // if(removeUser)
  };
  return (
    <Flex
      my={2}
      alignItems={"center"}
      justifyContent={"space-between"}
      w={"full"}
    >
      <Flex>
      <Link as={RouterLink} to={`${user.userName}`}>
        <Avatar src={user.profilePicURL} size={"md"} />
        </Link>
        <VStack ml={3} gap={0} justifyContent={"center"} alignItems={"flex-start"}>
        <Link as={RouterLink} to={`${user.userName}`}>
          <Text fontSize={14} fontWeight={"600"}>
            {user.userName}
          </Text>
          </Link>
          <Text
            color={"rgb(168, 168, 168)"}
            alignSelf={"flex-start"}
            fontSize={12}
          >
            {user.followers.length} followers
          </Text>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          color={"blue.600"}
          _hover={{ color: "white", bg: "transparent" }}
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
