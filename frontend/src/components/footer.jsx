import React from "react";
import { FaCcAmex, FaCcDiscover, FaCcVisa, FaGithub } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { logo } from "../assets/images";
import { FaHeart } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="py-4 bg-[##F7F5F8] border-t border-slate-300">
      <div className="flex flex-col items-center justify-between gap-4 sm:gap-0 sm:flex-row main-container">
        <img className="w-[80px]" src={logo} />
        <div className="flex flex-col items-center">
          <p className="text-xl secondary-font font-[400] flex items-center gap-2">
            Made with{" "}
            <FaHeart className="text-red-500 transition-all duration-500 hover:scale-110 hover:text-secondary" />{" "}
            by Abd.
          </p>
          <div className="flex items-center gap-4 mt-2 jusify-center">
            <FaLinkedin
              className="text-[24px] hover:scale-110 cursor-pointer transition-all duration-500 hover:text-secondary"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sardar-abdul/",
                  "_blank"
                )
              }
            />
            <FaGithub
              className="text-[24px] hover:scale-110 cursor-pointer transition-all duration-500 hover:text-secondary"
              onClick={() =>
                window.open("https://github.com/Dev-SardarAbdul", "_blank")
              }
            />
            <MdEmail
              className="text-[24px] hover:scale-110 cursor-pointer transition-all duration-500 hover:text-secondary"
              onClick={() =>
                window.open("mailto:dev.sardarabdul@gmail.com", "_blank")
              }
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <FaCcVisa className="text-[24px] hover:text-secondary" />
          <FaCcMastercard className="text-[24px] hover:text-secondary" />
          <FaCcAmex className="text-[24px] hover:text-secondary" />
          <FaCcDiscover className="text-[24px] hover:text-secondary" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
