import { Box ,Flex} from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";


const PageLayout = ({ children }) => {
  const {pathname} = useLocation();
  return (
    <Flex direction={{base:"column",md:"row"}} h={"100vh"}>
      <Box>
        {pathname !== "/auth" ? (
          <Box display={{base:"none",md:"block"}} w={"200px"}>
            <Sidebar />
          </Box>
        ) : (
          null
        )}
      </Box>
        <Box flex={1} display={{base:"none",md:"block"}}>
          {children}
        </Box>
        <Box flex={1} paddingTop={"0px"} display={{base:"block",md:"none"}}>
          {children}
        </Box>
        <Box>
        {pathname !== "/auth" ? (
          <Box display={{base:"block",md:"none"}}  h={"70px"}>
            <Sidebar />
          </Box>
        ) : (
          null
        )}
      </Box>
       
        
        
      
    </Flex>
  );
};

export default PageLayout;
