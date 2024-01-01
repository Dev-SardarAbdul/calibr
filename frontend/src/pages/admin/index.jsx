import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { collectionBG } from "../../assets/images";

function AdminDashboard() {
  return (
    <div className="relative flex items-start justify-start h-screen overflow-hidden">
      <div className="absolute top-0 left-0 z-[-1] w-full h-full ">
        <img className="object-cover w-full h-full " src={collectionBG} />
      </div>

      <Sidebar />
      <div className="w-full h-full overflow-auto">
        <Navbar />
        <div className="p-4 lg:p-8">
          <div className="min-h-[calc(100vh-140px)] bg-white rounded-2xl bg-opacity-50 shadow-adminBoxShadow">
            <Routes>
              <Route path="/home/hero" element={<h2 className="">Admin</h2>} />
              <Route path="/products" element={<h2>products</h2>} />
              <Route path="/users" element={<h2>users</h2>} />
              <Route path="/messages" element={<h2>messages</h2>} />
              <Route path="/orders" element={<h2>orders</h2>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
