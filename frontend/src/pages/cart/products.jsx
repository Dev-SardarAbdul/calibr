import React from "react";
import { ProductsCard } from "../../components";

function Products() {
  return (
    <div>
      <h2 className="text-center sm:text-left  secondary-font font-[600] text-2xl">
        Products
      </h2>
      <div className="flex flex-col gap-8 mt-4">
        {[1, 2, 3, 4].map(() => (
          <ProductsCard />
        ))}
      </div>
    </div>
  );
}

export default Products;
