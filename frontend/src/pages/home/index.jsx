import React from "react";
import Hero from "./hero";
import MiddleSection from "./middleSection";
import ShootSection from "./shootSection";
import NewProducts from "./newProducts";
import Collections from "./collections";
import { motion } from "framer-motion";

function Home() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,

      transition: { duration: 0.35, delay: 0.5 },
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
      <Hero />
      <MiddleSection />
      <ShootSection />
      <NewProducts />
      <Collections />
    </motion.div>
  );
}

export default Home;
