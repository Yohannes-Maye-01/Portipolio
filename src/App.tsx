import { useState } from "react";
import "./App.css";
import HeroSection from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <HeroSection />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
