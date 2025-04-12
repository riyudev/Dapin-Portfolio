import React from "react";

function Navbar() {
  return (
    <nav className="flex w-full justify-center border-b-2 border-cyan-600">
      <div className="flex w-7xl items-center justify-between py-5">
        <h4 className="tracking-wider text-cyan-600">Prescilla</h4>
        <ul className="flex space-x-4 text-lg font-medium text-gray-300">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
