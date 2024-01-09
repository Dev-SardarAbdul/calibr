import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { TopSection } from "../../components";

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
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (itemId) => {
    setShowAnswers((prevShowAnswers) => ({
      ...prevShowAnswers,
      [itemId]: !prevShowAnswers[itemId],
    }));
  };

  const containerVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.15 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <TopSection topText={"Frequently Asked Questions"} bottomText={"FAQs"} />

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
    </motion.div>
  );
}

export default Contact;
