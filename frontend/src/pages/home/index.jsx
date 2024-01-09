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
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.15 },
    },
    exit: {
      x: "-100vw",
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
