import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggested from "../../hooks/useGetSuggested";

const SuggestedUsers = () => {
  const year = new Date().getFullYear();
  const { sUsers, isUpdating,removeUser } = useGetSuggested();
  // if (isUpdating) return null;
  return (
    <VStack px={2} gap={4}>
      <SuggestedHeader />
      <Flex
        mt={2}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={"full"}
      >
        {sUsers.length!=0 && (
          <>
            <Text color={"rgb(168, 168, 168)"} fontSize={14}>
              Suggested for you
            </Text>
            <Text
              fontSize={14}
              _hover={{ color: "rgb(168, 168, 168)" }}
              fontWeight={"600"}
              cursor={"pointer"}
            >
              See All
            </Text>
          </>
        )}
      </Flex>

      <VStack w={"full"}>
        {sUsers.map((user) => (
          <SuggestedUser user={user} key={user.id} removeUser={removeUser}/>
        ))}
      </VStack>

      <Box mt={2} fontSize={13.5} alignSelf={"flex-start"}>
        &copy; {year} Built By{" "}
        <Link
          target={"_blank"}
          href={"https://www.linkedin.com/in/jeet-desai-98502823a/"}
          _hover={{ color: "rgb(168, 168, 168)" }}
          style={{ textDecoration: "none" }}
        >
          Jeet Desai
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
