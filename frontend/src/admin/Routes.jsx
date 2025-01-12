import React  from "react";
import {Route, Routes} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import { Navigate } from "react-router-dom";
import Users from "./views/Users";
import Votes  from "./views/Votes";
import Results  from "./views/Results";
import Settings from "./views/Settings";
import Info from "./views/Info";
import Candidate from "./views/Candidates";
import ProtectedRoute from "../utils/ProtectedRoute";

function AdminRoutes(){
    return (
        <Routes>
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
      {/* <Route
        path="voting-apply"
        element={
          <ProtectedRoute requiredRole="user">
            <ApplyForVoting />
          </ProtectedRoute>
        }
      /> */}
      {/* <Route
        path="vote"
        element={
          <ProtectedRoute requiredRole="user">
            <Vote />
          </ProtectedRoute>
        }
      /> */}
      {/* <Route
        path="results"
        element={
          <ProtectedRoute requiredRole="user">
            <Result />
          </ProtectedRoute>
        }
      /> */}
      {/* <Route
        path="feedback"
        element={
          <ProtectedRoute requiredRole="user">
            <FeedBack />
          </ProtectedRoute>
        }
      /> */}
      {/* <Route
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
      /> */}
        </Routes>
    );
}
export default AdminRoutes;