import { Alert, AlertIcon, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import useGoogleSignIn from '../../hooks/useGoogleSignIn'

const GoogleAuth = () => {
  const {loading,error,signIn}=useGoogleSignIn();
  return (
    <Flex alignItems={"center"} direction={"column"}>
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
        <Button onClick={signIn} variant={"ghost"} isLoading={loading}>
        <Image h={8} src="Google.png" />
        <Text mx={1} cursor={"pointer"} color={"blue.500"}>Continue with Google</Text>
        </Button>
    </Flex>
  )
}

export default GoogleAuth