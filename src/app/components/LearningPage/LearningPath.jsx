"use client";
import { useState } from "react";

const LearningPath = () => {
  const [activeModule, setActiveModule] = useState(2);

  const topics = {
    1: [
      "Introduction to Next.js",
      "Pages and Routing",
      "Static vs Dynamic Rendering",
      "Server-Side Rendering (SSR)",
      "Client-Side Rendering (CSR)",
      "File-based Routing",
    ],
    2: [
      "API Routes & Fetching Data",
      "getStaticProps vs getServerSideProps",
      "Middleware in Next.js",
      "Dynamic Routes & Catch-All Routes",
      "Image Optimization with Next/Image",
      "Styling in Next.js (CSS Modules, Tailwind)",
      "Authentication (NextAuth.js, JWT)",
    ],
    3: [
      "Middleware & Edge Functions",
      "Incremental Static Regeneration (ISR)",
      "State Management (Redux, Zustand, Context API)",
      "Performance Optimization in Next.js",
      "Deploying Next.js Apps (Vercel, Netlify)",
      "Building a Full-Stack App with Next.js",
    ],
  };

  return (
    <div className="container mx-auto p-6 mt-20">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        What You'll Learn
      </h2>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-6 mb-8">
        {[1, 2, 3].map((module) => (
          <button
            key={module}
            className={`px-6 py-3 text-lg font-semibold rounded-lg transition-transform duration-300 ${
              activeModule === module
                ? "bg-green-600 text-white shadow-lg scale-105"
                : "bg-gray-300 text-gray-800 hover:bg-green-500 hover:text-white"
            }`}
            onClick={() => setActiveModule(module)}
          >
            Module {module}
          </button>
        ))}
      </div>

      {/* Topics */}
      <div className="rounded-lg p-8 shadow-md bg-gray-100 h-[420px]">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Next.js Learning Path
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-lg font-medium text-gray-700">
          {topics[activeModule].map((topic, index) => (
            <li
              key={index}
              className="flex items-center gap-3 w-full bg-white p-4 rounded-lg shadow-md"
            >
              <span className="text-green-600 text-2xl">✔</span>
              <span className="w-full">{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LearningPath;
