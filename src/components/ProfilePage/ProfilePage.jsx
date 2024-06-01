import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";

const ProfilePage = () => {
  return (
    <Container maxW={"container.lg"} py={5}>
      <Flex direction={"column"} maxW="full" gap={8}>
        <ProfileHeader />

        <Flex
          direction={"column"}
          w={"full"}
          borderTop={"1px solid"}
          borderColor={"whiteAlpha.300"}
          px={{base:2,sm:4}}
        >
          <ProfileTabs />
          <ProfilePosts />
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProfilePage;
