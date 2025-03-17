"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTachometerAlt, FaUsers, FaBook, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Sidebar = ({ isOpen, isCollapsed, toggleSidebar }) => {
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  const menuItems = [
    { name: "Dashboard", path: "/teacher-dashbord", icon: <FaTachometerAlt /> },
    { name: "MyCourses", path: "/teacher-dashbord/my-courses", icon: <FaUsers /> },
    { name: "MyStudents", path: "/teacher-dashbord/my-students", icon: <FaBook /> },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      className={`bg-gray-900 text-white h-screen fixed transition-all duration-300 ${
        windowWidth >= 1024
          ? isCollapsed
            ? "w-24"
            : "w-64"
          : isOpen
          ? "w-64 z-50"
          : "w-0"
      } ${isOpen && windowWidth < 1024 ? "absolute inset-0" : "z-40"}`}
    >
      <div className="p-6 text-xl font-bold flex justify-between items-center overflow-hidden">
        {windowWidth >= 1024 ? (isCollapsed ? "" : "CoursePilot") : isOpen ? "CoursePilot" : ""}
        {isOpen && windowWidth < 1024 && (
          <button onClick={toggleSidebar}>
            <FaTimes />
          </button>
        )}
      </div>

      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 p-3 hover:bg-gray-700 ${
              pathname === item.path && (isOpen || windowWidth >= 1024)
                ? "bg-blue-600"
                : ""
            }`}
          >
            {item.icon}
            {windowWidth >= 1024
              ? isCollapsed
                ? ""
                : <span>{item.name}</span>
              : isOpen
                ? <span>{item.name}</span>
                : ""}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;