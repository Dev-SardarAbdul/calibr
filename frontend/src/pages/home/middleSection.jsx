import React from "react";
import { FaLeaf, FaShieldAlt, FaTruck } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

const data = [
  {
    id: 1,
    header: "100% Assurance",
    icon: <FaLeaf className="text-secondary text-5xl transition-all" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,in.",
  },
  {
    id: 2,
    header: "Express Delivery",
    icon: <FaTruck className="text-secondary text-5xl transition-all" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,in.",
  },
  {
    id: 3,
    header: "Secure",
    icon: <FaShieldAlt className="text-secondary text-5xl transition-all" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,in.",
  },
  {
    id: 4,
    header: "Return Policy",
    icon: <IoMdRefresh className="text-secondary text-5xl transition-all" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,in.",
  },
];

function MiddleSection() {
  return (
    <div>
      <div className="main-container my-12 lg:my-24">
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data?.map((item) => (
            <div className="bg-white w-full sm:aspect-square shadow-2xl px-4 py-8 flex-col flex justify-center items-center gap-4 card ">
              {item.icon}
              <h2 className="text-3xl text-center font-[500] border-b-2 pb-2 border-slate-300 secondary-font text-black transition-all relative">
                {item.header}
              </h2>
              <p className="text-lg text-center transition-all">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
