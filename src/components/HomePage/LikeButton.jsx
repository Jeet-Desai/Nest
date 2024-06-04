import React, { useEffect,useState } from "react";
import { motion, useMotionValue, useVelocity } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { NotificationsLogo, UnlikeLogo } from "../../icons/icons";

const LikeButton = ({ isliked, likeit }) => {
  return (
    <motion.div whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 1000, damping: 20}}>
      <Box cursor={"pointer"} fontSize={18} onClick={likeit}>
        {isliked ? <UnlikeLogo /> : <NotificationsLogo />}
      </Box>
    </motion.div>
  );
};

export default LikeButton;
