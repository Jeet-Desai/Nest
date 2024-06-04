import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import useSignUpWithEmailPassword from "../../hooks/useSignUpWithEmailPassword";
import useShowToast from "../../hooks/useShowToast";

const SignUp = () => {
  const [isHidden, Hide] = useState(true);
  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });
  const {loading,error,signup}= useSignUpWithEmailPassword()

  
  return (
    <>
      <Input
        size={"sm"}
        placeholder="Full Name"
        type="text"
        value={input.fullName}
        fontSize={17}
        onChange={(e) => {
          setInput({ ...input, fullName: e.target.value });
        }}
      />
      <Input
        size={"sm"}
        placeholder="Username"
        type="text"
        value={input.userName}
        fontSize={17}
        onChange={(e) => {
          setInput({ ...input, userName: e.target.value });
        }}
      />
      <Input
        size={"sm"}
        placeholder="Email"
        type="email"
        value={input.email}
        fontSize={17}
        onChange={(e) => {
          setInput({ ...input, email: e.target.value });
        }}
      />
      <InputGroup>
        <Input
          size={"sm"}
          placeholder="Password"
          type={isHidden ? "password" : "text"}
          value={input.password}
          fontSize={17}
          onChange={(e) => {
            setInput({ ...input, password: e.target.value });
          }}
        />

        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => {
              Hide(!isHidden);
            }}
          >
            {isHidden ?  <ViewOffIcon /> : <ViewIcon /> }
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button colorScheme="blue" w={"full"}
        isLoading={loading}
      onClick={()=>signup(input)}>
        Sign Up
      </Button>
    </>
  );
};

export default SignUp;
