import React, { useState } from "react";
import { Navbar } from "../../components";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";

function Contact() {
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <div className="min-h-[400px] bg-signupBG bg-cover bg-center bg-no-repeat relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#484437] bg-opacity-60" />
        <div className="relative z-[2] bg-[#393939] py-2">
          <Navbar />
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-white uppercase secondary-font font-[600] text-4xl tracking-wider text-center mt-20">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white font-[500] mt-2">
            <span
              className="cursor-pointer hover:text-secondary"
              onClick={() => navigate("/")}
            >
              Home{" "}
            </span>
            / FAQs
          </p>
        </div>
      </div>
      <div className="my-12 main-container lg:my-24 ">
        <div className=" mx-auto xl:w-[1000px] w-full ">
          <div className="flex flex-col">
            <div
              className="flex items-center justify-start gap-4 p-4 md:p-6 cursor-pointer bg-[#EFD795] tracking-wider"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              {showAnswer ? (
                <FaMinus className="text-[24px] text-black" />
              ) : (
                <FaPlus className="text-[24px] text-black" />
              )}
              <h1 className="text-[24px] font-[600] secondary-font">
                How will my order be delivered to me?
              </h1>
            </div>

            {showAnswer && (
              <div className="p-4 md:p-6 bg-[#F7F5F8] shadow-md">
                <p className="text-slate-900 font-[500] tracking-wide">
                  {" "}
                  font-[500] Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Aut ipsa neque, vitae eius sequi quae illum dolorum
                  velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit
                  omnis id exercitationem fuga.500 elit. Aut ipsa neque, vitae
                  eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque
                  adipisci vitae minus impedit omnis id exercitationem fuga.500
                  elit. Aut ipsa neque, vitae eius sequi quae illum dolorum
                  velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit
                  omnis id exercitationem fuga.500
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
