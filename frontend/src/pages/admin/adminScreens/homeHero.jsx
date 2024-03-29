import React, { useEffect, useState } from "react";
import {
  AddSlideModal,
  DeleteSlideModal,
  EditSlideModal,
  Loader,
} from "../../../components";
import { AnimatePresence } from "framer-motion";
import { adminHeroTableData } from "../../../data";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { getHeroSlidesHook } from "../../../hooks/adminHooks/getHeroSlides";
import { useSelector } from "react-redux";

function HomeHero() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const { slides } = useSelector((state) => state.heroSlides);

  useEffect(() => {
    if (showAddModal || showEditModal || showDeleteModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAddModal, showEditModal, showDeleteModal]);

  const { loading, getHeroSlides } = getHeroSlidesHook();

  useEffect(() => {
    getHeroSlides();
  }, []);

  console.log(slides);

  return (
    <div>
      {loading && <Loader />}
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
          {slides.length > 0 ? (
            <div className="inline-flex w-full overflow-x-auto border border-slate-300">
              <div className="min-w-[650px] w-full bg-white max-h-[500px] overflow-auto">
                <div className="flex items-center justify-between w-full gap-8 p-4">
                  {adminHeroTableData.map((item) => (
                    <div className="flex-1 text-slate-900 text-center font-[600] capitalize">
                      {item.name}
                    </div>
                  ))}
                </div>
                {slides.map((item) => (
                  <div
                    className={`flex items-center te justify-between gap-8 p-4 last-of-type:border-none border-b border-slate-300`}
                    key={item._id}
                  >
                    <div className="flex-1 text-slate-900 font-[400] text-center capitalize">
                      {item.topText}
                    </div>
                    <div className="flex-1 text-slate-900 font-[400] capitalize text-center">
                      {item.name}
                    </div>
                    <div className="flex-1 text-slate-500 font-[400] capitalize text-center">
                      $ {item.price}
                    </div>
                    <div className="flex-1 text-slate-500 font-[400] capitalize text-center">
                      <img
                        className="mx-auto rounded-lg size-10"
                        src={item.image}
                        alt="slides image"
                      />
                    </div>

                    <div className="flex-1 text-slate-900 font-[600] capitalize flex justify-center items-center gap-4">
                      <MdEdit
                        className="text-[24px] cursor-pointer"
                        onClick={() => {
                          setShowEditModal(true);
                          setClickedItem(item._id);
                        }}
                      />
                      <MdDelete
                        className="text-[24px] cursor-pointer"
                        onClick={() => {
                          setShowDeleteModal(true);
                          setClickedItem(item._id);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <h2 className="text-center text-[32px]  font-[500] secondary-font text-slate-900  mt-20">
              No slides! Add slides to see list of slides here.
            </h2>
          )}
        </div>
        <AnimatePresence>
          {showAddModal && <AddSlideModal setShowAddModal={setShowAddModal} />}
        </AnimatePresence>
        <AnimatePresence>
          {showEditModal && (
            <EditSlideModal
              clickedItem={clickedItem}
              setShowEditModal={setShowEditModal}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showDeleteModal && (
            <DeleteSlideModal
              setShowDeleteModal={setShowDeleteModal}
              clickedItem={clickedItem}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HomeHero;
