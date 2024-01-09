import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import { AnimatePresence, animate } from "framer-motion";
import PistolAnimation from "./components/pistolAnimation";

function App() {
  const location = useLocation();
  const [loader, setShowLoader] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    setShowLoader(true);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        theme="dark"
      />
      <AnimatePresence>
        {!location.pathname.startsWith("/admin") && loader && (
          <PistolAnimation />
        )}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {!loader && (
              <Routes location={location} key={location.key}>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            )}
          </AnimatePresence>
        </div>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
        {!loader && !location.pathname.startsWith("/admin") && <Footer />}
      </div>
    </div>
  );
}

export default App;
