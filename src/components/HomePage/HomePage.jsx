import { Flex, Box, Container, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import SuggestedUsers from "./SuggestedUsers";
import { motion } from "framer-motion";
import useAuthStore from "../../store/useAuthStore";
import SuggestedUser from "./SuggestedUser";
import useGetSuggested from "../../hooks/useGetSuggested";

const HomePage = () => {
  const [rot, activate] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      activate(false);
    }, 1600);
  }, []);
  return (
    <Box>
      <Flex justifyContent={"center"} display={{ base: "flex", md: "none" }}>
        <motion.div
          animate={rot ? { rotate: 360 } : null}
          whileHover={rot ? null : { rotate: 720 }}
          transition={
            rot
              ? { duration: 0.125, repeat: 13, repeatDelay: 0 }
              : { duration: 0.35 }
          }
        >
          <Image src="/Nest_New.png" h={"60px"} mt={1} mb={1} />
        </motion.div>
      </Flex>
      <Container maxW="container.lg" px={0}>
        <Flex gap={20}>
          <Box flex={2} py={{ md: 5 }}>
            <Feed/>
          </Box>
          <Box
            flex={3}
            mr={15}
            display={{ base: "none", lg: "block" }}
            maxW={"300px"}
            // p={3}
          >
            <SuggestedUsers />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HomePage;
