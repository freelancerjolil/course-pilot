"use client";

import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

const Instructor = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="container mx-auto my-20">
      <div className="flex justify-between items-center gap-6 mb-12">
        <h1 className="text-3xl font-bold">Our All Instructor</h1>
        <h4 className="text-lg">Showing {showAll ? 8 : 6} Of 8 Results</h4>
      </div>

      {/* First 6 Instructors */}
      <div className="flex flex-wrap gap-6 mb-8">
        {/* Instructor 1 */}
        <div className="bg-white shadow-md border-2 rounded-lg p-5 flex items-center hover:-translate-y-4 hover:shadow-lg transition-all duration-300 gap-6 w-full md:w-[calc(50%-12px)]">
          <img
            src="https://i.ibb.co/zHRJ71nt/images-8.jpg"
            alt="Instructor"
            className="w-48 h-48 rounded-lg  transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="flex flex-1 justify-between items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ayaan Ahmed</h3>
              <p className="text-gray-500">Web Development</p>
              <button className="mt-3 bg-emerald-600 text-white px-5 py-2 rounded-md hover:bg-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                Details
              </button>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 text-emerald-500 text-lg">
              <FaFacebook className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaTwitter className="group relative flex items-center justify-center  w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaLinkedin className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaInstagram className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
            </div>
          </div>
        </div>

        {/* Instructor 2 */}
        <div className="bg-white shadow-md border-2 rounded-lg p-5 flex items-center hover:-translate-y-4 hover:shadow-lg transition-all duration-300 gap-6 w-full md:w-[calc(50%-12px)]">
          <img
            src="https://i.ibb.co.com/VWMHMF5J/download-4.jpg"
            alt="Instructor"
            className="w-48 h-48 rounded-lg  transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="flex flex-1 justify-between items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Rifat Hasan</h3>
              <p className="text-gray-500">Web Design</p>
              <button className="mt-3 bg-emerald-600 text-white px-5 py-2 rounded-md hover:bg-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                Details
              </button>
            </div>
            <div className="flex lg:flex-row flex-col  gap-4 text-emerald-500 text-lg">
              <FaFacebook className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaTwitter className="group relative flex items-center justify-center  w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaLinkedin className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaInstagram className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
            </div>
          </div>
        </div>

        {/* Instructor 3 */}
        <div className="bg-white shadow-md border-2 rounded-lg p-5 flex items-center hover:-translate-y-4 hover:shadow-lg transition-all duration-300 gap-6 w-full md:w-[calc(50%-12px)]">
          <img
            src="https://i.ibb.co.com/4ZSfBHMX/download-2.jpg"
            alt="Instructor"
            className="w-48 h-48 rounded-lg object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="flex flex-1 justify-between items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Arif Rahman</h3>
              <p className="text-gray-500">Flutter</p>
              <button className="mt-3 bg-emerald-600 text-white px-5 py-2 rounded-md hover:bg-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                Details
              </button>
            </div>
            <div className="flex lg:flex-row flex-col  gap-4 text-emerald-500 text-lg">
              <FaFacebook className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaTwitter className="group relative flex items-center justify-center  w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaLinkedin className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaInstagram className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
            </div>
          </div>
        </div>

        {/* Instructor 4 */}
        <div className="bg-white shadow-md border-2 rounded-lg p-5 flex items-center hover:-translate-y-4 hover:shadow-lg transition-all duration-300 gap-6 w-full md:w-[calc(50%-12px)]">
          <img
            src="https://i.ibb.co.com/Z6G2kDS5/images-13.jpg"
            alt="Instructor"
            className="w-48 h-48 rounded-lg object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="flex flex-1 justify-between items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Imran Khan</h3>
              <p className="text-gray-500">Web Development</p>
              <button className="mt-3 bg-emerald-600 text-white px-5 py-2 rounded-md hover:bg-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                Details
              </button>
            </div>
            <div className="flex lg:flex-row flex-col  gap-4 text-emerald-500 text-lg">
              <FaFacebook className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaTwitter className="group relative flex items-center justify-center  w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaLinkedin className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaInstagram className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
            </div>
          </div>
        </div>

        {/* Instructor 5 */}
        <div className="bg-white shadow-md border-2 rounded-lg p-5 flex items-center hover:-translate-y-4 hover:shadow-lg transition-all duration-300 gap-6 w-full md:w-[calc(50%-12px)]">
          <img
            src="https://i.ibb.co.com/4w3gMrTd/download-7.jpg"
            alt="Instructor"
            className="w-48 h-48 rounded-lg object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="flex flex-1 justify-between items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Saira Khatun</h3>
              <p className="text-gray-500">Web Development</p>
              <button className="mt-3 bg-emerald-600 text-white px-5 py-2 rounded-md hover:bg-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                Details
              </button>
            </div>
            <div className="flex lg:flex-row flex-col  gap-4 text-emerald-500 text-lg">
              <FaFacebook className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaTwitter className="group relative flex items-center justify-center  w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaLinkedin className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaInstagram className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
            </div>
          </div>
        </div>

        {/* Instructor 6 */}
        <div className="bg-white shadow-md border-2 rounded-lg p-5 flex items-center hover:-translate-y-4 hover:shadow-lg transition-all duration-300 gap-6 w-full md:w-[calc(50%-12px)]">
          <img
            src="https://i.ibb.co.com/Hf2FdW9Y/download-8.jpg"
            alt="Instructor"
            className="w-48 h-48 rounded-lg object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="flex flex-1 justify-between items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Rania Khatun</h3>
              <p className="text-gray-500">Web Design</p>
              <button className="mt-3 bg-emerald-600 text-white px-5 py-2 rounded-md hover:bg-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                Details
              </button>
            </div>
            <div className="flex lg:flex-row flex-col  gap-4 text-emerald-500 text-lg">
              <FaFacebook className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaTwitter className="group relative flex items-center justify-center  w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaLinkedin className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
              <FaInstagram className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
            </div>
          </div>
        </div>

        {/* Additional Instructors (Visible when showAll is true) */}
        {showAll && (
          <>
            {/* Instructor 7 */}
            <div className="bg-white shadow-md border-2 rounded-lg p-5 flex items-center hover:-translate-y-4 hover:shadow-lg transition-all duration-300 gap-6 w-full md:w-[calc(50%-12px)]">
              <img
                src="https://i.ibb.co.com/3yn4xmqx/download-6.jpg"
                alt="Instructor"
                className="w-48 h-48 rounded-lg object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="flex flex-1 justify-between items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Tanveer Alam</h3>
                  <p className="text-gray-500">Flutter</p>
                  <button className="mt-3 bg-emerald-600 text-white px-5 py-2 rounded-md hover:bg-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    Details
                  </button>
                </div>
                <div className="flex lg:flex-row flex-col  gap-4 text-emerald-500 text-lg">
                  <FaFacebook className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
                  <FaTwitter className="group relative flex items-center justify-center  w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
                  <FaLinkedin className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
                  <FaInstagram className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
                </div>
              </div>
            </div>

            {/* Instructor 8 */}
            <div className="bg-white shadow-md border-2 rounded-lg p-5 flex items-center hover:-translate-y-4 hover:shadow-lg transition-all duration-300 gap-6 w-full md:w-[calc(50%-12px)]">
              <img
                src="https://i.ibb.co.com/hxJfrD5Q/images-12.jpg"
                alt="Instructor"
                className="w-48 h-48 rounded-lg object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="flex flex-1 justify-between items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Nabil Hossain</h3>
                  <p className="text-gray-500">Web Design</p>
                  <button className="mt-3 bg-emerald-600 text-white px-5 py-2 rounded-md hover:bg-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    Details
                  </button>
                </div>
                <div className="flex lg:flex-row flex-col  gap-4 text-emerald-500 text-lg">
                  <FaFacebook className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
                  <FaTwitter className="group relative flex items-center justify-center  w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
                  <FaLinkedin className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
                  <FaInstagram className="group relative flex items-center justify-center w-8 h-8 text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* See More Button */}
      <div className="text-center">
        <button
          onClick={toggleShowAll}
          className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        >
          {showAll ? (
            <>
              Show Less <FaChevronUp className="inline ml-2" />
            </>
          ) : (
            <>
              See More <FaChevronDown className="inline ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Instructor;
