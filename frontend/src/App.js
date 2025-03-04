

import React from 'react';
import './index.css';
import { Routes, Route, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import AdminRoutes from './admin/Routes';
import UserRoutes from './user/Routes';
import Register from './user/views/Register';
import Login from './user/views/Login';
import { Navigate } from 'react-router-dom'; 
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Login />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />
          
          {/* User and Admin Routes */}
          <Route path="/user/*" element={<UserRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/register" element={<Register />} />

          {/* Logout route with confirmation */}
          {/* <Route path="/logout" element={<LogoutConfirmation />} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}


export default App;
