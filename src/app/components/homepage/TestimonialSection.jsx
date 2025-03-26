"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Natasha Hope",
    text: "We're loving it. Course Pilot is both perfect and highly adaptable.",
    image: "/Images/platform/img7.png?height=400&width=400",
  },
  {
    id: 2,
    name: "John Smith",
    text: "The platform has transformed how we deliver our courses. Highly recommended!",
    image: "/Images/platform/img6.png?height=400&width=400",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    text: "Course Pilot has made our teaching process so much more efficient and engaging.",
    image: "/Images/img2.png?height=400&width=400",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Testimonial</h2>
        <p className="text-slate-500">
          We value our students and whatever they say about us, is our
          achievement.
        </p>
      </div>

      <div className="rounded-lg border border-gray-100 shadow-md p-8 relative">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="rounded-full border-8 border-[#b8e6da] w-[180px] h-[180px] overflow-hidden">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={180}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="text-[#7fcfb6] mb-4">
              <svg
                width="80"
                height="60"
                viewBox="0 0 80 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0C9 0 0 9 0 20C0 31 9 40 20 40C20 40 18 60 0 60H30C30 60 40 40 40 20C40 9 31 0 20 0Z M70 0C59 0 50 9 50 20C50 31 59 40 70 40C70 40 68 60 50 60H80C80 60 90 40 90 20C90 9 81 0 70 0Z"
                  fill="#7fcfb6"
                />
              </svg>
            </div>
            <p className="text-lg text-[#767676] mb-4 text-center md:text-left">
              {testimonials[currentIndex].text}
            </p>
            <h3 className="text-lg font-medium text-[#727272]">
              {testimonials[currentIndex].name}
            </h3>
          </div>
        </div>

        <div className="absolute top-8 right-8 flex gap-2">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#7fcfb6] text-white flex items-center justify-center hover:bg-[#6ab9a2] transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-[#7fcfb6]" : "w-4 bg-gray-200"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
