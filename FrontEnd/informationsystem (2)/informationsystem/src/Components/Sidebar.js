// src/components/Sidebar.js
import React from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyles = ({ isActive }) => ({
    width: "100%",
    background: isActive ? "#F28C02" : "#274682",
    color: "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "4px",
  });

  return (
    <Box w="200px" bg="brand.blue" color="white" p="4" minH="100vh" pt="5">
      <VStack spacing="4" align="start">
        {[
          { name: "Dashboard", path: "/" },
          { name: "Account", path: "/account" },
          { name: "Assignment", path: "/assignment" },
          { name: "Attendance", path: "/attendance" },
          { name: "Events", path: "/events" },
        ].map((item) => (
          <NavLink to={item.path} key={item.name} style={linkStyles}>
            {item.name}
          </NavLink>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
