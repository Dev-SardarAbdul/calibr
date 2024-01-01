import React, { useState } from "react";
import { sidebarData } from "./data";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import { logo } from "../../assets/images";

function MobileSidebar({ setShowDrawer }) {
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
    <motion.div
      className="fixed top-0 left-0 z-20 flex justify-start w-full h-full bg-black bg-opacity-80"
      onClick={() => setShowDrawer(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="h-full py-8 overflow-auto bg-white border-r border-secondary w-60"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4">
          <img className="w-[100px]" src={logo} />
          <IoCloseCircleOutline
            className="text-[32px] text-secondary"
            onClick={() => setShowDrawer(false)}
          />
        </div>
        <div className="flex flex-col min-h-[calc(100vh-200px)]">
          <div className="flex-1">
            <div className="flex flex-col justify-start mt-11">
              {sidebarData.map((item, index) => (
                <div className="flex flex-col w-full" key={item.id}>
                  <div
                    className={`flex items-center py-2 justify-between w-full px-4 cursor-pointer ${
                      location.pathname === item.route
                        ? "text-white bg-secondary"
                        : "text-secondary bg-white "
                    }`}
                    onClick={() => {
                      item.subRoutes && toggleAnswer(item.id);
                      !item.subRoutes && navigate(`${item.route}`);
                      !item.subRoutes && setShowDrawer(false);
                    }}
                  >
                    <p
                      className={`text-[18px] transition-all duration-300 w-full font-[600] secondary-font `}
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
                          <React.Fragment key={x.text}>
                            <li
                              className={`px-4 py-2 cursor-pointer text-[16px] transition-all duration-300 w-full font-[600] secondary-font  ${
                                location.pathname === x.route
                                  ? "text-white bg-secondary"
                                  : "text-secondary bg-white"
                              }`}
                              onClick={() => {
                                navigate(`${x.route}`);
                                setShowDrawer(false);
                              }}
                            >
                              {"•" + " " + x.text}
                            </li>
                            {index !== item.subRoutes.length - 1 && <hr />}
                          </React.Fragment>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  {index !== sidebarData.length - 1 && <hr />}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-4">
          <p
            className={`text-[20px] text-secondary transition-all duration-300 w-full font-[600] secondary-font `}
            onClick={() => {
              navigate("/");
              setShowDrawer(false);
            }}
          >
            Home
          </p>
          <p
            className={`text-[20px] text-secondary transition-all duration-300 w-full font-[600] secondary-font `}
            onClick={() => {
              navigate("/shop");
              setShowDrawer(false);
            }}
          >
            Shop
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MobileSidebar;
