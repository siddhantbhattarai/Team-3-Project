import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import ParentSidebar from "./ParentSidebar"; // Ensure the path is correct
import ParentNavbar from "./ParentNavbar"; // Ensure the path is correct

const ParentLayout = () => {
  return (
    <Flex direction="column" h="100vh">
      <ParentNavbar />
      <Flex flex="1">
        <ParentSidebar />
        <Box flex="1" p={4}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ParentLayout;
