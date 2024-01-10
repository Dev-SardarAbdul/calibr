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
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
}

export default PistolAnimation;
