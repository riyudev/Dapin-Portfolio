import React from "react";
import Dapin from "../assets/dapin.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork, FaSquareXTwitter } from "react-icons/fa6";

function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center pt-20"
    >
      <div className="flex items-center justify-center space-x-10">
        <div className="space-y-8">
          <h2 className="font-bold tracking-wider">Hi, I'm Prescilla</h2>
          <div>
            <p>- Professional Web Designer</p>
            <p>- Based in the Philippines</p>
            <p>- Creates The Best UI/UX</p>
          </div>

          <div className="flex items-center space-x-2 text-3xl text-cyan-400">
            <FaFacebookSquare className="transition-colors duration-150 hover:text-cyan-500/50" />
            <FaLinkedin className="transition-colors duration-150 hover:text-cyan-500/50" />
            <FaSquareUpwork className="transition-colors duration-150 hover:text-cyan-500/50" />
            <FaSquareXTwitter className="transition-colors duration-150 hover:text-cyan-500/50" />
          </div>

          <div className="flex items-center space-x-3.5">
            <button className="border-2 border-cyan-400 px-5 py-3 inset-shadow-sm inset-shadow-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 active:scale-[80%]">
              View Resume
            </button>
            <a href="#contact">
              <button className="border-2 border-cyan-400 px-5 py-3 inset-shadow-sm inset-shadow-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 active:scale-[80%]">
                Contact Now
              </button>
            </a>
          </div>
        </div>

        <div>
          <img src={Dapin} alt="" className="w-80" />
        </div>
      </div>
    </section>
  );
}

export default Home;
