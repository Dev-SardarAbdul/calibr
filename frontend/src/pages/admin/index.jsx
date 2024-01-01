import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

function AdminDashboard() {
  return (
    <div className="flex items-start justify-start h-screen overflow-hidden">
      <Sidebar />
      <div className="w-full h-full overflow-auto">
        <Navbar />
        <div className="p-4 lg:p-8">
          <Routes>
            <Route path="/home/hero" element={<h2>Admin</h2>} />
            <Route path="/products" element={<h2>products</h2>} />
            <Route path="/users" element={<h2>users</h2>} />
            <Route path="/messages" element={<h2>messages</h2>} />
            <Route path="/orders" element={<h2>orders</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
