import React from "react";
import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Contact() {
  return (
    <section id="contact" className="mb-16 space-y-10 pt-24">
      <header className="space-y-5">
        <h3 className="text-center font-bold tracking-wider">Get in Touch</h3>
        <p className="text-center">
          Let’s turn your ideas into reality! Reach out—whether for
          collaboration, feedback, or just a friendly chat!
        </p>
      </header>
      <hr />
      <div className="laptop:grid-cols-3 laptop:px-20 laptop:gap-x-10 grid grid-cols-1 gap-y-4 px-8">
        <div className="place-items-center space-y-5 rounded-lg bg-gray-800 p-20 shadow-md shadow-cyan-400 transition-all duration-150 hover:scale-90">
          <MdEmail className="text-6xl text-cyan-400" />
          <p>prescilladapin@gmail.com</p>
        </div>
        <div className="place-items-center space-y-5 rounded-lg bg-gray-800 p-20 shadow-md shadow-cyan-400 transition-all duration-150 hover:scale-90">
          <FaMobileAlt className="text-6xl text-cyan-400" />
          <p>+639876543210</p>
        </div>
        <div className="place-items-center space-y-5 rounded-lg bg-gray-800 p-20 shadow-md shadow-cyan-400 transition-all duration-150 hover:scale-90">
          <IoLogoWhatsapp className="text-6xl text-cyan-400" />
          <p>+639123456789</p>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Contact;
