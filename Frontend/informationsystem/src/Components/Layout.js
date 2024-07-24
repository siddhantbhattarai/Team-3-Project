// src/components/Layout.js
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Header from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar />
        <Box flex="1" p="4">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
