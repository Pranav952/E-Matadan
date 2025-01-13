import React from "react";
import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    // Navigate to the user registration page for admin login
    navigate("./admin/dashboard");
  };

  const handleUserLogin = () => {
    // Navigate to the user registration page for user login
    navigate("./login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-indigo-100 text-indigo-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to e-matadan</h1>
        <p className="text-xl mb-4">
          <hr />
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handleAdminLogin}
            className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700"
          >
            Login as Admin
          </button>
          <button
            onClick={handleUserLogin} // This now navigates to /user-register
            className="px-6 py-3 bg-green-600 text-white rounded-md text-lg hover:bg-green-700"
          >
            Login as User
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
