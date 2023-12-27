import React from "react";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import { logo } from "../assets/images";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";

function NavbarDrawer({ setShowDrawer }) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="w-full fixed inset-0 bg-black h-screen overflow-y-auto bg-drawerBG bg-cover bg-no-repeat bg-center z-20"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
        <img className="absolute top-5 left-4 w-[120px]" src={logo} />
        <IoCloseCircleOutline
          className="absolute top-4 right-4 text-[42px] text-secondary z-[2]"
          onClick={() => setShowDrawer(false)}
        />

        <div className="absolute top-0 left-0 w-full h-full gap-4 flex flex-col justify-center items-center z-[1]">
          <a className="text-[32px] font-[600] text-white secondary-font cursor-pointer">
            Home
          </a>
          <a className="text-[32px] font-[600] text-white secondary-font cursor-pointer">
            Shop
          </a>
          <a className="text-[32px] font-[600] text-white secondary-font cursor-pointer">
            Contact
          </a>
          <div className="flex gap-8 mt-2">
            <FaRegUser className="text-[32px] text-white cursor-pointer" />
            <FaRegHeart className="text-[32px] text-white cursor-pointer" />
            <BsHandbag className="text-[32px] text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default NavbarDrawer;
