import React from "react";
import { NotFound, TopSection } from "../../components";
import WishlistTable from "./wishlistTable";

function WishList() {
  const showCart = true;
  return (
    <div>
      <TopSection topText={"Wishlist"} bottomText={"Wishlist"} />

      <div className="main-container">
        <div className="my-12 lg:my-24 ">
          {showCart ? (
            <NotFound text={"  Nothing found in wishlist!"} />
          ) : (
            <WishlistTable />
          )}
        </div>
      </div>
    </div>
  );
}

export default WishList;
