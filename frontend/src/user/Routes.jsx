import React from "react";
import { Route, Routes } from "react-router-dom";
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
import { Navigate } from "react-router-dom";

function UserRoutes() {
  return (
    <Routes>
      {/* Default route for /user */}
      <Route path="/" element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="voting-apply" element={<ApplyForVoting />} />
      <Route path="vote" element={<Vote />} />
      <Route path="results" element={<Result />} />
      <Route path="feedback" element={<FeedBack />} />
      <Route path="support" element={<Support />} />
      <Route path="settings" element={<Setting />} />
      <Route path="notifications" element={<Notification />} />
      
      {/* Uncomment the login route if necessary */}
      <Route path='/login' element={<Login/>}/>
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default UserRoutes;
