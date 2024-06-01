import { Avatar, AvatarGroup, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ProfileHeader = () => {
  return (
    <Flex
      alignItems={{ base: "flex-start" }}
      direction={{ base: "column", bp830: "row" }}
      w={"full"}
      px={{ base: 3, bp830: 10 }}
      py={5}
    >
      <AvatarGroup size={{ base: "xl", bp830: "2xl" }} alignSelf={"flex-start"}>
        <Avatar src={"profile-pic.png"} alt={"jeetdesaimusic"} />
      </AvatarGroup>

      <Flex
        direction={"column"}
        pl={{ base: 0, bp830: 20 }}
        alignItems={"flex-start"}
      >
        <Flex w="full" justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={18} fontWeight={600}>jeetdesaimusic</Text>
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
            80
          </Text>
          Posts
          <Text as={"span"} fontWeight={"bold"} ml={2} mr={1}>
            100k
          </Text>
          Followers
          <Text as={"span"} fontWeight={"bold"} ml={2} mr={1}>
            1231
          </Text>
          Following
        </Text>
        <Flex mt={3} direction={"column"}>
          <Text fontSize={15} fontWeight={600}>
            Jeet Desai
          </Text>
          <Text mt={0} fontSize={15}>
            DAIICT'26
            <br />
            Life is incomplete without music!
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileHeader;
