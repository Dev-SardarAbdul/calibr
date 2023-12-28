import React from "react";
import Hero from "./hero";
import MiddleSection from "./middleSection";
import ShootSection from "./shootSection";
import NewProducts from "./newProducts";
import Collections from "./collections";

function Home() {
  return (
    <div>
      <Hero />
      <MiddleSection />
      <ShootSection />
      <NewProducts />
      <Collections />
    </div>
  );
}

export default Home;
