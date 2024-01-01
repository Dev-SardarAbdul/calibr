import React, { useState } from "react";
import { logo } from "../../assets/images";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarData } from "./data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState({});

  const toggleAnswer = (itemId) => {
    setShowDropdown((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div className="hidden h-full py-8 overflow-auto bg-white border-r border-secondary w-60 lg:block">
      <img className="w-[100px] mx-auto" src={logo} />
      <div className="flex flex-col justify-start mt-11">
        {sidebarData.map((item, index) => (
          <div className="flex flex-col w-full">
            <div
              className={`flex items-center py-2 justify-between w-full px-4 cursor-pointer ${
                location.pathname === item.route
                  ? "text-white bg-secondary"
                  : "text-secondary bg-white "
              }`}
              onClick={() => {
                item.subRoutes && toggleAnswer(item.id);
                !item.subRoutes && navigate(`${item.route}`);
              }}
            >
              <p
                className={`text-[16px] transition-all duration-300 w-full font-[600]`}
              >
                {index + 1}. {item.header}
              </p>

              {item.subRoutes && (
                <>
                  {showDropdown[item.id] ? (
                    <IoIosArrowUp className="text-secondary text-[22px]" />
                  ) : (
                    <IoIosArrowDown className="text-secondary text-[22px]" />
                  )}
                </>
              )}
            </div>

            <AnimatePresence>
              {showDropdown[item.id] && (
                <motion.ul
                  className="list-disc"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                >
                  {item.subRoutes.map((x, index) => (
                    <>
                      <li
                        className={`px-4 py-2 cursor-pointer text-[14px] transition-all duration-300 w-full font-[600] ${
                          location.pathname === x.route
                            ? "text-white bg-secondary"
                            : "text-secondary bg-white"
                        }`}
                        onClick={() => navigate(`${x.route}`)}
                      >
                        {"•" + " " + x.text}
                      </li>
                      {index !== item.subRoutes.length - 1 && <hr />}
                    </>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            {index !== sidebarData.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
