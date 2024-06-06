import { Avatar, AvatarGroup, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ProfileHeader = ({userProfile}) => {
  return (
    <Flex
      alignItems={{ base: "flex-start" }}
      direction={{ base: "column", bp830: "row" }}
      w={"full"}
      px={3}
      pb={2}
      borderBottom={"1px solid"}
      borderColor={"#4d7f96"}
    >
      <AvatarGroup size={{ base: "xl", bp830: "2xl" }} alignSelf={"flex-start"}>
        <Avatar src={userProfile.profilePicURL} alt={"Avatar"} />
      </AvatarGroup>

      <Flex
        direction={"column"}
        pl={{ base: 0, bp830: 20 }}
        alignItems={"flex-start"}
      >
        <Flex w="full" gap={5} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={18} fontWeight={600}>{userProfile.userName}</Text>
          <Button
            _hover={{ bg: "#383838", color: "white" }}
            bg={"#545454"}
            color={"white"}
            fontSize={15}
            h={7}
          >
            Edit Profile
          </Button>
        </Flex>
        <Text mt={4} fontSize={16}>
          <Text as={"span"} fontWeight={"bold"} mr={1}>
            {userProfile.posts.length}
          </Text>
          Posts
          <Text as={"span"} fontWeight={"bold"} ml={5} mr={1}>
          {userProfile.followers.length}
          </Text>
          Followers
          <Text as={"span"} fontWeight={"bold"} ml={5} mr={1}>
          {userProfile.following.length}
          </Text>
          Following
        </Text>
        <Flex mt={3} direction={"column"}>
          <Text fontSize={15} fontWeight={600}>
            {userProfile.fullName}
          </Text>
          <Text mt={0} fontSize={15}>
            {userProfile.bio}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileHeader;
