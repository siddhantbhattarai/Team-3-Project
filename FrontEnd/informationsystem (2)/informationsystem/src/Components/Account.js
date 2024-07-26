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
  Flex,
  VStack,
} from "@chakra-ui/react";

const Account = () => {
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = () => {
    setSearchPerformed(true);
  };

  return (
    <Box p={4} maxW="1200px" mx="auto">
      <VStack mb="4" spacing={4} align="stretch">
        <Flex align="center" justify="space-between">
          <Select placeholder="Level" width="200px" mr="4" />
          <Select placeholder="Semester" width="200px" mr="4" />
          <Select placeholder="Section" width="200px" mr="4" />
          <Input placeholder="Name" width="200px" mr="4" />
        </Flex>
        <Button
          onClick={handleSearch}
          colorScheme="blue"
          size="lg"
          alignSelf="flex-start"
        >
          Search
        </Button>
      </VStack>
      {searchPerformed && (
        <Table
          variant="simple"
          borderWidth="1px"
          borderRadius="md"
          overflowX="auto"
        >
          <Thead bg="gray.100">
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
