import './App.css';
import NavBar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './components/Project';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  return (
    <div className={`${mode}`}>
      <BrowserRouter>
        <NavBar setMode={setMode} mode={mode} />
        <Routes>
          <Route path='/' element={
            <>
              <Banner />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
          />
          <Route path='/:project' element={<Project />} />
        </Routes >
      </BrowserRouter >
    </div>
  );
}

export default App;
