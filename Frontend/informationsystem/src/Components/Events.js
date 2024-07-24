// src/pages/Events.js
import React from "react";
import { Box, Image, Text, SimpleGrid } from "@chakra-ui/react";
import chess from "../assets/chess.png"; // Correctly import the image
import futsal from "../assets/futsal.jpg"; // Correctly import the image
import hackathon from "../assets/hackathon.png"; // Correctly import the image

const events = [
  {
    id: 1,
    name: "Futsal",
    date: "24th August 2024",
    img: futsal,
  },
  {
    id: 2,
    name: "Chess Competition",
    date: "10th September 2024",
    img: chess,
  },
  {
    id: 3,
    name: "Hackathon",
    date: "1st October 2024",
    img: hackathon,
  },
  // Add more events here
];

const Events = () => {
  return (
    <Box>
      <Text fontSize="2xl" mb="4">
        Upcoming Events
      </Text>
      <SimpleGrid columns={3} spacing={4}>
        {events.map((event) => (
          <Box
            key={event.id}
            p="4"
            bg="brand.white"
            boxShadow="md"
            borderRadius="md"
          >
            <Image src={event.img} alt={event.name} mb="4" />
            <Text fontSize="xl" fontWeight="bold" color="brand.blue">
              {event.name}
            </Text>
            <Text fontSize="md" color="brand.grayText">
              {event.date}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Events;
