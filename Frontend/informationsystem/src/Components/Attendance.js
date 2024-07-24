// src/pages/Attendance.js
import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  useToast,
  Flex,
} from "@chakra-ui/react";

const Attendance = () => {
  const [className, setClassName] = useState("");
  const [batchId, setBatchId] = useState("");
  const [date, setDate] = useState("");
  const [students, setStudents] = useState([]);
  const toast = useToast();

  const fetchAttendanceData = async () => {
    // Fetch data from API and setStudents with response
    const response = await fetch("your-api-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ className, batchId, date }),
    });
    const data = await response.json();
    setStudents(data);
  };

  const saveAttendance = async () => {
    // Save attendance data
    const response = await fetch("your-save-api-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date, students }),
    });

    if (response.ok) {
      toast({
        title: "Successfully Saved",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box>
      <Text fontSize="2xl" mb="4">
        Attendance
      </Text>
      <Flex mb="4" align="center">
        <Input
          placeholder="Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          mr="2"
          bg="brand.lightBlue"
          width="25%"
        />
        <Input
          placeholder="Batch ID"
          value={batchId}
          onChange={(e) => setBatchId(e.target.value)}
          mr="2"
          bg="brand.lightBlue"
          width="25%"
        />
        <Input
          placeholder="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          mr="2"
          bg="brand.lightBlue"
          width="25%"
        />
        <Button onClick={fetchAttendanceData} colorScheme="blue" ml="auto">
          Fetch Attendance
        </Button>
      </Flex>
      {students.length > 0 && (
        <Box>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Student ID</Th>
                <Th>Name</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student, index) => (
                <Tr key={student.id}>
                  <Td>{student.id}</Td>
                  <Td>{student.name}</Td>
                  <Td>
                    <Select
                      value={student.status}
                      onChange={(e) => {
                        const updatedStudents = [...students];
                        updatedStudents[index].status = e.target.value;
                        setStudents(updatedStudents);
                      }}
                    >
                      <option value="absent">Absent</option>
                      <option value="present">Present</option>
                    </Select>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Button mt="4" colorScheme="green" onClick={saveAttendance}>
            Save
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Attendance;
