import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

function Dashboard() {
  const navigate = useNavigate(); 

  return (
    <Layout>
      <div className="bg-gray-100 p-10 min-h-screen">
        <h2 className="text-4xl font-bold text-center mb-8">
        </h2>
        <div className="flex flex-col items-center space-y-6">
          <div
            onClick={() => navigate("/admin/users")}
            className="w-full md:w-2/3 lg:w-1/2 bg-blue-500 text-white rounded-lg shadow-lg p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-600"
          >
            <h3 className="text-2xl font-semibold mb-4">User Section</h3>
            <p>Manage users, assign roles, and control user accounts.</p>
          </div>

          <div
            onClick={() => navigate("/admin/candidates")}
            className="w-full md:w-2/3 lg:w-1/2 bg-green-500 text-white rounded-lg shadow-lg p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-green-600"
          >
            <h3 className="text-2xl font-semibold mb-4">Candidate Section</h3>
            <p>Add, edit, or delete candidates and view their profiles.</p>
          </div>
          <div
            onClick={() => navigate("/admin/votes")}
            className="w-full md:w-2/3 lg:w-1/2 bg-yellow-500 text-white rounded-lg shadow-lg p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-yellow-600"
          >
            <h3 className="text-2xl font-semibold mb-4">Votes Section</h3>
            <p>Monitor voting sessions and track live voting results.</p>
          </div>
          <div
            onClick={() => navigate("/admin/results")}
            className="w-full md:w-2/3 lg:w-1/2 bg-red-500 text-white rounded-lg shadow-lg p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-red-600"
          >
            <h3 className="text-2xl font-semibold mb-4">Result Section</h3>
            <p>View real-time results and export reports.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
