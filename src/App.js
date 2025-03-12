import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  // Manage active section state
  const [activeSection, setActiveSection] = useState('student-info');

  return (
    <div className="App">
      <Dashboard activeSection={activeSection} />
    </div>
  );
}

export default App;
