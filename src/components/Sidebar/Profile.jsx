import { Avatar,Box, Flex, Link, Tooltip } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import useAuthStore from "../../store/useAuthStore";

const Profile = () => {
    const authUser = useAuthStore(state=>state.user);
  return (
    <>
      <Tooltip
        openDelay={300}
        hasArrow
        label={"Profile"}
        display={{ base: "block", md: "none" }}
      >
        <Link
          // display={"flex"}
          to={`/${authUser.userName}`}
          as={RouterLink}
          // alignItems={"center"}
          // justifyContent={{base:"center",md:"flex-start"}}
          fontSize={"29px"}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={5}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            w={10}
            h={10}
            display={{ base: "flex", md: "none" }}
          >
            <Avatar
              size={"xs"}
              src={authUser.profilePicURL ? authUser.profilePicURL : null}
            />
          </Flex>
          <Flex
            w={168}
            display={{ base: "none", md: "flex" }}
            h={10}
            alignItems={"center"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Flex ml={2} justifyContent={"center"} w={8} >
              <Avatar
                size={"xs"}
                name={"Jeet Desai MUSIC"}
                src={authUser.profilePicURL}
              />
            </Flex>
            <Box ml={2} fontSize={18} display={{ base: "none", md: "block" }}>
              Profile
            </Box>
          </Flex>
        </Link>
      </Tooltip>
    </>
  );
};

export default Profile;
