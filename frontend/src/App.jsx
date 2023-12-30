import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  WishList,
  Home,
  Signin,
  Signup,
  Contact,
  FAQs,
  Shop,
  Cart,
} from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/sign-in" element={<Signin />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
