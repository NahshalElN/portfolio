import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Projects />
      <About />
      <Timeline />
      <Contact />
    </>
  );
}

export default App;
