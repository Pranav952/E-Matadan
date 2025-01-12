import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../admin/Layout";

const Login = () => {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Use username instead of email
      });

      if (response.ok) {
        const data = await response.json();

        // Debugging log
        console.log("Response from backend:", data);

        // Store authToken and role in localStorage
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("role", data.role);

        // Navigate based on role
        navigate(data.role === "admin" ? "/admin" : "/user");
      } else {
        const data = await response.json();
        setError(data.message || "Login failed");
        console.error("Login failed:", data);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error during login:", error);
    }
  };

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-10 space-y-8 bg-gray-200 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-extrabold text-center text-gray-800">
            Welcome Back
          </h1>
          <p className="text-center text-gray-600">
            Access your account to explore amazing features
          </p>

          {/* Display error message */}
          {error && <p className="p-2 text-center text-red-600 bg-red-100 rounded">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="mb-2 text-sm font-semibold text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className="px-4 py-3 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="mb-2 text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="px-4 py-3 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Login
            </button>
          </form>

          <div className="flex justify-between mt-6 text-sm text-gray-600">
            <a href="/forgot-password" className="hover:text-blue-500">
              Forgot Password?
            </a>
            <a href="/help" className="hover:text-blue-500">
              Need Help?
            </a>
          </div>
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a
              href="./user-register"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
   
  );
};

export default Login;
