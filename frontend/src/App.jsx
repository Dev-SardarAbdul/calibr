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
import Lottie from "react-lottie";
import { pistol } from "./assets/images";
import { motion } from "framer-motion";

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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pistol,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full cursor-default "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.5, duration: 0.2 }}
            >
              <Lottie options={defaultOptions} height={300} width={300} />
            </motion.div>
          </motion.div>
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
