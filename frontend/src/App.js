import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParentDashboard from "./pages/Parentlanding/ParentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ParentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
