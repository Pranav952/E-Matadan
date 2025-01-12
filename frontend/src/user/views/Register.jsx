import React, { useState } from "react";
import Layout from "../../admin/Layout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration Info:", { name, email, password });
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 via-white to-blue-100">
        <div className="w-full max-w-lg p-10 space-y-8 bg-white rounded-3xl shadow-2xl">
          <h1 className="text-5xl font-extrabold text-center text-gray-700">
            Create Account
          </h1>
          <p className="text-center text-gray-500">
            Sign up to join our amazing platform
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
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
                placeholder="Create a password"
                required
                className="px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="mb-2 text-sm font-semibold text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Register
            </button>
          </form>
          <div className="relative flex items-center justify-center mt-4">
            <span className="absolute bg-white px-3 text-sm text-gray-500">
              OR
            </span>
            <span className="block w-full h-px bg-gray-300"></span>
          </div>
          <button className="flex items-center justify-center w-full px-4 py-3 mt-4 text-lg font-semibold text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-purple-300">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8a6 6 0 01-12 0m16 0a6 6 0 01-12 0m4 8v5m0 0l-3-3m3 3l3-3"
              />
            </svg>
            Login with Google
          </button>
          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="./user-login"
              className="text-blue-500 font-semibold hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
