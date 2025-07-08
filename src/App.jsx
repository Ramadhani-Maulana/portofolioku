import './App.css';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Qualification from '../components/qualification/Qualification';
import Work from '../components/work/Work';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import ScrollUp from '../components/scrollup/ScrollUp';
import CustomCursor from './components/cursor/CustomCursor';
import "@iconscout/unicons/css/line.css";


function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="main">
        <Home />
        <Work />
        <Skills />
        <Experience />
        <Qualification />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
