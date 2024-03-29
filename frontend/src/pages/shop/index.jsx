import React from "react";
import { ShopCard, TopSection } from "../../components";
import { motion } from "framer-motion";

function Shop() {
  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,

      transition: { duration: 0.2, delay: 0.1 },
    },
    exit: {
      opacity: 1,
      scale: 0,

      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <TopSection topText={"Shop"} bottomText={"Shop"} />

      <div className="my-12 main-container lg:my-24">
        <div className="flex items-center justify-center gap-4 lg:justify-end">
          <h2 className="secondary-font font-[600] text-2xl">Filter:</h2>
          <select className="px-4 py-2 text-white border border-gray-300 outline-none cursor-pointer bg-secondary font-[500] secondary-font text-xl mb-4">
            <option className="">All </option>
            <option className="">ARs </option>
            <option className="">SMGs </option>
            <option className="">Shotguns </option>
            <option className="">Explosives </option>
          </select>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 sm:gap-x-8 gap-y-8 sm:gap-y-12"
          variants={variants}
          initial={"hidden"}
          animate={"visible"}
        >
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div key={index} variants={cardVariants}>
              <ShopCard />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Shop;
