import React, { useRef } from "react";
import { FaLeaf, FaShieldAlt, FaTruck } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    header: "100% Assurance",
    icon: <FaLeaf className="text-5xl transition-all text-secondary" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,in.",
  },
  {
    id: 2,
    header: "Express Delivery",
    icon: <FaTruck className="text-5xl transition-all text-secondary" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,in.",
  },
  {
    id: 3,
    header: "Secure",
    icon: <FaShieldAlt className="text-5xl transition-all text-secondary" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,in.",
  },
  {
    id: 4,
    header: "Return Policy",
    icon: <IoMdRefresh className="text-5xl transition-all text-secondary" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,in.",
  },
];

function MiddleSection() {
  return (
    <div>
      <div className="my-12 main-container lg:my-24">
        <h2 className="text-center text-3xl md:text-5xl font-[500] capitalize secondary-font">
          Features
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {data?.map((item) => (
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: item.id * 0.15,
                duration: 0.3,
                type: "spring",
                stiffness: "120",
              }}
              className="flex flex-col items-center justify-center w-full gap-4 px-4 py-8 bg-white shadow-2xl sm:aspect-square card "
            >
              {item.icon}
              <h2 className="text-3xl text-center font-[500] border-b-2 pb-2 border-slate-300 secondary-font text-black transition-all relative">
                {item.header}
              </h2>
              <p className="text-lg text-center transition-all">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
