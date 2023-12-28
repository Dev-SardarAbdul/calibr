import React from "react";
import Hero from "./hero";
import MiddleSection from "./middleSection";
import ShootSection from "./shootSection";
import NewProducts from "./newProducts";

function Home() {
  return (
    <div>
      <Hero />
      <MiddleSection />
      <ShootSection />
      <NewProducts />
    </div>
  );
}

export default Home;
