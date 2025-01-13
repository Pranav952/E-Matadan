import React from 'react';
import './index.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminRoutes from './admin/Routes';
import UserRoutes from './user/Routes';
import Register from './user/views/Register';
import Login from '../../frontend/src/Login';
import Info from './admin/views/Info';
import Dashboard from './admin/views/Dashboard';//importing the dashboard component


function App() {
  return(
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Dashboard/>} />//Logi page

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* User and Admin Routes */}
        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

