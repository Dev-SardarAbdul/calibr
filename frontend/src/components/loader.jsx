import React from "react";
import PistolAnimation from "./pistolAnimation";

function Loader() {
  return (
    <div className="fixed flex top-0 left-0 flex-col items-center justify-center w-full h-full  backdrop-blur-[5px] bg-black bg-opacity-15 z-[100]">
      <PistolAnimation />
    </div>
  );
}

export default Loader;
