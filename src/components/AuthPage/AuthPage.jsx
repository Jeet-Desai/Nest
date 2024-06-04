import { Container, Flex, Image, VStack,Text } from "@chakra-ui/react";
import React from "react";
import AuthForm from "./AuthForm";

const AuthPage = () => {
  return (
    <div>
      <Flex
        minH={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        px={4}
    //     backgroundImage={"/bg-img4.jpg"}
    //     backgroundSize={"cover"}
    // backgroundRepeat={"no-repeat"}
    // backgroundPosition={"center"}
    // height={"100vh"} // Set the height of the container to 100% of the viewport height
    // width={"100vw"}
      >
        <Container maxWidth={"container.md"} padding={0}>
          <VStack>
            {/* <Image h={150} src="/Nest-2.png" alt="Nest Logo" /> */}
            <Flex  direction={"column"} alignItems={"center"}>
              <Image src="/Nest_New.png" h={"110px"}  mr={3.5}/>
                <Text color={"#4d7f96"} fontSize={"25px"} letterSpacing={"10px"}>
                NEST
                </Text>
            </Flex>
            <AuthForm />
          </VStack>
        </Container>
      </Flex>
    </div>
  );
};

export default AuthPage;
