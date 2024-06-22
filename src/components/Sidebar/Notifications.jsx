import { Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MdNotificationsActive } from "react-icons/md";

const Notifications = () => {
  return (
    <>
      <Tooltip
        openDelay={300}
        hasArrow
        label={"Notifications"}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          fontSize={"29px"}
          _hover={{ bg: "whiteAlpha.400" }}
          cursor={"pointer"}
          borderRadius={5}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            w={10}
            h={10}
            display={{ base: "flex", md: "none" }}
          >
            <MdNotificationsActive />
          </Flex>
          <Flex
            w={168}
            display={{ base: "none", md: "flex" }}
            h={10}
            alignItems={"center"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Flex ml={2} w={8}>
              <MdNotificationsActive />
            </Flex>
            <Box ml={2} fontSize={18} display={{ base: "none", md: "block" }}>
              Notifications
            </Box>
          </Flex>
        </Flex>
      </Tooltip>
    </>
  );
};

export default Notifications;
