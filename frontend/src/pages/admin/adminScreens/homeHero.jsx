import React, { useState } from "react";
import { AddSlideModal } from "../../../components";
import { AnimatePresence } from "framer-motion";

function HomeHero() {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <div>
      <div className="w-1/2 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4">
          <h2 className="text-center text-[32px]  font-[600] secondary-font text-secondary">
            Update Home Hero Content
          </h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-white block mx-auto text-secondary px-4 sm:px-8 py-2 text-[14px] sm:text-[16px] font-[600] tracking-wider hover:bg-secondary hover:text-white border border-secondary hover:border-white duration-500"
          >
            Add New Slide
          </button>
        </div>
        <AnimatePresence>
          {showAddModal && <AddSlideModal setShowAddModal={setShowAddModal} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HomeHero;
