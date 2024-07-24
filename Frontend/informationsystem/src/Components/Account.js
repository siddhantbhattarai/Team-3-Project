// src/pages/Account.js
import React, { useState } from "react";
import {
  Box,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Select,
} from "@chakra-ui/react";

const Account = () => {
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = () => {
    setSearchPerformed(true);
  };

  return (
    <Box>
      <Box mb="4">
        <Select placeholder="Level" width="200px" mr="4" />
        <Select placeholder="Semester" width="200px" mr="4" />
        <Select placeholder="Section" width="200px" mr="4" />
        <Input placeholder="Name" width="200px" mr="4" />
        <Button onClick={handleSearch}>Search</Button>
      </Box>
      {searchPerformed && (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Student No</Th>
              <Th>Name</Th>
              <Th>Fee</Th>
              <Th>Due Date</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Sample Data */}
            <Tr>
              <Td>1</Td>
              <Td>John Doe</Td>
              <Td>$200</Td>
              <Td>31st July 2024</Td>
              <Td>
                <Button size="sm" mr="2">
                  View
                </Button>
                <Button size="sm" colorScheme="red">
                  Delete
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Jane Doe</Td>
              <Td>$300</Td>
              <Td>31st August 2024</Td>
              <Td>
                <Button size="sm" mr="2">
                  View
                </Button>
                <Button size="sm" colorScheme="red">
                  Delete
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default Account;
