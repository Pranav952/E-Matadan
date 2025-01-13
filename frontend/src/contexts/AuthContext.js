import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState(localStorage.getItem("role") || "user");

  const handleLogout = async () => {
    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch("http://localhost:8080/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("role");
        setRole("user"); // Reset role on logout
        navigate("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleLogin = (role) => {
    localStorage.setItem("role", role); // Store the role in localStorage
    setRole(role);
  };

  return (
    <AuthContext.Provider value={{ role, handleLogout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
