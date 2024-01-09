import React from "react";
import { useNavigate } from "react-router-dom";
import { TopSection } from "../../components";
import { motion } from "framer-motion";

function Signup() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.15 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <TopSection topText={"Create an account"} bottomText={"Login"} />
      <div className="main-container">
        <div className="w-full md:w-[600px] mx-auto bg-[#F7F7F7] shadow-xl py-8 px-4 my-12 lg:my-24 border border-secondary">
          <input
            className="w-full px-4 py-2 transition-all duration-500 bg-white border rounded-sm outline-none border-slate-200 focus:border-secondary text-slate-500"
            type="text"
            placeholder="Enter Name"
          />
          <input
            className="w-full px-4 py-2 mt-8 transition-all duration-500 bg-white border rounded-sm outline-none border-slate-200 focus:border-secondary text-slate-500"
            type="text"
            placeholder="Enter Email"
          />
          <input
            className="w-full px-4 py-2 mt-8 transition-all duration-500 bg-white border rounded-sm outline-none border-slate-200 focus:border-secondary text-slate-500"
            type="text"
            placeholder="Enter Password"
          />
          <button className="bg-secondary border border-transparent hover:border-slate-200 text-white mt-4 px-4  py-2 text-[18px] font-[600] hover:bg-white hover:text-secondary duration-500 block mx-auto">
            Sign Up
          </button>

          <hr className="my-4" />
          <p className="text-gray-400 font-[400] text-center ">
            Already have an account?{" "}
            <span
              className="cursor-pointer hover:text-secondary"
              onClick={() => navigate("/sign-in")}
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Signup;
