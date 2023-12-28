import React, { useState } from "react";
import { ar15, m79, scar } from "../../assets/images";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    name: "Scar L",
    gun: scar,
    price: "2000",
  },
  {
    id: 2,
    name: "AR15",
    gun: ar15,
    price: "3200",
  },
  {
    id: 3,
    name: "M79",
    gun: m79,
    price: "4900",
  },
];

function NewProducts() {
  const [hoveredDiv, setHoveredDiv] = useState("");
  return (
    <div>
      <div className="my-12 main-container lg:my-24">
        <h2 className="text-center text-3xl md:text-5xl font-[500] capitalize secondary-font">
          New Products
        </h2>
        <p className="w-full md:w-[700px] text-md md:text-xl mx-auto mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
        <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-3">
          {data?.map((item) => (
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: item.id * 0.15,
                duration: 0.3,
                type: "spring",
                stiffness: "120",
              }}
              className="relative max-lg:min-h-[400px] lg:aspect-square"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-secondary bg-opacity-80 z-[2] flex flex-col justify-center items-center px-4"
                onMouseEnter={() => setHoveredDiv(item.name)}
                onMouseLeave={() => setHoveredDiv("")}
                animate={{
                  opacity: hoveredDiv === item.name ? 1 : 0,
                  scale: hoveredDiv === item.name ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-center secondary-font text-2xl lg:text-6xl font-[600] text-white uppercase">
                  {item.name}
                </h2>
                <p className="text-center secondary-font text-2xl lg:text-3xl font-[600] text-white uppercase mt-2">
                  $ {item.price}
                </p>
              </motion.div>
              <img
                className="absolute top-0 left-0 object-fill w-full h-full"
                src={item.gun}
              />

              <div
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-55 z-[1]"
                onMouseEnter={() => setHoveredDiv(item.name)}
                onMouseLeave={() => setHoveredDiv("")}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
