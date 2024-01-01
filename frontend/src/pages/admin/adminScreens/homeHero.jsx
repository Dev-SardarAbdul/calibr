import React, { useEffect, useState } from "react";
import {
  AddSlideModal,
  DeleteSlideModal,
  EditSlideModal,
} from "../../../components";
import { AnimatePresence } from "framer-motion";
import { adminHeroTableData } from "../../../data";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function HomeHero() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (showAddModal || showEditModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAddModal, showEditModal]);

  return (
    <div>
      <div className="w-full mx-auto lg:w-3/4">
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

        <div className="flex justify-center mt-8">
          <div className="inline-flex w-full overflow-x-auto border border-slate-300">
            <div className="min-w-[650px] w-full bg-white max-h-[500px] overflow-auto">
              <div className="flex items-center justify-between w-full gap-8 p-4">
                {adminHeroTableData.map((item) => (
                  <div className="flex-1 text-slate-900 text-center font-[600] uppercase">
                    {item.name}
                  </div>
                ))}
              </div>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  className={`flex items-center te justify-between gap-8 p-4 last-of-type:border-none border-b border-slate-300`}
                >
                  <div className="flex-1 text-slate-900 font-[400] text-center uppercase">
                    Top text
                  </div>
                  <div className="flex-1 text-slate-900 font-[400] uppercase text-center">
                    abc
                  </div>
                  <div className="flex-1 text-slate-500 font-[400] uppercase text-center">
                    $ 2221
                  </div>
                  <div className="flex-1 text-slate-500 font-[400] uppercase text-center">
                    Image
                  </div>

                  <div className="flex-1 text-slate-900 font-[600] uppercase flex justify-center items-center gap-4">
                    <MdEdit
                      className="text-[24px] cursor-pointer"
                      onClick={() => setShowEditModal(true)}
                    />
                    <MdDelete
                      className="text-[24px] cursor-pointer"
                      onClick={() => setShowDeleteModal(true)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {showAddModal && <AddSlideModal setShowAddModal={setShowAddModal} />}
        </AnimatePresence>
        <AnimatePresence>
          {showEditModal && (
            <EditSlideModal setShowEditModal={setShowEditModal} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showDeleteModal && (
            <DeleteSlideModal setShowDeleteModal={setShowDeleteModal} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HomeHero;
