import React, { useState } from "react";
import { tableGun } from "../assets/images";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegHeart } from "react-icons/fa6";

function ShopCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full gap-2 sm:gap-4">
        <div
          className="bg-[#D1CABC] flex justify-center items-center relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: hovered ? 1 : 0 }}
              exit={{ scale: hovered ? 0 : 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-secondary bg-opacity-60"
            >
              <FaRegHeart className="text-[42px] text-white cursor-pointer" />
            </motion.div>
          </AnimatePresence>
          <img className="" src={tableGun} />
        </div>
        <h2 className="secondary-font text-black font-[600] text-lg sm:text-[24px] text-center">
          SR-15 E3 CQB Mod 2 11.5" Rifle
        </h2>
        <p className="font-[500] text-md sm:text-xl text-center">$ 2,599.00</p>
        <button className="bg-secondary text-white px-4 sm:px-8 py-2 sm:py-4 text-[12px] sm:text-[18px] uppercase font-[600] duration-500">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ShopCard;
