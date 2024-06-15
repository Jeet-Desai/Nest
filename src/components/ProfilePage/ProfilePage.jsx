import {
  Container,
  Divider,
  Flex,
  Text,
  Link,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";
import useAuthStore from "../../store/useAuthStore";
import { Link as RouterLink, useLocation, useParams } from "react-router-dom";
import useGetUserProfilebyUsername from "../../hooks/useGetUserProfilebyUsername";


const ProfilePage = () => {
  const { pathname } = useLocation();
  const Authenticated = useAuthStore();
  const user = Authenticated.user;
  const canRenderNavbar = pathname !== "/auth" && !user;
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfilebyUsername(username);
  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) return <UserNotFound />;

  return (
    <Container
      maxW={"container.lg"}
      h={"100vh"}
      py={canRenderNavbar ? { base: 2, md: 5 } : 10}
      px={{base:0,md:3}}
    >
      <Flex direction={"column"} w={"full"} gap={8}>
        {!isLoading && userProfile ? (
          <ProfileHeader userProfile={userProfile} />
        ) : (
          <ProfileHeaderSkeleton />
        )}
        <Flex
          direction={"column"}
          w={"full"}
          // borderTop={"1px solid"}
          // borderColor={"#4d7f96"}
          px={{ base: 0, md: 0 }}
        >
          <ProfileTabs />
          <ProfilePosts />
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProfilePage;

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      w={"full"}
      gap={{ base: 4, sm: 10 }}
      py={5}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SkeletonCircle size="24" />

      <VStack
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx={"auto"}
        flex={1}
      >
        <Skeleton height="12px" width="150px" />
        <Skeleton height="12px" width="100px" />
      </VStack>
    </Flex>
  );
};

const UserNotFound = () => {
  return (
    <Flex flexDir="column" textAlign={"center"} mx={"auto"}>
      <Text fontSize={"2xl"}>User Not Found</Text>
      <Link
        as={RouterLink}
        to={"/"}
        color={"blue.500"}
        w={"max-content"}
        mx={"auto"}
      >
        Go home
      </Link>
    </Flex>
  );
};
