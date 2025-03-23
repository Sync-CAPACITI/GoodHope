import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage  from './pages/UniversalLanding';
import Login from "./pages/Login";
import ParentDashboard from "./pages/Parentlanding/ParentDashboard";
import SchoolDashboard from "./pages/SchoolPages/SchoolDashboard";
import HealthCareAdmin from "./pages/HealthCareAdmin";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ParentDashboard" element={<ParentDashboard />} />
        <Route path="/SchoolDashboard" element={<SchoolDashboard />} />
        <Route path="/HealthCareAdmin" element={<HealthCareAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
