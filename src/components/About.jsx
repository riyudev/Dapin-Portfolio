import React from "react";
import Dapin from "../assets/dapin.png";
import StackIcon from "tech-stack-icons";
import Ascb from "../assets/ASCB.jpg";
import Huawei from "../assets/huawei.jpg";

function About() {
  return (
    <section id="about" className="space-y-14 pt-24">
      <header className="space-y-2">
        <h3>About Me</h3>
        <hr className="w-40" />
      </header>

      <div className="flex items-center space-x-5">
        <div className="flex flex-col items-center space-y-4 rounded-lg bg-gray-800 p-7 shadow-md shadow-cyan-400">
          <div>
            <img src={Dapin} alt="" className="w-80" />
          </div>

          <h4 className="text-2xl font-bold tracking-wider">
            My Web Technologies
          </h4>

          <div className="flex items-center space-x-2">
            {["html5", "css3", "js", "figma", "wordpress", "canva", "ps"].map(
              (tech) => (
                <StackIcon
                  key={tech}
                  name={tech}
                  className="size-10 transition-transform duration-300 hover:scale-110"
                />
              ),
            )}
          </div>
        </div>

        <div className="space-y-5">
          <blockquote className="space-y-8 rounded-lg bg-gray-800 p-7 shadow-md shadow-cyan-400">
            <p>
              Hi, I'm Prescilla Dapin. I started web development as a hobby,
              curious about how websites were built and how they worked behind
              the scenes. Over time, my fascination turned into a passion for
              creating beautiful, user-friendly interfaces. Web designing allows
              me to blend creativity with logic, crafting experiences that are
              both functional and visually engaging.
            </p>

            <button className="px-5 py-2 transition-all duration-150 hover:bg-cyan-400/80 hover:text-slate-950 active:scale-90">
              My Services →
            </button>
          </blockquote>

          <div className="space-y-7 rounded-lg bg-gray-800 p-7 shadow-md shadow-cyan-400">
            <div className="flex items-center space-x-5">
              <img src={Ascb} alt="" className="size-20" />
              <img src={Huawei} alt="" className="size-20" />
            </div>

            <blockquote>
              <p>
                <span className="font-quicksandBold">School:</span> Andres
                Soriano Colleges of Bislig (with Huawei ICT Academy)
              </p>

              <p>
                <span className="font-quicksandBold">Course:</span> Bachelors of
                Science in Information Technology
              </p>

              <p>
                <span className="font-quicksandBold">Date Graduated:</span>{" "}
                December 15 2026
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
