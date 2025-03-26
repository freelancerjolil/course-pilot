"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar"; // Make sure to import Sidebar correctly

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Initially, the sidebar is closed

  return (
    <div className="flex h-screen container mx-auto bg-gray-100">
      {/* Sidebar Component */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main className="flex-1 p-2 md:p-6">
        {/* Toggle Sidebar Button */}
        <FaBars
          className="text-2xl cursor-pointer md:hidden"
          onClick={() => setIsSidebarOpen(true)} // Open sidebar
        />
        {/* Content */}
        {children}
      </main>
    </div>
  );
}
