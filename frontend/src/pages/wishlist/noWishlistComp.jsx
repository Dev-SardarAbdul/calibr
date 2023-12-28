import React from "react";
import { BsCart4 } from "react-icons/bs";

function NoWishlistComp() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <BsCart4 className="text-[120px] text-black" />
        <p className=" font-[600] text-black text-xl">
          Nothing found in wishlist!
        </p>
        <button className="bg-secondary text-white mt-4 px-8 py-4 text-[18px] uppercase font-[600] duration-500">
          Start Shopping
        </button>
      </div>
    </div>
  );
}

export default NoWishlistComp;
