import React from "react";

function OrderSummary() {
  return (
    <div>
      <h2 className="text-center sm:text-left  secondary-font font-[600] text-2xl">
        Order Summary
      </h2>
      <h2 className="text-center sm:text-left secondary-font text-secondary font-[600] text-2xl mt-4">
        Subtotal : $5000
      </h2>
      <button className="w-full px-4 py-4 uppercase bg-secondary text-white font-[600] secondary-font text-2xl mt-4">
        Proceed to checkout
      </button>
    </div>
  );
}

export default OrderSummary;
