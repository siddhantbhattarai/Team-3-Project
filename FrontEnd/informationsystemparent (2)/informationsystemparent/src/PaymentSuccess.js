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
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

const PaymentSuccess = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  const { transactionId, amount, orderName } = queryString.parse(
    location.search
  );

  const goToDashboard = () => {
    navigate("/parent-dashboard");
  };

  React.useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <Modal isOpen={isOpen} onClose={goToDashboard} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Payment Success</ModalHeader>
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Text>Thank you for your payment.</Text>
            <Text>
              Your payment of Rs. {amount / 100} for {orderName} was successful.
            </Text>
            <Text>Transaction ID: {transactionId}.</Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={goToDashboard}>
            Go to Home
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaymentSuccess;
