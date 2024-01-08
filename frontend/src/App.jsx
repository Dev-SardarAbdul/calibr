import React, { useEffect } from "react";
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
  Admin,
} from "./pages";
import { Footer } from "./components";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          theme="dark"
        />
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
              <Route path="/admin/*" element={<Admin />} />
            </Routes>
          </div>
          {window.location.pathname.startsWith("/admin") ? "" : <Footer />}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
