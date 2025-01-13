import React from "react";
import { Route,Routes } from "react-router-dom";
import Dashboard from "./views/DashBoard";
import ApplyForVoting from "./views/RegisterAsVoter";
import Vote from "./views/Votes";
import FeedBack from "./views/FeedBacks";
import Support from "./views/Supports";
import Setting from "./views/Settings";
import Notification from "./views/Notifications";
import Result from "./views/Results";
import Login from "./views/Login";
import Register from "./views/Register";
import ProtectedRoute from "../utils/ProtectedRoute";
import { Navigate } from "react-router-dom";
import RegisterAsCandidate from "./views/RegisterAsCandidate";
function UserRoutes()
{
    return(
        <Routes>
      {/* Default route for /user */}
      <Route
        path="/"
        element={
          <ProtectedRoute requiredRole="user">
            <Navigate to="dashboard" replace />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute requiredRole="user">
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="voter-register"
        element={
          <ProtectedRoute requiredRole="user">
            <ApplyForVoting />
          </ProtectedRoute>
        }
      />
      <Route
        path="candidate-register"
        element={
          <ProtectedRoute requiredRole="user">
            <RegisterAsCandidate/>
          </ProtectedRoute>
        }
      />
      <Route
        path="vote"
        element={
          <ProtectedRoute requiredRole="user">
            <Vote />
          </ProtectedRoute>
        }
      />
      <Route
        path="results"
        element={
          <ProtectedRoute requiredRole="user">
            <Result />
          </ProtectedRoute>
        }
      />
      <Route
        path="feedback"
        element={
          <ProtectedRoute requiredRole="user">
            <FeedBack />
          </ProtectedRoute>
        }
      />
      <Route
        path="support"
        element={
          <ProtectedRoute requiredRole="user">
            <Support />
          </ProtectedRoute>
        }
      />
      <Route
        path="settings"
        element={
          <ProtectedRoute requiredRole="user">
            <Setting />
          </ProtectedRoute>
        }
      />
      <Route
        path="notifications"
        element={
          <ProtectedRoute requiredRole="user">
            <Notification />
          </ProtectedRoute>
        }
      />

    <Route path='login' element={<Login/>}/>
        </Routes>
    )
}
export default UserRoutes;