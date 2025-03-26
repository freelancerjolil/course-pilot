"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

// Sample team members data
const teamMembers = [
  {
    name: "Janifar Masnoon",
    role: "Assistant Lecturer",
    image: "https://i.ibb.co/zHRJ71nt/images-8.jpg",
  },
  {
    name: "Ahab Rahman",
    role: "Assistant Lecturer",
    image: "https://i.ibb.co.com/VWMHMF5J/download-4.jpg",
  },
  {
    name: "Amelia Margaret",
    role: "CEO",
    image: "https://i.ibb.co.com/4ZSfBHMX/download-2.jpg",
  },
  {
    name: "Abdul Mannan Zinnat",
    role: "DevOps & Project Management Expert",
    image: "https://i.ibb.co.com/Z6G2kDS5/images-13.jpg",
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "https://i.ibb.co.com/4w3gMrTd/download-7.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "https://i.ibb.co.com/Hf2FdW9Y/download-8.jpg",
  },
  {
    name: "Michael Smith",
    role: "Product Manager",
    image: "https://i.ibb.co.com/3yn4xmqx/download-6.jpg",
  },
  {
    name: "Emma Brown",
    role: "Marketing Specialist",
    image: "https://i.ibb.co.com/hxJfrD5Q/images-12.jpg",
  },
];

const Teacher = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentItems = teamMembers.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className="bg-[#08261c] py-12">
      <div className="container mx-auto">
        <div className="text-center my-6">
          <h5 className="text-2xl font-bold mb-5 text-white">
            Popular Instructors
          </h5>
          <h2 className="text-lg w-3/4 mx-auto text-white">
            The cost of receiving higher education in the United States has
            skyrocketed. We are here to offer mentorship to help you succeed.
          </h2>
        </div>
        <div className="py-16">
          <div className="">
            <div className="flex flex-wrap justify-center gap-6">
              {currentItems.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center w-[340px] transition-all duration-300 ease-out hover:-translate-y-4 hover:bg-emerald-600 group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 transition-transform duration-300 ease-out hover:scale-105"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 transition-colors duration-300 ease-out group-hover:text-white">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-400 transition-colors"
                aria-label="Previous"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-400 transition-colors"
                aria-label="Next"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
