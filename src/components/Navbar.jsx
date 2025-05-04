import React, { useEffect, useState } from "react";

function Navbar({ activeSection }) {
  return (
    <nav className="fixed flex w-full justify-center border-b-2 border-cyan-600 bg-slate-950/80 backdrop-blur-md">
      <div className="flex w-full max-w-7xl items-center justify-between px-4 py-5">
        <a href="/">
          <h3 className="tracking-wider text-cyan-600">Prescilla</h3>
        </a>

        <ul className="flex space-x-5 text-lg font-medium text-gray-300">
          <li>
            <a
              href="#home"
              onClick={() => setActiveLink("#home")}
              className={
                activeSection === "home"
                  ? "text-cyan-500"
                  : "hover:text-cyan-500"
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActiveLink("#about")}
              className={
                activeSection === "about"
                  ? "text-cyan-500"
                  : "hover:text-cyan-500"
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setActiveLink("#services")}
              className={
                activeSection === "services"
                  ? "text-cyan-500"
                  : "hover:text-cyan-500"
              }
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setActiveLink("#contact")}
              className={
                activeSection === "contact"
                  ? "text-cyan-500"
                  : "hover:text-cyan-500"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
