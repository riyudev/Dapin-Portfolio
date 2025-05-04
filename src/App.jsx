import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 400;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection || "home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash === "" || window.location.hash === "#home") {
      window.scrollTo({
        top: document.getElementById("home").offsetTop - 80,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-950">
      <Navbar activeSection={activeSection} />
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
