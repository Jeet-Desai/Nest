import { Flex, Box, Container, Image } from "@chakra-ui/react";
import React from "react";
import Feed from "./Feed";
import SuggestedUsers from "./SuggestedUsers";

const HomePage = () => {
  return (
    <Box>
    <Flex justifyContent={"center"} display={{ base: "flex", md: "none" }}>
        <Image src="/Nest-2.png" h={"60px"} position={"sticky"} top={0} mb={1}/>
      </Flex>
      <Container maxW="container.lg">
        <Flex gap={20}>
          <Box flex={2}  py={{md:5}}>
            <Feed />
          </Box>
          <Box
            flex={3}
            mr={15}
            display={{ base: "none", lg: "block" }}
            maxW={"300px"}
            // p={3}
          >
            <SuggestedUsers/>
          </Box>
        </Flex>
      </Container>
     </Box>
  );
};

export default HomePage;
