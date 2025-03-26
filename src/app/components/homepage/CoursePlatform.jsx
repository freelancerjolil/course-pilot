'use client';

import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function CoursePlatform() {
  const [activeTab, setActiveTab] = useState('All Courses');

  const tabs = [
    'All Courses',
    'Data Science',
    'Web Development',
    'Finance & Accounting',
    'DevOps',
    'Artificial Intelligence',
  ];

  const courses = [
    {
      id: 1,
      title: 'Full Practice Exam included + explanation...',
      category: 'Web Development',
      image: '/Images/platform/img.png?height=250&width=400',
      backgroundColor: '#e57373',
      rating: 4.0,
      lessons: 8,
      enrollments: 1,
      price: 12.0,
    },
    {
      id: 2,
      title: 'Javascript for Beginners',
      category: 'Web Development',
      image: '/Images/platform/img1.webp?height=250&width=400',
      backgroundColor: '#ffffff',
      rating: 2.5,
      lessons: 9,
      enrollments: 1,
      price: 55.0,
    },
    {
      id: 3,
      title: 'Advance DevOps Engineering',
      category: 'Web Development',
      image: '/Images/platform/img2.png?height=250&width=400',
      backgroundColor: '#2962ff',
      rating: 5.0,
      lessons: 15,
      enrollments: 1,
      price: 30.0,
    },
    {
      id: 4,
      title: '.Net Expert',
      category: 'Web Development',
      image: '/Images/platform/img3.jpg?height=250&width=400',
      backgroundColor: '#ffffff',
      rating: 0,
      lessons: 0,
      enrollments: 0,
      price: 0,
      isFree: true,
    },
    {
      id: 5,
      title: '.Node Js',
      category: 'Web Development',
      image: '/Images/platform/img4.png?height=250&width=400',
      backgroundColor: '#ffffff',
      rating: 0,
      lessons: 3,
      enrollments: 0,
      price: 10.0,
    },
    {
      id: 6,
      title: 'Subaccount Labelling - RCP',
      category: 'Finance & Accounting',
      image: '/Images/platform/img5.png?height=250&width=400',
      backgroundColor: '#e0f7fa',
      rating: 0,
      lessons: 0,
      enrollments: 0,
      price: 0,
      isFree: true,
    },
  ];

  const filteredCourses =
    activeTab === 'All Courses'
      ? courses
      : courses.filter((course) => course.category === activeTab);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Our Top Courses</h1>
        <p className="text-slate-400">
          We make learning convenient, affordable, and fun!
        </p>
      </div>

      {/* Tabs (Scrollable on Small Screens) */}
      <div className="flex overflow-x-auto space-x-2 border-b pb-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === tab
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="border rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 p-2"
          >
            <div className="relative">
              <div className="absolute top-3 left-3 z-10 bg-emerald-500 text-white text-xs px-2 py-1 rounded">
                {course.category}
              </div>
              <div
                className="h-62 relative"
                style={{ backgroundColor: course.backgroundColor }}
              >
                <Image
                  src={course.image || '/placeholder.svg'}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              {course.rating > 0 && (
                <div className="absolute bottom-3 right-3 bg-white rounded-full px-2 py-1 flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">
                    {course.rating.toFixed(2)}
                  </span>
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-medium  mb-3">{course.title}</h3>

              <div className="flex justify-between text-sm text-gray-500 mb-4">
                {course.lessons > 0 && (
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>{course.lessons} Lessons</span>
                  </div>
                )}
                {course.enrollments > 0 && (
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>{course.enrollments} Enroll</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center">
                <div className="font-medium text-emerald-600">
                  {course.isFree ? 'Free' : `$${course.price.toFixed(2)}`}
                </div>
                <Button
                  variant="secondary"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded text-sm transition-colors cursor-pointer"
                >
                  Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
