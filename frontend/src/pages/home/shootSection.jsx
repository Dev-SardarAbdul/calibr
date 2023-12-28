import React, { useState } from "react";
import { bullets1, gun1 } from "../../assets/images";
import { motion } from "framer-motion";

function ShootSection() {
  const [hoveredDiv, setHoveredDiv] = useState("");

  console.log(hoveredDiv);
  return (
    <div className="my-12 main-container lg:my-24">
      <h2 className="text-center text-3xl md:text-5xl font-[500] capitalize secondary-font">
        Shoot for the stars with rifles
      </h2>
      <p className=" w-full md:w-[700px] text-md md:text-xl mx-auto mt-4 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut
      </p>
      <div className="flex flex-col items-center justify-between gap-8 mt-8 lg:flex-row">
        <div
          className="rounded-full w-full max-lg:w-[300px] aspect-square flex justify-center items-center relative"
          onMouseEnter={() => setHoveredDiv("first")}
          onMouseLeave={() => setHoveredDiv("")}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-full bg-secondary bg-opacity-75 z-[1] flex flex-col justify-center items-center px-4"
            animate={{
              opacity: hoveredDiv === "first" ? 1 : 0,
              scale: hoveredDiv === "first" ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-center secondary-font text-2xl lg:text-6xl font-[600] text-white uppercase">
              Ammunition
            </h2>
            <p className="text-center secondary-font text-md lg:text-2xl font-[400] text-white ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae, aperiam illo?
            </p>
          </motion.div>
          <img
            className="absolute top-0 left-0 w-full h-full rounded-full"
            src={bullets1}
          />
        </div>
        <div
          className="rounded-full w-full max-lg:w-[300px] aspect-square flex justify-center items-center relative"
          onMouseEnter={() => setHoveredDiv("second")}
          onMouseLeave={() => setHoveredDiv("")}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-full bg-secondary bg-opacity-75 z-[1] px-4 flex flex-col justify-center items-center"
            animate={{
              opacity: hoveredDiv === "second" ? 1 : 0,
              scale: hoveredDiv === "second" ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-center secondary-font text-2xl lg:text-6xl font-[600] text-white uppercase">
              Firearms
            </h2>
            <p className="text-center secondary-font text-md lg:text-2xl font-[400] text-white ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae, aperiam illo?
            </p>
          </motion.div>
          <img
            className="absolute top-0 left-0 w-full h-full rounded-full"
            src={gun1}
          />
        </div>
      </div>
    </div>
  );
}

export default ShootSection;
