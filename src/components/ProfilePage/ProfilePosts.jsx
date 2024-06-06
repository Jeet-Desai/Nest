import { Box,Flex, Grid, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SiDgraph } from "react-icons/si";
import ProfilePost from "./ProfilePost";


const ProfilePosts = () => {
  const [isLoading, Load] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      Load(false);
    }, 2000);
  }, []);
  return (
    <Grid mt={5}
      templateColumns={"repeat(3,1fr)"}
      justifyContent={"center"}
      gap={1}
    >
      {isLoading ? ([0, 1, 2, 3, 4, 5, 6, 7, 8].map((item,index) => (
        <Skeleton key={index} w={"full"} h={{base:170,md:300}}/>

))) : (
    <>
    <ProfilePost img={"Jeet-1.jpg"}/>
    <ProfilePost img={"Jeet-2.jpg"}/>
    <ProfilePost img={"Jeet-3.jpg"}/>
    <ProfilePost img={"Jeet-4.jpg"}/>
    <ProfilePost img={"Jeet-5.jpg"}/>
    <ProfilePost img={"Jeet-6.jpg"}/>
    <ProfilePost img={"Jeet-7.jpg"}/>
    <ProfilePost img={"Jeet-8.jpg"}/>
    <ProfilePost img={"Jeet-9.jpg"}/>
    <ProfilePost img={"Jeet-10.jpg"}/>
    <ProfilePost img={"Jeet-1.jpg"}/>
    <ProfilePost img={"Jeet-2.jpg"}/>
    <ProfilePost img={"Jeet-3.jpg"}/>
    <ProfilePost img={"Jeet-4.jpg"}/>
    <ProfilePost img={"Jeet-5.jpg"}/>
    <ProfilePost img={"Jeet-6.jpg"}/>
    <ProfilePost img={"Jeet-7.jpg"}/>
    <ProfilePost img={"Jeet-8.jpg"}/>
    <ProfilePost img={"Jeet-9.jpg"}/>
    <ProfilePost img={"Jeet-10.jpg"}/>
    <ProfilePost img={"Jeet-1.jpg"}/>
    <ProfilePost img={"Jeet-2.jpg"}/>
    <ProfilePost img={"Jeet-3.jpg"}/>
    <ProfilePost img={"Jeet-4.jpg"}/>
    <ProfilePost img={"Jeet-5.jpg"}/>
    <ProfilePost img={"Jeet-6.jpg"}/>
    <ProfilePost img={"Jeet-7.jpg"}/>
    <ProfilePost img={"Jeet-8.jpg"}/>
    <ProfilePost img={"Jeet-9.jpg"}/>
    <ProfilePost img={"Jeet-10.jpg"}/>

    </>
)}
    </Grid>
  );
};

export default ProfilePosts;
