// src/components/Navbar.js
import React from "react";
import { Box, Flex, Input, IconButton, Avatar, Image } from "@chakra-ui/react";
import { SearchIcon, BellIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png"; // Make sure to import your logo image

const Navbar = () => {
  return (
    <Box bg="brand.white" p="4" boxShadow="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Image src={logo} alt="ISMT College" height="100px" width="250px" />
        <Flex alignItems="center">
          <Input
            placeholder="Search"
            variant="outline"
            borderColor="brand.grayText"
          />
          <IconButton
            icon={<SearchIcon />}
            ml="2"
            bg="brand.orange"
            color="brand.white"
            _hover={{ bg: "brand.orange" }}
          />
          <IconButton
            icon={<BellIcon />}
            ml="4"
            bg="brand.orange"
            color="brand.white"
            _hover={{ bg: "brand.orange" }}
          />
          <Avatar name="Superadmin" ml="4" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
