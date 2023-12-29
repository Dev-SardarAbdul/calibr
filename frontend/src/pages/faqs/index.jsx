import React, { useState } from "react";
import { Navbar } from "../../components";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    id: 1,
    header: "How will my order be delivered to me?",
    text: `font-[500] Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500 elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500 elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500`,
  },
  {
    id: 2,
    header: "How will my order be delivered to me?",
    text: `font-[500] Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500 elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500 elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500`,
  },
  {
    id: 3,
    header: "How will my order be delivered to me?",
    text: `font-[500] Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500 elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500 elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500`,
  },
  {
    id: 4,
    header: "How will my order be delivered to me?",
    text: `font-[500] Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500 elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500 elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500`,
  },
  {
    id: 5,
    header: "How will my order be delivered to me?",
    text: `font-[500] Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500 elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500 elit. Aut ipsa neque, vitae eius sequi quae illum dolorum velit? Rem, nam pariatur? Eaque adipisci vitae minus impedit omnis id exercitationem fuga.500`,
  },
];

function Contact() {
  const navigate = useNavigate();

  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (itemId) => {
    setShowAnswers((prevShowAnswers) => ({
      ...prevShowAnswers,
      [itemId]: !prevShowAnswers[itemId],
    }));
  };

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
        <div className=" mx-auto xl:w-[1000px] w-full flex flex-col gap-8 ">
          {data?.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div
                className="flex items-center justify-start gap-4 p-4 md:p-6 cursor-pointer bg-[#EFD795] tracking-wider"
                onClick={() => toggleAnswer(item.id)}
              >
                <AnimatePresence>
                  {showAnswers[item.id] ? (
                    <motion.div
                      key={"first"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaMinus className="text-[16px] sm:text-[24px] text-black" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={"second"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaPlus className="text-[16px] sm:text-[24px] text-black" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <h1 className="text-[18px] sm:text-[24px] font-[600] secondary-font">
                  {item.header}
                </h1>
              </div>

              <AnimatePresence>
                {showAnswers[item.id] && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, exit: { duration: 0.1 } }}
                    className="p-4 md:p-6 bg-[#F7F5F8] shadow-md"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-slate-900 font-[500] text-16 sm:tracking-wide"
                    >
                      {item.text}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
