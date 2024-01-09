import { motion } from "framer-motion";
import React from "react";
import Lottie from "react-lottie";
import { pistol } from "../assets/images";

function PistolAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pistol,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full cursor-default "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.5, duration: 0.2 }}
        >
          <Lottie options={defaultOptions} height={300} width={300} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PistolAnimation;
