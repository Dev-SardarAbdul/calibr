import React from "react";
import { TopSection } from "../../components";
import { motion } from "framer-motion";

function Contact() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,

      transition: { duration: 0.35 },
    },
    exit: {
      opacity: 1,
      scale: 0,

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
      <TopSection topText={"Contact Us"} bottomText={"Contact"} />

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
          <textarea
            className="w-full px-4 py-2 mt-8 transition-all duration-500 bg-white border rounded-sm min-h-[100px] outline-none border-slate-200 focus:border-secondary text-slate-500"
            type="text"
            placeholder="Your Message"
          />
          <button className="bg-secondary border border-transparent hover:border-slate-200 text-white mt-4 px-4  py-2 text-[18px] font-[600] hover:bg-white hover:text-secondary duration-500 block mx-auto">
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
