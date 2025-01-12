import React  from "react";
import {Route, Routes} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Users from "./views/Users";
import Votes  from "./views/Votes";
import Results  from "./views/Results";
import Settings from "./views/Settings";
import Info from "./views/Info";
import Candidate from "./views/Candidates";

function AdminRoutes(){
    return (
        <Routes>
            <Route path='admin' element={<Dashboard/>}/>
            <Route path="admin/users" element={<Users/>}/>
            <Route path="admin/candidates" element={<Candidate/>}/>
            <Route path='admin/votes' element={<Votes/>}/>
            <Route path='admin/results' element={<Results/>}/>
            <Route path='admin/settings' element={<Settings/>}/>
            <Route path='' element={<Info/>}/>
        </Routes>
    );
}
export default AdminRoutes;