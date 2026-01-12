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

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact", className: "contact-link" },
  ];

  const socialLinks = {
    github: "https://github.com/nehavaghasiya1502",
    linkedin: "https://www.linkedin.com/in/neha-vaghasiya-106b743a1",
    email: "nehavaghasiya573@gmail.com",
  };

  return (
    <div className="App">
      <>
        <Header
          brandName="Neha's Portfolio"
          navLinks={navLinks}
          socialLinks={socialLinks}
        />

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
