import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminRoutes from './admin/Routes';


function App() {
  return(
    <Router>
      <AdminRoutes/>
    </Router>
  );
}

export default App;
