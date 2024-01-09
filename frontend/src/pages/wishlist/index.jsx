import React from "react";
import { NotFound, TopSection } from "../../components";
import WishlistTable from "./wishlistTable";
import { motion } from "framer-motion";

function WishList() {
  const showCart = true;

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
      <TopSection topText={"Wishlist"} bottomText={"Wishlist"} />

      <div className="main-container">
        <div className="my-12 lg:my-24 ">
          {showCart ? (
            <NotFound text={"  Nothing found in wishlist!"} />
          ) : (
            <WishlistTable />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default WishList;
