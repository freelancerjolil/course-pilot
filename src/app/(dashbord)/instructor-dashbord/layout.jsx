"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "@/app/components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined); // Initialize to undefined

  const toggleSidebar = () => {
    if (windowWidth >= 1024) {
      setIsCollapsed(!isCollapsed);
    } else {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Initial call

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) {
      setIsSidebarOpen(false);
      setIsCollapsed(false);
    } else {
      setIsCollapsed(false);
    }
  }, [windowWidth]);

  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isCollapsed}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`w-full ${
          windowWidth >= 1024 ? (isCollapsed ? "lg:ml-24" : "lg:ml-64") : "ml-0" // Simplified for mobile
        } transition-all duration-300`}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
