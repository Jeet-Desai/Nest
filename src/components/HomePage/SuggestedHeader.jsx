import { Avatar, Button, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import useLogout from "../../hooks/useLogout";

const SuggestedHeader = () => {
  const {signOutUser,isLoggingOut,error}=useLogout();
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mt={4} w={"full"}>
      <Flex alignItems={"center"}>
        <Avatar src={"profile-pic.png"} size={"md"} />
        <Text ml={3} fontSize={14} fontWeight={600}>jeetdesaimusic</Text>
      </Flex>

      <Button
        bg={"transparent"}
        style={{textDecoration:"none"}}
        color={"blue.600"}
        onClick={signOutUser}
        isLoading={isLoggingOut}
        _hover={{bg:"transparent",color:"white"}}
        transition={"0.2s ease-in-out"}
        fontSize={14}
        p={"0"}   
    >
        <Text>Log out</Text>
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
