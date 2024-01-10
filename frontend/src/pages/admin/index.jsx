import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { collectionBG } from "../../assets/images";
import HomeHero from "./adminScreens/homeHero";
import Products from "./adminScreens/products";
import Users from "./adminScreens/users";
import Messages from "./adminScreens/messages";
import Orders from "./adminScreens/orders";
import HomeProducts from "./adminScreens/homeProducts";

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
          <div className="min-h-[calc(100vh-140px)] bg-white rounded-2xl bg-opacity-90 shadow-adminBoxShadow p-4 lg:p-8">
            <Routes>
              <Route path="/" element={<HomeHero />} />
              <Route path="/home/new-products" element={<HomeProducts />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
