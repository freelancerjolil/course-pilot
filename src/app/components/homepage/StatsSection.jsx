'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaBookOpen, FaShoppingCart, FaSmile, FaUsers } from 'react-icons/fa';

const StatsSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#08261c] py-24 my-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {/* Total Course */}
          <div
            className="flex flex-col lg:flex-row gap-4 items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaBookOpen className="text-emerald-600 text-7xl" />
            <div className="flex flex-col gap-2">
              <p className="text-white text-xl">Total Course</p>
              <h3 className="text-white text-4xl font-bold">22 +</h3>
            </div>
          </div>

          {/* Instructors */}
          <div
            className="flex flex-col lg:flex-row gap-4 justify-center items-center space-y-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaUsers className="text-emerald-500 text-7xl" />
            <div className="flex flex-col gap-2">
              <p className="text-white text-xl font-semibold">Instructors</p>
              <h3 className="text-white text-4xl font-bold">10 +</h3>
            </div>
          </div>

          {/* Learners */}
          <div
            className="flex flex-col lg:flex-row gap-4 justify-center items-center space-y-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaShoppingCart className="text-emerald-500 text-7xl" />
            <div className="flex flex-col gap-2">
              <p className="text-white text-xl font-semibold">Total Learners</p>
              <h3 className="text-white text-4xl font-bold">800 +</h3>
            </div>
          </div>

          {/* Satisfied */}
          <div
            className="flex flex-col lg:flex-row gap-4 justify-center items-center space-y-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaSmile className="text-emerald-500 text-7xl" />
            <div className="flex flex-col gap-2">
              <p className="text-white text-xl font-semibold">
                Satisfied Learners
              </p>
              <h3 className="text-white text-4xl font-bold">98.7 %</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
