import {
  Box,
  Text,
  Button,
  Container,
  Input,
  VStack,
  Flex,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import GoogleAuth from "./GoogleAuth";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthForm = () => {
  const searchParams = new URLSearchParams(location.search);
  const isLoginParam = searchParams.get("isLogin");
  const [isLogin, setLogin] = useState(isLoginParam ? isLoginParam==="true" : true);
  return (
    <div>
      <VStack>
        <Box
          minW={"40vw"}
          border={"3px solid white"}
          borderRadius={4}
          padding={5}
        >
          <VStack spacing={4}>
            {isLogin ? <Login/> : <SignUp/>}
            {/* <GoogleAuth/> */}
          </VStack>
        </Box>
        <Flex>
          <Text mx={2} fontSize="md">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </Text>
          <Box
            onClick={() => {
              setLogin(!isLogin);
            }}

            cursor={"pointer"}
            color={"blue.500"}
          >
            {isLogin ? " Sign Up" : " Login"}
          </Box>
        </Flex>
      </VStack>
    </div>
  );
};

export default AuthForm;
