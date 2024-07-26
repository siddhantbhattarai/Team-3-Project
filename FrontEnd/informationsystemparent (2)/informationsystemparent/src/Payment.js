import React, { useState } from "react";
import { Box, Text, Button, Collapse, VStack } from "@chakra-ui/react";
import axios from "axios";

const Payment = () => {
  const [showFeeStructure, setShowFeeStructure] = useState(false);
  const [remainingDues, setRemainingDues] = useState(50000);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async () => {
    const payload = {
      amount: 5500,
      orderId: "1",
      orderName: "1st_sem_fee_payment",
      customerName: "Luminous Suwal",
      customerEmail: "lsuwal@gmail.com",
      customerPhone: "9897861132",
    };

    try {
      const response = await axios.post(
        "https://localhost:7040/api/Account/khalti/initiate-payment",
        payload
      );

      if (response.data && response.data.payment_url) {
        window.location.href = response.data.payment_url;
      } else {
        console.error("No payment URL found in the response");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  const toggleFeeStructure = () => {
    setShowFeeStructure(!showFeeStructure);
  };

  React.useEffect(() => {
    if (paymentSuccess) {
      setRemainingDues(0);
    }
  }, [paymentSuccess]);

  return (
    <Box p={4} bg="brand.grayBg" minHeight="100vh">
      <Text fontSize="3xl" fontWeight="bold" mb={6} color="brand.blue">
        Payment
      </Text>
      <VStack spacing={6} align="stretch">
        {remainingDues > 0 && (
          <Box p={4} bg="brand.white" boxShadow="md" borderRadius="lg">
            <Text fontSize="xl" fontWeight="bold" mb={4} color="brand.grayText">
              Remaining Dues
            </Text>
            <Text mb={4} color="brand.grayText">
              Dear Parents, Your remaining dues is:{" "}
              <Text as="span" fontWeight="bold">
                Rs. {remainingDues}
              </Text>
            </Text>
            <Button colorScheme="purple" onClick={handlePayment}>
              Pay with Khalti
            </Button>
          </Box>
        )}

        <Box p={4} bg="brand.white" boxShadow="md" borderRadius="lg">
          <Text fontSize="xl" fontWeight="bold" mb={4} color="brand.grayText">
            Fee Structure
          </Text>
          <Text mb={4} color="brand.grayText">
            Click the button below to view the fee structure.
          </Text>
          <Button colorScheme="blue" onClick={toggleFeeStructure} mb={4}>
            {showFeeStructure ? "Hide Fee Structure" : "Show Fee Structure"}
          </Button>
          <Collapse in={showFeeStructure} animateOpacity>
            <Box mt={4} bg="brand.grayBg" p={4} borderRadius="md">
              <Text fontWeight="bold" mb={2} color="brand.grayText">
                Semester Fee Structure:
              </Text>
              {Array.from({ length: 6 }).map((_, index) => (
                <Text key={index} mb={2} color="brand.grayText">
                  Semester {index + 1}:{" "}
                  <Text as="span" fontWeight="bold">
                    Rs. 100,000
                  </Text>
                </Text>
              ))}
              <Text fontWeight="bold" mt={4} mb={2} color="brand.grayText">
                Registration Fee:
              </Text>
              <Text mb={2} color="brand.grayText">
                For 3 years:{" "}
                <Text as="span" fontWeight="bold">
                  Rs. 90,000
                </Text>
              </Text>
              <Text mb={2} color="brand.grayText">
                For 1 year:{" "}
                <Text as="span" fontWeight="bold">
                  Rs. 30,000
                </Text>
              </Text>
            </Box>
          </Collapse>
        </Box>
      </VStack>
    </Box>
  );
};

export default Payment;
