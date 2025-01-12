import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminRoutes from './admin/Routes';
import UserRoutes from './user/Routes';

function App() {
  return(
    <Router>
      <AdminRoutes/>
      <UserRoutes/>
    </Router>
  );
}

export default App;

