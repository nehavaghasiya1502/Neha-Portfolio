import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Herosection from './pages/Herosection';
import About from './pages/About'
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
     <>
     <Header />
     <Herosection />
     <About />
     <Skills />
     <Project />
     <Contact />
     <Footer />
     </>
    </div>
  );
}

export default App;
