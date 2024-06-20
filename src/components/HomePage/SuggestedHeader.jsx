import { Avatar, Button, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/useAuthStore";

const SuggestedHeader = () => {
  const {signOutUser,isLoggingOut,error}=useLogout();
  const authUser = useAuthStore(state=>state.user);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mt={4} w={"full"}>
      
      <Flex alignItems={"center"}>
      <Link as={RouterLink} to={`${authUser.userName}`}>
        <Avatar src={authUser.profilePicURL} size={"md"} />
        </Link>
        <Link _hover={{textDecoration:"none"}} as={RouterLink} to={`${authUser.userName}`}>
        <Text ml={3} fontSize={14} fontWeight={600}>{authUser.userName}</Text>
        </Link>
      </Flex>
      

      <Button
        bg={"transparent"}
        style={{textDecoration:"none"}}
        color={"blue.600"}
        onClick={signOutUser}
        isLoading={isLoggingOut}
        _hover={{bg:"transparent",color:"white"}}
        transition={"0.2s ease-in-out"}
        fontSize={14}
        p={"0"}   
    >
        <Text>Log out</Text>
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
