import { Box, Flex,Tooltip } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";

const Create = () => {
  return (
    <>
      <Tooltip
        openDelay={300}
        hasArrow
        label={"Create"}
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
            <IoIosAddCircle />
          </Flex>
          <Flex
            w={168}
            display={{ base: "none", md: "flex" }}
            h={10}
            alignItems={"center"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Flex ml={2} w={8}>
            <IoIosAddCircle />
            </Flex>
            <Box ml={2} fontSize={18} display={{ base: "none", md: "block" }}>
              Create
            </Box>
          </Flex>
        </Flex>
      </Tooltip>
    </>
  );
};

export default Create;
