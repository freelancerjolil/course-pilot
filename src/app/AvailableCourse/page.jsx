"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AvailableCourse() {
  const courses = [
    {
      title: "Next.js Mastery",
      level: "Advanced",
      duration: "8 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Full-Stack Next.js",
      level: "Intermediate",
      duration: "6 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Next.js for Beginners",
      level: "Beginner",
      duration: "4 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Next.js Performance Optimization",
      level: "Advanced",
      duration: "5 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Building APIs with Next.js",
      level: "Intermediate",
      duration: "7 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Next.js & Tailwind CSS",
      level: "Beginner",
      duration: "3 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
  ];
  // user from nextauth
  const { data: session, status } = useSession();
  console.log(session?.user?.name);
  console.log(session?.user);
  // GSAP animation for staggered fade-in effect
  const courseRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      courseRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);
  // handle all button here
  const handleEnroll = () => {
    alert(`function will be implement soon`);
  };
  return (
    <div className="container mx-auto px-2 min-h-screen pt-16">
      {/* Heading with Animation */}
      <motion.h1
        className="text-xl md:text-4xl font-extrabold text-center mb-10 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore a World of Courses
      </motion.h1>
      <motion.p
        className="text-xl text-center mb-8 leading-relaxed w-full md:w-10/12 mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Dive into our curated collection of courses that cover everything from
        programming and web development to AI and creative design. Whether
        you're a beginner or an expert, CoursePilot AI offers a personalized
        learning experience to help you grow your skills and achieve your goals.
        Start your learning journey today!
      </motion.p>

      {/* Course Grid */}
      <div
        ref={courseRef}
        className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"
      >
        {courses.map((course, index) => (
          <div key={index}>
            {/* Card */}
            <div className="shadow-md p-2 h-96 overflow-hidden in-dark:border-2 rounded-lg transition duration-300 hover:scale-105 not-dark:hover:shadow-gray-500">
              {/* Card Content */}
              <div className="flex flex-col h-full">
                {/* Course Image */}
                <div className="relative w-full h-[400px]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>

                {/* Course Details */}
                <h2 className="text-xl font-semibold mt-4">{course.title}</h2>
                <p className="">{course.level}</p>
                <p className="">Duration: {course.duration}</p>

                {/* Enroll Button */}
                <div className="mt-auto">
                  <Button
                    variant="secondary"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded text-sm transition-colors cursor-pointer"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
