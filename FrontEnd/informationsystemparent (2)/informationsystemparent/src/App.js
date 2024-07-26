import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import AuthProvider from "./AuthContext"; // Ensure the path is correct
import ParentLogin from "./ParentLogin"; // Ensure the path is correct
import ParentDashboard from "./ParentDashboard"; // Ensure the path is correct
import Events from "./Events"; // Ensure the path is correct
import Payment from "./Payment"; // Ensure the path is correct
import ProtectedRoute from "./ProtectedRoute"; // Ensure the path is correct
import ParentLayout from "./ParentLayout"; // Ensure the path is correct
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailure from "./PaymentFailure";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<ParentLogin />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-failure" component={<PaymentFailure />} />
            <Route path="/" element={<ParentLayout />}>
              <Route path="/parent-dashboard" element={<ParentDashboard />} />
            </Route>
            <Route element={<ProtectedRoute roleRequired={2} />}>
              <Route path="/" element={<ParentLayout />}>
                <Route path="/parent-dashboard" element={<ParentDashboard />} />
                <Route path="/events" element={<Events />} />
                <Route path="/payment" element={<Payment />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
};

export default App;
