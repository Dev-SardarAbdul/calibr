import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { tableGun } from "../assets/images";
import { FaMinus, FaPlus } from "react-icons/fa6";

function IndividualProductsCard() {
  const [inputValue, setInputValue] = useState(1);

  return (
    <div>
      <div className="relative flex items-start justify-start gap-4 border border-gray-300">
        <div className="size-6 absolute top-0 left-0 z-[1] bg-secondary flex justify-center items-center cursor-pointer">
          <IoClose className="text-white" />
        </div>
        <div className="bg-[#D1CABC] w-[120px] min-h-56 flex justify-center items-center">
          <img className="" src={tableGun} />
        </div>
        <div className="py-4 ">
          <h2 className="secondary-font text-black font-[600] text-[24px]">
            SR-15 E3 CQB Mod 2 11.5" Rifle
          </h2>
          <p className="font-[500] mt-4 text-[18px]">$ 2,599.00</p>
          <div className="flex justify-start mt-4 cursor-pointer">
            <div
              className="flex items-center justify-center border border-r-0 border-gray-300 size-7"
              onClick={() => setInputValue((prevValue) => prevValue - 1)}
            >
              <FaMinus className="text-gray-400" />
            </div>
            <input
              className="flex items-center justify-center px-4 h-[28px] text-gray-400 bg-transparent border border-gray-300 outline-none w-[60px] text-center"
              type="number"
              min={1}
              max={9}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div
              className="flex items-center justify-center border border-l-0 border-gray-300 size-7"
              onClick={() => setInputValue((prevValue) => prevValue + 1)}
            >
              <FaPlus className="text-gray-400" />
            </div>
          </div>
          <p className=" font-[600] mt-4 text-[18px]">Total: $ 2,599.00</p>
        </div>
      </div>
    </div>
  );
}

export default IndividualProductsCard;
