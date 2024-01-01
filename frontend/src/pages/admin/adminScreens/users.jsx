import React, { useEffect, useState } from "react";
import { DeletUserModal } from "../../../components";
import { AnimatePresence } from "framer-motion";
import { userTableData } from "../../../data";
import { MdDelete } from "react-icons/md";

function Users() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (showDeleteModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDeleteModal]);

  return (
    <div>
      <div className="w-full mx-auto lg:w-3/4">
        <div className="flex flex-col items-center justify-between gap-4">
          <h2 className="text-center text-[32px]  font-[600] secondary-font text-secondary">
            Users
          </h2>
        </div>

        <div className="flex justify-center mt-8">
          <div className="inline-flex w-full overflow-x-auto border border-slate-300">
            <div className="min-w-[650px] w-full bg-white max-h-[500px] overflow-auto">
              <div className="flex items-center justify-between w-full gap-8 p-4">
                {userTableData.map((item) => (
                  <div className="flex-1 text-slate-900 text-center font-[600] capitalize">
                    {item.name}
                  </div>
                ))}
              </div>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  className={`flex items-center te justify-between gap-8 p-4 last-of-type:border-none border-b border-slate-300`}
                >
                  <div className="flex-1 text-slate-900 font-[400] text-center capitalize">
                    User name
                  </div>
                  <div className="flex-1 text-slate-900 font-[400] capitalize text-center">
                    email@google.com
                  </div>

                  <div className="flex-1 text-slate-500 font-[400] capitalize text-center">
                    Image
                  </div>

                  <div className="flex-1 text-slate-900 font-[600] capitalize flex justify-center items-center gap-4">
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
          {showDeleteModal && (
            <DeletUserModal setShowDeleteModal={setShowDeleteModal} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Users;
