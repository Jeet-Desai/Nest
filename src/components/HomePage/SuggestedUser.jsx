import { Button,Box, Avatar, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const SuggestedUser = (props) => {
  const [isFollowed, follow] = useState(false);
  return (
    <Flex my={2} alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Flex>
        <Avatar src={props.avatar} size={"md"} />
        <VStack ml={3} gap={0} justifyContent={"center"}>
          <Text fontSize={14} fontWeight={"600"}>
            {props.username}
          </Text>
          <Text
            color={"rgb(168, 168, 168)"}
            alignSelf={"flex-start"}
            fontSize={12}
          >
            {props.followers} followers
          </Text>
        </VStack>
      </Flex>
      <Button
        
        color={"blue.600"}
        _hover={{ color: "white" }}
        transition={"0.2s ease-in-out"}
        cursor={"pointer"}
        fontSize={14}
        bg={"transparent"}
        onClick={() => {
          if (isFollowed) {
            follow(false);
          } else {
            follow(true);
          }
        }}
      >
        <Text>{isFollowed ? "Unfollow" : "Follow"}</Text>
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
