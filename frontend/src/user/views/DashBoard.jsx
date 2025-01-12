import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

function UserDashboard() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-10 min-h-screen">
        <h2 className="text-4xl font-bold text-center mb-8">User Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            onClick={() => navigate("/user/feedback")}
            className="h-48 bg-purple-500 text-white rounded-lg shadow-lg p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-purple-600 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-2 text-center">Feedback</h3>
            <p className="text-center">Provide feedback to help us improve our services.</p>
          </div>

          <div
            onClick={() => navigate("/user/register")}
            className="h-48 bg-indigo-500 text-white rounded-lg shadow-lg p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-indigo-600 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-2 text-center">Register</h3>
            <p className="text-center">Register for events, updates, or new features.</p>
          </div>

          <div
            onClick={() => navigate("/user/settings")}
            className="h-48 bg-teal-500 text-white rounded-lg shadow-lg p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-teal-600 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-2 text-center">Settings</h3>
            <p className="text-center">Update your profile and manage preferences.</p>
          </div>

          <div
            onClick={() => navigate("/user/support")}
            className="h-48 bg-orange-500 text-white rounded-lg shadow-lg p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-orange-600 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-2 text-center">Support</h3>
            <p className="text-center">Contact support for assistance and queries.</p>
          </div>

          <div
      //       onClick={() => navigate("/user/vote")}
      //       className="h-48 bg-blue-500 text-white rounded-lg shadow-lg p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-600 flex flex-col justify-center"
      //     >
      //       <h3 className="text-2xl font-semibold mb-2 text-center">Vote</h3>
      //       <p className="text-center">Cast your vote in ongoing elections securely and easily.</p>
      //     </div>
      //   </div>
      // </div>
    </Layout>
  );
}

export default UserDashboard;
