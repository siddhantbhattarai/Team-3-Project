import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [studentId, setStudentId] = useState(null); // Add studentId state
  const navigate = useNavigate();

  // Mock function to set studentId on login
  const login = (role, studentId) => {
    setIsAuthenticated(true);
    setRole(role);
    setStudentId(studentId); // Set studentId on login
    if (role === 1) {
      navigate("/dashboard");
    } else if (role === 2) {
      navigate("/parent-dashboard");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);
    setStudentId(null); // Clear studentId on logout
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, role, studentId, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
