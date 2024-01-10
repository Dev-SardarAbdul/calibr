import React from "react";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import { deleteSlideHook } from "../../../../hooks/adminHooks/deleteSlide";
import Loader from "../../../loader";

function ConfirmDeleteModal({ setShowDeleteModal, clickedItem }) {
  const { loading, deleteSlide } = deleteSlideHook();

  const handleClick = () => {
    deleteSlide(clickedItem, setShowDeleteModal);
  };
  return (
    <>
      {loading && <Loader />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center w-full h-full p-2 bg-black bg-opacity-80"
        onClick={() => setShowDeleteModal(false)}
      >
        <div
          className="relative w-full p-4 bg-white rounded-lg lg:p-8 sm:w-1/2 lg:w-1/3 lg:gap-8 shadow-modalBoxShadow"
          onClick={(e) => e.stopPropagation()}
        >
          <IoCloseCircleOutline
            className="absolute text-[32px] text-secondary cursor-pointer top-1 right-1"
            onClick={() => setShowDeleteModal(false)}
          />
          <h2 className="text-center text-[24px] mt-4 lg:text-[32px] font-[600] secondary-font text-secondary ">
            Are you sure you want to delete?
          </h2>

          <div className="flex items-center justify-center gap-4 mt-4 ">
            <button
              className="bg-white  text-secondary px-4 sm:px-8 py-2 text-[14px] sm:text-[16px] font-[600] tracking-wider hover:bg-secondary hover:text-white border border-secondary hover:border-white duration-500"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </button>
            <button
              onClick={handleClick}
              className="bg-white  text-secondary px-4 sm:px-8 py-2 text-[14px] sm:text-[16px] font-[600] tracking-wider hover:bg-secondary hover:text-white border border-secondary hover:border-white duration-500"
            >
              Delete
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ConfirmDeleteModal;
