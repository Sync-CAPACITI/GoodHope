
import './App.css';
import Calendar from './components/Calendar';
import Footer from './components/common/footer/footer';
import Header from './components/common/header/Header';
import Hero from './components/common/hero/Hero';

function App() {
  return (
    <div className="App">
      
      <div>
        <Header/>
        <Hero/>
        <Calendar />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
