import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Named import for jwtDecode

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem("authToken"); // Use the correct localStorage key

  if (!token) {
    console.warn("No token found. Redirecting to login.");
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(token); // Use the correct function from jwt-decode

    console.log("Decoded Token:", decodedToken);

    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedToken.exp < currentTime) {
      console.warn("Token expired. Redirecting to login.");
      return <Navigate to="/login" />;
    }

    // Check if the role exists in the token
    if (!decodedToken.role) {
      console.error("Role is missing in the token. Decoded token:", decodedToken);
      return <Navigate to="/login" />;
    }

    // Check for the required role
    if (decodedToken.role !== requiredRole) {
      console.warn(`Access denied for role: ${decodedToken.role}`);
      return <Navigate to="/login" />;
    }

    return children;
  } catch (error) {
    console.error("Invalid token. Redirecting to login.", error);
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
