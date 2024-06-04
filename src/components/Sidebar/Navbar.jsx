import {
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [rot, activate] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      activate(false);
    }, 1600);
  }, []);
  return (
    <Container
      bg={"black"}
      position={"sticky"}
      zIndex={10}
      top={0}
      maxW={"container.lg"}
      my={1}
    >
      <Flex
        justifyContent={"space-between"}
        gap={{ base: 0, md: 20 }}
        alignItems={"center"}
        mb={1}
      >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <motion.div
            animate={rot ? { rotate: 360 } : null}
            whileHover={rot ? null : { rotate: 720 }}
            transition={
              rot
                ? { duration: 0.125, repeat: 13, repeatDelay: 0 }
                : { duration: 0.35 }
            }
          >
            <Image
              src="/Nest_New.png"
              h={{ base: "37px", sm: "60px"}}
              position={"sticky"}
              mt={1}
              top={0}
              mb={1}
            />
          </motion.div>

          <Text
            ml={{ base: 2, md: 3 }}
            fontSize={{ base: "17px", sm: "20px", md: "24px" }}
            letterSpacing={{ base: "5px", md: "9px" }}
            color={"#4d7f96"}
          >
            NEST
          </Text>
        </Flex>
        <Flex gap={4}>
          <Link to="/auth?isLogin=true">
            <Button
              bg={"black"}
              style={{ textDecoration: "none" }}
              color={"white"}
              border={"1px solid"}
              borderColor={"white"}
              _hover={{
                bg: "#3559E0",
                color: "white",
                border: "1px solid",
                borderColor: "#3559E0",
              }}
              transition={"0.2s ease-in-out"}
              size={{ base: "sm",md:"md"}}
            //   fontSize={{ base: "12px", sm: "13px", md: "80px" }}
            >
              Log in
            </Button>
          </Link>
          <Link to="/auth?isLogin=false">
            <Button
              bg={"black"}
              style={{ textDecoration: "none" }}
              border={"1px solid"}
              borderColor={"#3559E0"}
              color={"#3559E0"}
              _hover={{
                bg: "#3559E0",
                color: "white",
                border: "1px solid",
                borderColor: "#3559E0",
              }}
              transition={"0.2s ease-in-out"}
            //   fontSize={{ base: "12px", sm: "14px", md: "60px" }}
              size={{ base: "sm", md: "md" }}
            >
              Sign up
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Divider borderColor={"#4d7f96"} />
    </Container>
  );
};

export default Navbar;
