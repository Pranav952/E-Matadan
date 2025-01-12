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

function UserRoutes()
{
    return(
        <Routes>
            <Route path="user" element={<Dashboard/>}/>
            <Route path='user/voting-apply' element={<ApplyForVoting/>}/>
            <Route path='user/vote' element={<Vote/>}/>
            <Route path='user/results' element={<Result/>}/>
            <Route path='user/feedback' element={<FeedBack/>}/>
            <Route path='user/support' element={<Support/>}/>
            <Route path='user/settings' element={<Setting/>}/>
            <Route path='user/notifications' element={<Notification/>}/>
            <Route path='user-login' element={<Login/>}/>
            <Route path='user-register' element={<Register/>}/>
        </Routes>
    )
}
export default UserRoutes;