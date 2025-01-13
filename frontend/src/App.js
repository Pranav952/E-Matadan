

import React from 'react';
import './index.css';
import { Routes, Route, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import AdminRoutes from './admin/Routes';
import UserRoutes from './user/Routes';
import Register from './user/views/Register';
import Login from './user/views/Login';
import Dashboard from './admin/views/Dashboard';
import { Navigate } from 'react-router-dom'; 
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Dashboard />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />
          
          {/* User and Admin Routes */}
          <Route path="/user/*" element={<UserRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/register" element={<Register />} />

          {/* Logout route with confirmation */}
          <Route path="/logout" element={<LogoutConfirmation />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

function LogoutConfirmation() {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = React.useState(false);

  // Show logout confirmation
  const confirm = () => {
    handleLogout();
    navigate('/login'); // Navigate to login page after logout
  };

  // Cancel logout and stay on the current page
  const cancel = () => {
    setConfirmLogout(false);
  };

  return (
    <div className="flex justify-center items-center p-5">
      {!confirmLogout ? (
        <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
          <h2 className="text-xl mb-4">Are you sure you want to log out?</h2>
          <div className="flex justify-between">
            <button
              onClick={confirm}
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all"
            >
              Yes, Log out
            </button>
            <button
              onClick={cancel}s
              className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        // If logout is confirmed, show message and redirect to login
        <div className="text-center">
          Logging out...
          <Navigate to="/login" />
        </div>
      )}
    </div>
  );
}

export default App;
