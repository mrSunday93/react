import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default App;
