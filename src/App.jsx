import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-950">
      <Navbar />
      <div className="w-full max-w-7xl px-4">
        <Home />
        <About />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default App;
