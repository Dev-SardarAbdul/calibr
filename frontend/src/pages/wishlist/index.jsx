import React from "react";
import { NotFound, TopSection } from "../../components";
import WishlistTable from "./wishlistTable";
import { motion } from "framer-motion";

function WishList() {
  const showCart = true;

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
