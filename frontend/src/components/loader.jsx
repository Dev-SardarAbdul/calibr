import React from "react";

function Loader() {
  return (
    <div className="fixed flex top-0 left-0 flex-col items-center justify-center w-full h-full bg-black bg-opacity-70 z-[100]">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
