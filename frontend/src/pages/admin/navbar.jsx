import React from "react";
import { BsHandbag } from "react-icons/bs";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="bg-secondary">
      <div className="flex items-center justify-between px-4 py-4 lg:px-8 ">
        <div className="block lg:hidden">
          <RiMenu4Fill className="text-[42px] text-white" />
        </div>
        <div className="justify-start hidden gap-8 lg:flex">
          <a
            className={`text-[18px] font-[500] text-white transition-all cursor-pointer`}
            onClick={() => navigate("/")}
          >
            Home
          </a>
          <a
            className={`text-[18px] font-[500] text-white transition-all cursor-pointer`}
            onClick={() => navigate("/shop")}
          >
            Shop
          </a>
        </div>

        <div className="flex items-center justify-end gap-4 lg:gap-8">
          <a
            className={`text-[14px] sm:text-[18px] font-[500] text-white transition-all cursor-pointer`}
          >
            admin@gmail.com
          </a>
          <button className="bg-white text-secondary px-4 sm:px-8 py-2 text-[14px] sm:text-[16px] font-[600] tracking-wider hover:bg-secondary hover:text-white border border-secondary hover:border-white duration-500">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
