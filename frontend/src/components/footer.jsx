import React from "react";
import { FaCcAmex, FaCcDiscover, FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";

function Footer() {
  return (
    <div className="py-6 ">
      <div className="flex items-center justify-between main-container">
        <p className="text-xl secondary-font font-[500]">
          © {[new Date().getFullYear()]} Calibr
        </p>
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
