import React, { useState } from "react";
import { logo } from "../assets/images";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { RiMenu4Fill } from "react-icons/ri";
import { AnimatePresence } from "framer-motion";
import NavbarDrawer from "./navbarDrawer";

function Navbar() {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <div className="main-container py-4 flex justify-between items-center">
        <div className=" block lg:hidden">
          <RiMenu4Fill
            className="text-[42px] text-secondary"
            onClick={() => setShowDrawer(true)}
          />
        </div>
        <div className="justify-start gap-8 hidden lg:flex">
          <a className="text-[18px] font-[500] text-white  hover:text-secondary transition-all cursor-pointer">
            Home
          </a>
          <a className="text-[18px] font-[500] text-white  hover:text-secondary transition-all cursor-pointer">
            Shop
          </a>
          <a className="text-[18px] font-[500] text-white  hover:text-secondary transition-all cursor-pointer">
            Contact
          </a>
        </div>
        <img className="w-[150px] cursor-pointer" src={logo} />
        <div className=" justify-end gap-8 hidden lg:flex">
          <FaRegUser className="text-[24px] text-white cursor-pointer  hover:text-secondary transition-all " />
          <FaRegHeart className="text-[24px] text-white cursor-pointer  hover:text-secondary transition-all" />
          <BsHandbag className="text-[24px] text-white cursor-pointer  hover:text-secondary transition-all" />
        </div>
      </div>
      <AnimatePresence>
        {showDrawer && (
          <NavbarDrawer setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
