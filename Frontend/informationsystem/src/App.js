// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Dashboard from "./Components/Dashboard";
import Account from "./Components/Account";
import Assignment from "./Components/Assignment";
import Attendance from "./Components/Attendance";
import Events from "./Components/Events";
import Layout from "./Components/Layout";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
