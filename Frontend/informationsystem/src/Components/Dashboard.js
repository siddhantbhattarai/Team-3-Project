// src/pages/Dashboard.js
import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box>
      <Text fontSize="xl" mb="4">
        Welcome Admin
      </Text>
      <SimpleGrid columns={2} spacing={4} mb="4">
        <Box p="4" bg="brand.white" boxShadow="md">
          <Text fontSize="xl" color="brand.blue">
            Students
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="brand.orange">
            1000
          </Text>
        </Box>
        <Box p="4" bg="brand.white" boxShadow="md">
          <Text fontSize="xl" color="brand.blue">
            Staff
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="brand.orange">
            53
          </Text>
        </Box>
      </SimpleGrid>
      <VStack spacing="4" align="start">
        <Text fontSize="xl">Recent Request</Text>
        <Box w="full" bg="brand.white" boxShadow="md" p="4">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Student No</Th>
                <Th>Name</Th>
                <Th>Parents Name</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>John Doe</Td>
                <Td>Mr. Doe</Td>
                <Td>23rd July 2024</Td>
                <Td>
                  <Button size="sm" mr="2">
                    Edit
                  </Button>
                  <Button size="sm" colorScheme="red">
                    Delete
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Jane Doe</Td>
                <Td>Mr. Doe</Td>
                <Td>23rd July 2024</Td>
                <Td>
                  <Button size="sm" mr="2">
                    Edit
                  </Button>
                  <Button size="sm" colorScheme="red">
                    Delete
                  </Button>
                </Td>
              </Tr>
              {/* Add more rows as needed */}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;
