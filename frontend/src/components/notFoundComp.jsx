import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function NotFound({ text }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <BsCart4 className="text-[120px] text-black" />
        <p className=" font-[600] text-black text-xl">{text || "Not Found!"}</p>
        <button
          className="bg-secondary text-white mt-4 px-8 py-4 text-[18px] uppercase font-[600] duration-500"
          onClick={() => navigate("/shop")}
        >
          Start Shopping
        </button>
      </div>
    </div>
  );
}

export default NotFound;
