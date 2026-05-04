
import './App.css'

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Organizations from './components/Organizations';
import SchoolProfile from './components/SchoolProfile';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Header/>
      <main>
        <About/>
        <Projects/>
        <Skills/>
        <Organizations/>
        <SchoolProfile/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App
