"use client";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

const UpcomingExamsPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-700">Upcoming Assessments</h1>

      {/* Upcoming Exams Details */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-4 mb-4">
          <FaCalendarAlt className="text-2xl text-purple-500" />
          <h2 className="text-xl font-semibold text-gray-700">
            Your Upcoming Assessments
          </h2>
        </div>
        <p className="text-gray-600 mb-4">
          Here are your upcoming assessments including quizzes, assignments, and
          projects. Be sure to review the dates and prepare well!
        </p>

        {/* Example of upcoming quizzes and assignments */}
        <div className="space-y-4">
          {/* Quiz */}
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
            <div className="text-gray-700 font-semibold">
              Quiz: Data Structures
            </div>
            <div className="text-gray-500">March 30, 2025</div>
          </div>

          {/* Assignment */}
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
            <div className="text-gray-700 font-semibold">
              Assignment: Algorithms
            </div>
            <div className="text-gray-500">April 2, 2025</div>
          </div>

          {/* Project */}
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
            <div className="text-gray-700 font-semibold">
              Project: Web Development
            </div>
            <div className="text-gray-500">April 5, 2025</div>
          </div>

          {/* Additional Assignments/Quizzes */}
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
            <div className="text-gray-700 font-semibold">
              Quiz: Database Management
            </div>
            <div className="text-gray-500">April 10, 2025</div>
          </div>
        </div>

        {/* Button to navigate back */}
        <div className="mt-6 text-center">
          <Link href="/exam">
            <button className="text-white bg-purple-500 hover:bg-purple-600 py-2 px-4 rounded-md">
              Back to Exam Section
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingExamsPage;
