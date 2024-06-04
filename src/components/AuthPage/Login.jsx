import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import useSignUpWithEmailPassword from "../../hooks/useSignUpWithEmailPassword";
import useLoginWithEmailPassword from "../../hooks/useLoginWithEmailPassword";

const Login = () => {
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
      <Input
        size={"sm"}
        placeholder="Password"
        type="password"
        value={input.password}
        fontSize={17}
        onChange={(e) => {
          setInput({ ...input, password: e.target.value });
        }}
      />
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
