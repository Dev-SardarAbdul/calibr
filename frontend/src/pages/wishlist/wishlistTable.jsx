import React from "react";
import { MdDelete } from "react-icons/md";
import { data, tableHeaderData } from "./data";

function WishlistTable() {
  return (
    <div className="flex justify-center">
      <div className="xl:w-[1000px] w-full inline-flex overflow-x-auto border border-slate-300">
        <div className="min-w-[700px] w-full">
          <div className="flex items-center justify-between gap-8 bg-[#E9E9E9] w-full p-4">
            {tableHeaderData.map((item) => (
              <div className="flex-1 text-slate-900 text-center font-[600] uppercase">
                {item.text}
              </div>
            ))}
          </div>
          {data?.map((item) => (
            <div
              className={`flex items-center justify-between gap-8 p-4 last-of-type:border-none border-b border-slate-300`}
            >
              <div className="flex-1 text-slate-900 font-[600] uppercase">
                <img className="w-1/2 mx-auto" src={item.img} />
              </div>
              <div className="flex-1 text-slate-900 font-[600] uppercase text-center">
                {item.name}
              </div>
              <div className="flex-1 text-slate-500 font-[400] uppercase text-center">
                $ {item.price}
              </div>
              <div className="flex-1 text-slate-900 font-[600] uppercase">
                <button className="bg-secondary text-white px-8 py-2 text-[18px] uppercase font-[600] block mx-auto">
                  Buy
                </button>
              </div>
              <div className="flex-1 text-slate-900 font-[600] uppercase">
                <MdDelete className="text-[32px] cursor-pointer mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WishlistTable;
