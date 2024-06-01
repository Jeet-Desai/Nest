import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mt={4} w={"full"}>
      <Flex alignItems={"center"}>
        <Avatar src={"profile-pic.png"} size={"md"} />
        <Text ml={3} fontSize={14} fontWeight={600}>jeetdesaimusic</Text>
      </Flex>

      <Link to={"/auth"} as={RouterLink}
        style={{textDecoration:"none"}}
        color={"blue.600"}
        _hover={{color:"white"}}
        transition={"0.2s ease-in-out"}
        fontSize={14}   
    >
        <Text>Log out</Text>
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
