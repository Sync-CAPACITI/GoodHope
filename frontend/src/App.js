import './App.css';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
// Uncomment this line if you want to use the Calendar component
// import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <div>
        <Dashboard />
        {/* If you want to use Calendar, uncomment the line above and the one below */}
        {/* <Calendar /> */}
      </div>
    </div>
  );
}

export default App;
