import React from "react";
import { Navbar } from "../../components";
import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-[400px] bg-signupBG bg-cover bg-center bg-no-repeat relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#484437] bg-opacity-60" />
        <div className="relative z-[2] bg-[#393939] py-2">
          <Navbar />
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-white secondary-font font-[600] text-4xl tracking-wider text-center mt-20">
            Shop
          </h2>
          <p className="text-lg text-white font-[500] mt-2">
            <span
              className="cursor-pointer hover:text-secondary"
              onClick={() => navigate("/")}
            >
              Home{" "}
            </span>
            / Shop
          </p>
        </div>
      </div>
      <div className="my-12 main-container lg:my-24">sdds</div>
    </div>
  );
}

export default Shop;
