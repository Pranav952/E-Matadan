import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Info:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 space-y-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-center  text-purple-700">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600">
          Access your account to explore amazing features
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
            className="w-full px-4 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center mt-4 space-x-2">
          <span className="w-20 h-px bg-gray-300"></span>
          <span className="text-sm text-gray-500">OR</span>
          <span className="w-20 h-px bg-gray-300"></span>
        </div>
        <button className="flex items-center justify-center w-full px-4 py-3 mt-4 text-sm font-semibold text-gray-700 bg-gray-100 border rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
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
            className="text-purple-500 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;
