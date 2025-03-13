
import './App.css';
import HealthCare from './pages/HealthCareAdmin';
import ParentDashboard from './pages/Parentlanding/ParentDashboard';
import LandingPage from './pages/UniversalLanding';

function App() {
  return (
    <div className="App">
      
      <div>
        <ParentDashboard/>
        {/* <LandingPage/> */}
      </div>
    </div>
  );
}

export default App;
