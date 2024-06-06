import { Box ,Flex} from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import useAuthStore from "../../store/useAuthStore";
import Navbar from "../../components/Sidebar/Navbar.jsx";


const PageLayout = ({ children }) => {
  const {pathname} = useLocation();
  const Authenticated = useAuthStore()
  const user=Authenticated.user;
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = pathname !== "/auth" && !user;
  return (
    <Flex direction={canRenderNavbar ? "column": {base:"column",md:"row"}} h={"100vh"} overflowY={"auto"}>
      <Box>
        {canRenderSidebar ? (
          <Box display={{base:"none",md:"block"}} w={"200px"}>
            <Sidebar />
          </Box>
        ) : (
          null
        )}
      </Box>
        {canRenderNavbar ? <Navbar/>:null}
        <Box flex={1} display={{base:"none",md:"block"}}>
          {children}
        </Box>
        <Box flex={1} paddingTop={"0px"} display={{base:"block",md:"none"}}>
          {children}
        </Box>
        <Box>
        {canRenderSidebar ? (
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
