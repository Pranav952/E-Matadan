import React  from "react";
import {Route,Routes} from 'react-router-dom';
import Info from './views/Info'

function AdminRoutes()
{
    return(
        <Routes>
            <Route path="" element={<Info/>}/>
        </Routes>
    )
}
export default AdminRoutes;