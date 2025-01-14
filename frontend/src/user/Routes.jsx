import React from "react";
import { Route,Routes,useNavigate } from "react-router-dom";
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
import { AuthProvider, useAuth } from '../contexts/AuthContext';
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
    <Route path="logout" element={
      <ProtectedRoute requiredRole="user">
      <LogoutConfirmation />
      </ProtectedRoute>
      } />  
    <Route path='login' element={<Login/>}/>
        </Routes>
    )

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
}
export default UserRoutes;