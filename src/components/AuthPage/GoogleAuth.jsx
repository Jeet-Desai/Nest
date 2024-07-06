// GoogleAuth.jsx
import React from 'react';
import { Alert, AlertIcon, Button, Flex, Image, Text, Spinner } from '@chakra-ui/react';
import useGoogleSignIn from '../../hooks/useGoogleSignIn';

const GoogleAuth = (props) => {
  const { signInWithGoogle, loading, error } = useGoogleSignIn();

  const handleSignInClick = async () => {
    await signInWithGoogle();
  };

  return (
    <Flex alignItems="center" direction="column">
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button onClick={handleSignInClick} variant="ghost" disabled={loading}>
        {loading ? (
          <Flex align="center">
            <Spinner size="sm" mr={2} />
          </Flex>
        ) : (
          <>
            <Image h={8} src="Google.png" />
            <Text mx={1} cursor="pointer" color="blue.500">
              Continue with Google
            </Text>
          </>
        )}
      </Button>
    </Flex>
  );
};

export default GoogleAuth;
