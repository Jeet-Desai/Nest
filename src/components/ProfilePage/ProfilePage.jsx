import { Container, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";
import useAuthStore from "../../store/useAuthStore";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const {pathname} = useLocation();
  const Authenticated = useAuthStore()
  const user=Authenticated.user;
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = pathname !== "/auth" && !user;
  return (
    <Container maxW={"container.lg"} py={canRenderNavbar ? {base:2,md:5} : 10}>
      <Flex direction={"column"} maxW="full" gap={8}>
        <ProfileHeader />
        <Divider borderColor={"#4d7f96"} />
        <Flex
          direction={"column"}
          w={"full"}
          // borderTop={"1px solid"}
          // borderColor={"#4d7f96"}
          px={{base:0,md:0}}
        >
          <ProfileTabs />
          <ProfilePosts />
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProfilePage;
