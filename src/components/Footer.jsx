import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork, FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-1.5 border-t border-cyan-400/50 p-5 pb-2">
      <div className="flex items-center space-x-2 text-2xl text-cyan-400">
        <FaFacebookSquare />
        <FaLinkedin />
        <FaSquareUpwork />
        <FaSquareXTwitter />
      </div>
      <div className="place-items-center text-center">
        <p className="text-sm leading-5">Designed by: Prescilla Dapin</p>
        <p className="text-sm leading-5">
          Copyright © 2025 - All rights reserve
        </p>
      </div>
    </div>
  );
}

export default Footer;
