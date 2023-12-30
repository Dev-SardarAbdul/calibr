import React from "react";
import { NotFound, TopSection } from "../../components";
import Products from "./products";
import OrderSummary from "./orderSummary";

function Cart() {
  const showCart = true;
  return (
    <div>
      <TopSection topText={"Your Shopping Cart"} bottomText={"Cart"} />

      <div className="flex justify-center my-12 main-container lg:my-24">
        {showCart ? (
          <NotFound text={"Nothing found in cart!"} />
        ) : (
          <div className="xxl:w-[1200px] w-full flex flex-col lg:flex-row justify-between gap-8">
            <div className="flex-1 ">
              <Products />
            </div>
            <div className="sm:w-[350px] w-full mx-auto">
              <OrderSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
