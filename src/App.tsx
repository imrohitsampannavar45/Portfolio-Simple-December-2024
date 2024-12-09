import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/animations.css';

function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Resume />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;