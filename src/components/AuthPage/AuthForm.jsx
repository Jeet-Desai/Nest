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

const AuthForm = () => {
  const [isLogin, setLogin] = useState(true);
  const [input,setInput]= useState({
    email:"",
    password:"",
    cpassword:""
  });

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
            <Input placeholder="Email" type="email" value={input.email} fontSize={17} onChange={(e)=>{
                setInput({...input,email:e.target.value})
            }}/>
            <Input placeholder="Password" type="password" value={input.password} fontSize={17} onChange={(e)=>{
                setInput({...input,password:e.target.value})}}/>
            {!isLogin ? (
              <Input placeholder="Confirm Password" type="password" value={input.cpassword} fontSize={17} onChange={(e)=>{
                setInput({...input,cpassword:e.target.value})}}/>
            ) : (
              "null"
            )}
            <Button colorScheme="blue" w={"full"}>
              {isLogin ? "Login" : "Sign Up"}
            </Button>

            <Flex alignItems={"center"} justifyContent={"center"} w={"full"} gap={1} my={4}>
                <Box flex={2} h={0.5} bg={"gray.400"} />
                <Text mx={1}>OR</Text>
                <Box flex={2} h={0.5} bg={"gray.400"} />
            </Flex>

            <Flex alignItems={"center"}>
                <Image h={8} src="Google.png" />
                <Text mx={1} cursor={"pointer"} color={"blue.500"}>Continue with Google</Text>
            </Flex>
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
