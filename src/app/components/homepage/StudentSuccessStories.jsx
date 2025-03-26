"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const students = [
  {
    name: "Alice Johnson",
    course: "Full-Stack Web Development",
    feedback:
      "CoursePilot transformed my career! The AI-powered recommendations helped me pick the right path.",
    image: "/assats/stories/student1.jpg",
  },
  {
    name: "Mark Robinson",
    course: "Data Science & Machine Learning",
    feedback:
      "The hands-on projects and mentorship at CoursePilot were game changers for me!",
    image: "/assats/stories/student2.jpg",
  },
  {
    name: "Sophie Williams",
    course: "UI/UX Design",
    feedback:
      "I landed my dream job after completing the UI/UX course. CoursePilot made learning engaging!",
    image: "/assats/stories/student3.jpg",
  },
  {
    name: "David Brown",
    course: "Cybersecurity",
    feedback:
      "The interactive lessons and projects helped me gain real-world experience before landing a job.",
    image: "/assats/stories/student4.jpg",
  },
  {
    name: "Emma Watson",
    course: "Artificial Intelligence",
    feedback:
      "CoursePilot’s AI-powered recommendations helped me focus on the right learning path!",
    image: "/assats/stories/student5.jpg",
  },
];

export default function StudentSuccessStories() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1); // Default to 1 card for mobile

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile: Show 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet: Show 2 cards
      } else {
        setItemsPerPage(3); // Desktop: Show 3 cards
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index, itemsPerPage]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % (students.length - itemsPerPage + 1));
  };

  const prevSlide = () => {
    setIndex(
      (prev) =>
        (prev - 1 + students.length - itemsPerPage + 1) %
        (students.length - itemsPerPage + 1)
    );
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Student Success Stories
        </h2>
        <p className="max-w-2xl mx-auto mb-12">
          See how CoursePilot has helped students achieve their goals and land
          their dream careers!
        </p>

        {/* Slider Container */}
        <div className="relative mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-6"
              animate={{ x: `-${index * (100 / itemsPerPage)}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {students.map((student, i) => (
                <div
                  key={i}
                  className="min-w-full sm:min-w-1/2 md:min-w-1/3 dark:border rounded-2xl shadow-lg p-8 text-left flex flex-col items-center transition-all hover:shadow-xl"
                >
                  {/* Student Image */}
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={150}
                    height={150}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-blue-500 object-cover aspect-square shadow-lg"
                  />

                  {/* Student Details */}
                  <h4 className="text-lg sm:text-xl font-semibold  mt-4">
                    {student.name}
                  </h4>
                  <p className="text-sm sm:text-base text-blue-600 font-medium">
                    {student.course}
                  </p>
                  <p className="text-gray-400 mt-4 text-center italic text-sm sm:text-base">
                    "{student.feedback}"
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 p-3 rounded-full shadow-md hover:bg-gray-300 transition"
            onClick={prevSlide}
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 p-3 rounded-full shadow-md hover:bg-gray-300 transition"
            onClick={nextSlide}
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: students.length - itemsPerPage + 1 }).map(
            (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-blue-600 scale-110" : "bg-gray-300"
                }`}
                onClick={() => setIndex(i)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
