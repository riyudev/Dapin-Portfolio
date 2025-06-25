import React, { useState, useRef, useEffect } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function Navbar({ activeSection, setActiveLink }) {
  const navLinks = [
    { path: "/", label: "Prescilla" },
    { path: "#home", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#services", label: "Services" },
    { path: "#contact", label: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="laptop:flex fixed hidden w-full justify-center border-b-2 border-cyan-600 bg-slate-950/80 backdrop-blur-md">
        <div className="flex w-full max-w-7xl items-center justify-between px-4 py-5">
          <a href={navLinks[0].path}>
            <h3 className="tracking-wider text-cyan-600">
              {navLinks[0].label}
            </h3>
          </a>

          <ul className="flex space-x-5 text-lg font-medium text-gray-300">
            {navLinks.slice(1).map(({ path, label }) => {
              const section = path.slice(1);
              return (
                <li key={path}>
                  <a
                    href={path}
                    onClick={() => setActiveLink(path)}
                    className={
                      activeSection === section
                        ? "text-cyan-500"
                        : "hover:text-cyan-500"
                    }
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        ref={menuRef}
        className="laptop:hidden fixed top-0 right-0 left-0 z-50 w-full flex-col border-b border-cyan-400 bg-slate-950/80 p-4 backdrop-blur-md"
      >
        <div className="flex items-center justify-between">
          <a href={navLinks[0].path}>
            <h3 className="tracking-wider text-cyan-600">
              {navLinks[0].label}
            </h3>
          </a>
          <div className="flex items-center">
            <div className="transition-transform duration-300 ease-in-out">
              {isOpen ? (
                <TiArrowSortedUp
                  onClick={toggleMenu}
                  className="size-10 rotate-0 transform text-cyan-400 transition-transform duration-300"
                />
              ) : (
                <TiArrowSortedDown
                  onClick={toggleMenu}
                  className="size-10 rotate-0 transform text-cyan-400 transition-transform duration-300"
                />
              )}
            </div>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="laptop:hidden w-full pt-2">
            <ul className="flex flex-col items-center justify-center space-y-2.5 px-4 pt-2">
              {navLinks.slice(1).map(({ path, label }) => {
                const section = path.slice(1);
                return (
                  <li key={path}>
                    <a
                      href={path}
                      onClick={toggleMenu}
                      className={
                        activeSection === section
                          ? "text-cyan-500"
                          : "hover:text-cyan-500"
                      }
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
