import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import ParentNavbar from "./ParentNavbar";
import ParentSidebar from "./ParentSidebar";

const ParentDashboard = () => {
  const studentId = 6;
  const [attendance, setAttendance] = useState({});
  const [assignment, setAssignment] = useState({});
  const [error, setError] = useState("");

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const trackColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.200");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const attendanceResponse = await axios.get(
          `https://localhost:7040/api/Attendance/studentSummary/${studentId}`
        );
        setAttendance(attendanceResponse.data);
        const assignmentResponse = await axios.get(
          `https://localhost:7040/api/Assignment/student-summary/${studentId}`
        );
        setAssignment(assignmentResponse.data);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        console.error("Failed to fetch data:", err);
      }
    };

    fetchData();
  }, [studentId]);

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  const attendancePercentage = attendance.attendancePercentage || 0;
  const remainingPercentage = 100 - attendancePercentage;
  const progressColor = attendancePercentage >= 60 ? "green.400" : "red.400";

  return (
    <Box>
      {/* <ParentNavbar /> */}
      <Flex>
        {/* <ParentSidebar /> */}
        <Box p={4} bg={bgColor} minHeight="100vh" flex="1">
          <Text fontSize="3xl" fontWeight="bold" mb={6}>
            {assignment.fullName
              ? `Luminous's Performance`
              : `Student Performance`}
          </Text>
          <SimpleGrid columns={2} spacing={4}>
            <Box p={4} bg="white" boxShadow="lg" borderRadius="lg">
              <Text fontSize="2xl" fontWeight="semibold" mb={4}>
                Attendance
              </Text>
              <Stack align="center">
                <Box position="relative">
                  <CircularProgress
                    value={attendancePercentage}
                    color={progressColor}
                    size="150px"
                    thickness="8px"
                    trackColor={trackColor}
                  >
                    <CircularProgressLabel>
                      {attendancePercentage.toFixed(2)}%
                    </CircularProgressLabel>
                  </CircularProgress>
                </Box>
              </Stack>
            </Box>
            <Box p={4} bg="white" boxShadow="lg" borderRadius="lg">
              <Text fontSize="2xl" fontWeight="semibold" mb={4}>
                Assignments
              </Text>
              <VStack spacing={3}>
                <Text fontSize="lg">
                  Completed: {assignment.submittedAssignments || 0}
                </Text>
                <Text fontSize="lg">
                  Incomplete:{" "}
                  {assignment.totalAssignments -
                    (assignment.submittedAssignments || 0)}
                </Text>
                <Text fontSize="lg">
                  Average Grade: {assignment.averageGrade || 0}
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
          <Flex justifyContent="flex-start" mt={4}>
            <Box bg="gray.200" p={4} borderRadius="md">
              <Heading as="h3" size="md">
                Attendance Summary
              </Heading>
              <Text>Total Classes: {attendance.totalClasses || 0}</Text>
              <Text>Attended: {attendance.attendedDays || 0}</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ParentDashboard;
