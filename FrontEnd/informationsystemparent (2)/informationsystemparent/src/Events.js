import React from "react";
import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";
import chess from "./assets/chess.png";
import hackathon from "./assets/hackathon.png";

// Static event data
const staticEvents = [
  {
    id: 1,
    name: "Chess Competition",
    date: "2024-08-01",
    img: chess,
  },
  {
    id: 2,
    name: "Hackathon",
    date: "2024-09-15",
    img: hackathon,
  },
];

const Events = () => {
  return (
    <Box p={4} bg="brand.grayBg" minHeight="100vh">
      <Text fontSize="3xl" fontWeight="bold" mb={6} color="brand.blue">
        Upcoming Events
      </Text>
      <SimpleGrid columns={[1, null, 2]} spacing={4}>
        {staticEvents.map((event) => (
          <Box
            key={event.id}
            p={4}
            bg="brand.white"
            boxShadow="md"
            borderRadius="lg"
            height="400px"
            width="400px"
          >
            <Image
              src={event.img}
              alt={event.name}
              boxSize="100%"
              objectFit="cover"
              mb={4}
            />
            <Text fontSize="lg" fontWeight="bold" color="brand.blue">
              {event.name}
            </Text>
            <Text color="brand.grayText">
              {new Date(event.date).toLocaleDateString()}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Events;
