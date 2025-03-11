
import './App.css';
import Calendar from './components/Calendar';
import Footer from './components/common/footer/footer';
import Header from './components/common/header/Header';

function App() {
  return (
    <div className="App">
      
      <div>
        <Header/>
        <Calendar />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
