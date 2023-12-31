import React from "react";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";

function EditFeatureModal({ setShowEditModal }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center w-full h-full p-2 bg-black bg-opacity-80"
      onClick={() => setShowEditModal(false)}
    >
      <div
        className="relative w-full p-4 bg-white rounded-lg lg:p-8 sm:w-1/2 lg:gap-8 shadow-modalBoxShadow"
        onClick={(e) => e.stopPropagation()}
      >
        <IoCloseCircleOutline
          className="absolute text-[32px] text-secondary cursor-pointer top-2 right-2"
          onClick={() => setShowEditModal(false)}
        />
        <h2 className="text-center text-[24px] lg:text-[32px] font-[600] secondary-font text-secondary ">
          Edit Feature
        </h2>
        <div className="grid grid-cols-1 gap-2 mt-4 lg:gap-4 lg:grid-cols-2 ">
          <div className="flex flex-col items-start gap-2">
            <label className="text-center text-[20px]  font-[600] secondary-font text-secondary">
              Feature header:
            </label>
            <input
              className="w-full px-4 py-2 transition-all duration-500 bg-white border rounded-sm outline-none border-slate-200 focus:border-secondary text-slate-500"
              type="text"
              placeholder="Enter Feature Header"
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-center text-[20px]  font-[600] secondary-font text-secondary">
              Feature Subtext:
            </label>
            <input
              className="w-full px-4 py-2 transition-all duration-500 bg-white border rounded-sm outline-none border-slate-200 focus:border-secondary text-slate-500"
              type="text"
              placeholder="Enter Feature Subtext"
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-center text-[20px]  font-[600] secondary-font text-secondary">
              Feature Image:
            </label>
            <input
              className="py-2 transition-all duration-500 rounded-sm outline-none cursor-pointer text-slate-500"
              type="file"
              placeholder="Enter Feature Name"
            />
          </div>
        </div>
        <button className="bg-white block mx-auto mt-8 text-secondary px-4 sm:px-8 py-2 text-[14px] sm:text-[16px] font-[600] tracking-wider hover:bg-secondary hover:text-white border border-secondary hover:border-white duration-500">
          Edit
        </button>
      </div>
    </motion.div>
  );
}

export default EditFeatureModal;
