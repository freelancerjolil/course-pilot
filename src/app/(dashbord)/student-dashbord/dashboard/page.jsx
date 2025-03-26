"use client";
import { useAuth } from "@/context/AuthContext";
import { FaChartPie, FaUserFriends } from "react-icons/fa";

const StudentDashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="bg-purple-500 text-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">
            WELCOME BACK! <span>{user?.name}</span>
          </h3>
          <p>You have completed 60% of your goal this week!</p>
          <button className="mt-3 bg-white text-purple-600 px-4 py-2 rounded-md">
            Learn More
          </button>
        </div>
      </div>
      {/* Statistics - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-4">
          <FaChartPie className="text-purple-600 text-3xl" />
          <div>
            <p className="text-lg font-semibold">85</p>
            <p className="text-sm text-gray-500">Project Frog Surgery</p>
          </div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-4">
          <FaChartPie className="text-red-600 text-3xl" />
          <div>
            <p className="text-lg font-semibold">60</p>
            <p className="text-sm text-gray-500">Project Earth Quantum</p>
          </div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-4">
          <FaUserFriends className="text-blue-600 text-3xl" />
          <div>
            <p className="text-lg font-semibold">20</p>
            <p className="text-sm text-gray-500">Active Students</p>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default StudentDashboard;
