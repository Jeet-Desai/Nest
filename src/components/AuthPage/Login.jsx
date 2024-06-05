import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import useSignUpWithEmailPassword from "../../hooks/useSignUpWithEmailPassword";
import useLoginWithEmailPassword from "../../hooks/useLoginWithEmailPassword";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const [isHidden, Hide] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const {login,loading,error} = useLoginWithEmailPassword();

  return (
    <>
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
      <Button isLoading={loading} colorScheme="blue" w={"full"} onClick={()=>login(input)}>
        Log In
      </Button>
    </>
  );
};
export default Login;
