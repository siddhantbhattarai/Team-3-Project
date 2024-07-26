import React from "react";
import {
  Box,
  Text,
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PaymentFailure = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/payment");
  };

  React.useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <Modal isOpen={isOpen} onClose={goToDashboard} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Payment Failed</ModalHeader>
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Text>Your payment was not successful. Please try again.</Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={goToDashboard}>
            Go to Home
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaymentFailure;
