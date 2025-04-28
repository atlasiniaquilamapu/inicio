// File: src/pages/HomePage.js
import React from 'react';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Features from '../components/Home/Features';
import Team from '../components/Home/Team';
import Contact from '../components/Home/Contact';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Features />
      <Team />
      <Contact />
    </div>
  );
};

export default HomePage;