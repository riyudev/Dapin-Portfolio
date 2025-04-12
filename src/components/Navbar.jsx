import React from "react";

function Navbar() {
  return (
    <nav className="fixed flex w-full justify-center border-b-2 border-cyan-600">
      <div className="flex w-7xl items-center justify-between py-5">
        <h3 className="tracking-wider text-cyan-600">Prescilla</h3>
        <ul className="flex space-x-4 text-lg font-medium text-gray-300">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#services">
            <li>Services</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
