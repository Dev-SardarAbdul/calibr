import React from "react";
import { ShopCard, TopSection } from "../../components";

function Shop() {
  return (
    <div>
      <TopSection topText={"Shop"} bottomText={"Shop"} />

      <div className="my-12 main-container lg:my-24">
        <div className="flex items-center justify-center gap-4 lg:justify-end">
          <h2 className="secondary-font font-[600] text-2xl">Filter:</h2>
          <select className="px-4 py-2 text-white border border-gray-300 outline-none cursor-pointer bg-secondary font-[500] secondary-font text-xl mb-4">
            <option className="">All </option>
            <option className="">ARs </option>
            <option className="">SMGs </option>
            <option className="">Shotguns </option>
            <option className="">Explosives </option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 sm:gap-x-8 gap-y-8 sm:gap-y-12">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <ShopCard />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
