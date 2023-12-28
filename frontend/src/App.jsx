import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<h2>Shop</h2>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
