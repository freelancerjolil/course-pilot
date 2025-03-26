"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const Mentor = () => {
  return (
    <div className="bg-[#08261c] my-20">
      {/* Updated background color */}
      <div className="container mx-auto py-12">
        <div className="text-center my-8">
          <h5 className="text-2xl font-bold mb-5 text-white">
            Best Teacher of this Season
          </h5>
          <h2 className="text-lg w-3/4 mx-auto text-white">
            The cost of obtaining higher education in the United States has
            significantly increased over the years. To help ease the burden and
            ensure your success, we are here to offer mentorship and guidance
            every step of the way.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 my-12">
          {/* Left Side Content */}
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-200 mb-6 leading-tight">
              Join Our Mentorship Program
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Enhance your skills with expert guidance. Learn, grow, and achieve
              your goals with our experienced mentors. Our structured mentorship
              program ensures personalized learning, career growth, and hands-on
              experience in a collaborative environment.
            </p>
            <button className="mt-3 bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
              Enrol Now
            </button>
          </div>

          {/* Right Side Swiper */}
          <div className="md:w-1/2 max-w-md">
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[EffectCube, Pagination, Autoplay]}
              className="mySwiper rounded-lg shadow-lg"
            >
              <SwiperSlide>
                <div className="flex flex-col items-center text-center p-4 bg-emerald-600 rounded-lg shadow-md">
                  <img
                    src="https://i.ibb.co/zHRJ71nt/images-8.jpg"
                    className="w-48 h-48 rounded-lg mb-4 border-4 border-emerald-600"
                    alt="mentor"
                  />
                  <h1 className="text-lg font-bold text-white">Inspector</h1>
                  <h4 className="text-gray-100">Mark Wood</h4>
                  <h4 className="text-green-300 font-semibold">
                    Next.js Developer
                  </h4>
                  <h4 className="text-gray-200">Dhaka University</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center p-4 bg-emerald-600 rounded-lg shadow-md">
                  <img
                    src="https://i.ibb.co.com/VWMHMF5J/download-4.jpg"
                    className="w-48 h-48 rounded-lg mb-4 border-4 border-emerald-600"
                    alt="mentor"
                  />
                  <h1 className="text-lg font-bold text-white">
                    Software Engineer
                  </h1>
                  <h4 className="text-gray-100">James Smith</h4>
                  <h4 className="text-green-300 font-semibold">
                    React Developer
                  </h4>
                  <h4 className="text-gray-200">Tech University</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center p-4 bg-emerald-600 rounded-lg shadow-md">
                  <img
                    src="https://i.ibb.co.com/Hf2FdW9Y/download-8.jpg"
                    className="w-48 h-48 rounded-lg mb-4 border-4 border-emerald-600"
                    alt="mentor"
                  />
                  <h1 className="text-lg font-bold text-white">
                    Data Scientist
                  </h1>
                  <h4 className="text-gray-100">David Johnson</h4>
                  <h4 className="text-green-300 font-semibold">
                    Machine Learning Expert
                  </h4>
                  <h4 className="text-gray-200">AI Research Lab</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center p-4 bg-emerald-600 rounded-lg shadow-md">
                  <img
                    src="https://i.ibb.co.com/4w3gMrTd/download-7.jpg"
                    className="w-48 h-48 rounded-lg mb-4 border-4 border-emerald-600"
                    alt="mentor"
                  />
                  <h1 className="text-lg font-bold text-white">
                    Cloud Architect
                  </h1>
                  <h4 className="text-gray-100">Michael Lee</h4>
                  <h4 className="text-green-300 font-semibold">
                    AWS & DevOps Engineer
                  </h4>
                  <h4 className="text-gray-200">Cloud Tech Academy</h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
