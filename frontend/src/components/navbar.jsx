import React, { useState } from "react";
import { logo } from "../assets/images";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { RiMenu4Fill } from "react-icons/ri";
import { AnimatePresence } from "framer-motion";
import NavbarDrawer from "./navbarDrawer";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="flex items-center justify-between py-4 main-container">
        <div className="block lg:hidden">
          <RiMenu4Fill
            className="text-[42px] text-secondary"
            onClick={() => setShowDrawer(true)}
          />
        </div>
        <div className="justify-start hidden gap-8 lg:flex">
          <a
            className={`text-[18px] font-[500]   hover:text-secondary transition-all cursor-pointer ${
              location.pathname == "/" ? "text-secondary" : "text-white"
            }`}
            onClick={() => navigate("/")}
          >
            Home
          </a>
          <a
            className={`text-[18px] font-[500]  hover:text-secondary transition-all cursor-pointer ${
              location.pathname == "/shop" ? "text-secondary" : "text-white"
            }`}
            onClick={() => navigate("/shop")}
          >
            Shop
          </a>
          <a
            className={`text-[18px] font-[500]  hover:text-secondary transition-all cursor-pointer ${
              location.pathname == "/contact" ? "text-secondary" : "text-white"
            }`}
            onClick={() => navigate("/contact")}
          >
            Contact
          </a>
          <a
            className={`text-[18px] font-[500]  hover:text-secondary transition-all cursor-pointer ${
              location.pathname == "/faqs" ? "text-secondary" : "text-white"
            }`}
            onClick={() => navigate("/faqs")}
          >
            FAQs
          </a>
        </div>
        <img
          className="w-[150px] cursor-pointer"
          src={logo}
          onClick={() => navigate("/")}
        />
        <div className="justify-end hidden gap-8 lg:flex">
          <FaRegUser
            className={`text-[24px] cursor-pointer  hover:text-secondary transition-all ${
              location.pathname == "/sign-in" || location.pathname == "/sign-up"
                ? "text-secondary"
                : "text-white"
            }`}
            onClick={() => navigate("/sign-in")}
          />
          <FaRegHeart
            className={`text-[24px]  cursor-pointer  hover:text-secondary transition-all ${
              location.pathname == "/wishlist" ? "text-secondary" : "text-white"
            }`}
            onClick={() => navigate("/wishlist")}
          />

          <BsHandbag
            className={`text-[24px] ${
              location.pathname == "/cart" ? "text-secondary" : "text-white"
            } cursor-pointer  hover:text-secondary transition-all`}
            onClick={() => navigate("/cart")}
          />
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
