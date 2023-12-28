import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    text: "Free Shipping",
    icon: (
      <FaShippingFast className="text-white text-[42px] hover:text-secondary transition-all duration-500" />
    ),
  },
  {
    id: 2,
    text: "Safe Payment",
    icon: (
      <FaShieldAlt className="text-white text-[42px] hover:text-secondary transition-all duration-500" />
    ),
  },
  {
    id: 3,
    text: "Hassle Free Returns",
    icon: (
      <MdAssignmentReturn className="text-white text-[42px] hover:text-secondary transition-all duration-500" />
    ),
  },
];

function Collections() {
  return (
    <div className="bg-fixed bg-center bg-no-repeat bg-cover bg- bg-collectionBG">
      <div className="relative min-h-screen main-container">
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-4 ">
          <h2 className="secondary-font max-[370px]:leading-[60px] max-[370px]:text-[60px] text-[80px] lg:text-[120px] leading-[80px] lg:leading-[120px] text-center text-white font-[600] lg:font-[700]">
            UNIQUE <br /> COLLECTION
          </h2>
          <p className="text-white max-sm:text-[18px] text-[30px] font-[600] w-full lg:w-[800px] text-center">
            Viverra justo nec ultrices dui. Faucibus vitae aliquet nec
            ullamcorper
          </p>
          <div className="flex items-center justify-center w-full gap-8 mt-4 max-sm:flex-col lg:gap-40">
            {data.map((item) => (
              <motion.div
                className="flex flex-col flex-wrap items-center justify-center gap-2"
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: item.id * 0.15,
                  duration: 0.3,
                  type: "spring",
                  stiffness: "120",
                }}
              >
                {item.icon}
                <p className="text-white text-[18px] font-[600] text-center">
                  {item.id}. {item.text}
                </p>
              </motion.div>
            ))}
          </div>
          <button className="bg-white h-[60px] sm:h-[70px] w-[250px] sm:w-[292px] mt-4 text-secondary text-xl sm:text-2xl font-[600] uppercase hover:bg-secondary hover:text-white transition-all duration-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collections;
