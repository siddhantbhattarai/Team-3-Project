import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ParentSidebar = () => {
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
          { name: "Dashboard", path: "/parent-dashboard" },
          { name: "Events", path: "/events" },
          { name: "Payment", path: "/payment" },
        ].map((item) => (
          <NavLink to={item.path} key={item.name} style={linkStyles}>
            {item.name}
          </NavLink>
        ))}
      </VStack>
    </Box>
  );
};

export default ParentSidebar;
