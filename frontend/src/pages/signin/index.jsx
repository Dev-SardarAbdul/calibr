import React from "react";
import { Navbar } from "../../components";
import { useNavigate } from "react-router-dom";

function Signin() {
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
            LOGIN TO YOUR ACCOUNT
          </h2>
          <p className="text-lg text-white font-[500] mt-2">
            <span
              className="cursor-pointer hover:text-secondary"
              onClick={() => navigate("/")}
            >
              Home{" "}
            </span>
            / Login
          </p>
        </div>
      </div>
      <div className="main-container">
        <div className="w-full md:w-[600px] mx-auto bg-[#F7F7F7] shadow-xl py-8 px-4 my-12 lg:my-24 border border-secondary">
          <input
            className="w-full px-4 py-2 mt-8 transition-all duration-500 bg-white border rounded-sm outline-none border-slate-200 focus:border-secondary text-slate-500"
            type="text"
            placeholder="Enter Email"
          />
          <input
            className="w-full px-4 py-2 mt-8 transition-all duration-500 bg-white border rounded-sm outline-none border-slate-200 focus:border-secondary text-slate-500"
            type="text"
            placeholder="Enter Password"
          />
          <button className="bg-secondary border border-transparent hover:border-slate-200 text-white mt-4 px-4  py-2 text-[18px] font-[600] hover:bg-white hover:text-secondary duration-500 block mx-auto">
            Login
          </button>

          <hr className="my-4" />
          <p className="text-gray-400 font-[400] text-center ">
            Don't have an account yet?{" "}
            <span
              className="cursor-pointer hover:text-secondary"
              onClick={() => navigate("/sign-up")}
            >
              Create one here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;