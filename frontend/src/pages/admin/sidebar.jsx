import React, { useState } from "react";
import { logo } from "../../assets/images";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarData } from "../../data";
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
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.subRoutes.map((x, index) => (
                    <React.Fragment key={x.text}>
                      <li
                        className={`px-4 py-2 cursor-pointer text-[16px] transition-all duration-300 w-full font-[600] secondary-font  ${
                          location.pathname === x.route
                            ? "text-white bg-secondary"
                            : "text-secondary bg-white"
                        }`}
                        onClick={() => navigate(`${x.route}`)}
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
  );
}

export default Sidebar;
