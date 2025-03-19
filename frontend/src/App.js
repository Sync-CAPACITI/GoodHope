
import './App.css'; 
import HealthCare from './pages/HealthCareAdmin';
import Login from './pages/Login';
import Register from './pages/Register';
// import ParentDashboard from './pages/ParentDashboard';
import SchoolDashboard from './pages/SchoolDashboard'; 
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import ParentDashboard from './pages/Parentlanding/ParentDashboard';
import LandingPage from './pages/UniversalLanding';
function App() {
  return (
    <div className="App">

<BrowserRouter>
    {/* <Routes> */}
    {/* <Route path="/" element={<Home />} />  Assuming you have a Home component */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/parentDashboard" element={<ParentDashboard />} /> */}
          {/* <Route path="/schoolDashboard" element={<SchoolDashboard />} />
          <Route path="/healthCareDashboard" element={<HealthCare />} /> */}
          {/* <ParentDashboard/> */}
          {/* <HealthCare/> */}
          <LandingPage/>
    {/* </Routes> */}
  </BrowserRouter>
      
      
    </div>
  );
}

export default App;
