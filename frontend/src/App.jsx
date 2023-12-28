import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Signin, Signup } from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
