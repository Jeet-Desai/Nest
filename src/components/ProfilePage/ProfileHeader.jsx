import { Avatar, AvatarGroup, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import useAuthStore from "../../store/useAuthStore";
import EditProfile from "./EditProfile";
import useFollowUnfollow from "../../hooks/useFollowUnfollow";
import useProfileStore from "../../store/useProfileStore";

const ProfileHeader = () => {
  const userProfile = useProfileStore(state=>state.userProfile);
  const authUser = useAuthStore(state=>state.user);
  const canEdit = authUser && authUser.userName===userProfile.userName;
  const canFollow = authUser && authUser.userName !== userProfile.userName;
  const {isFollowing,isUpdating,FollowUnfollow}= useFollowUnfollow(userProfile.uid);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
        {canEdit && (<Flex w="full" gap={5} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={18} fontWeight={600}>{userProfile.userName}</Text>
          <Button
            _hover={{ bg: "#383838", color: "white" }}
            bg={"#545454"}
            color={"white"}
            fontSize={15}
            h={7}
            onClick={onOpen}
          >
            Edit Profile
          </Button>
        </Flex>)}

        {canFollow && (<Flex w="full" gap={5} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={18} fontWeight={600}>{userProfile.userName}</Text>
          <Button
              bg="#3559E0"
              style={{ textDecoration: "none" }}
              border={"1px solid"}
              borderColor={"#3559E0"}
              color={"white"}
              _hover={{
                bg: "#2C46B0",
                color: "white",
                border: "1px solid",
                borderColor: "#2C46B0",
              }}
              isLoading={isUpdating}
              onClick={FollowUnfollow}
              transition={"0.2s ease-in-out"}
            //   fontSize={{ base: "12px", sm: "14px", md: "60px" }}
              size={"sm"}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </Button>
        </Flex>)}
        
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
    {canEdit && <EditProfile isOpen={isOpen} onClose={onClose}/>}
    </>
  );
};

export default ProfileHeader;
