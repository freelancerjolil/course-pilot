// pages/CourseMarketplace.jsx
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';
import CourseCard from '../components/Course/CourseCard';
import Rating from '../components/ui/Rating';

const courses = [
  {
    id: 1,
    title: 'React for Beginners',
    category: 'Development',
    price: 'Free',
    lessons: 20,
    rating: 4.5,
    image: '/Images/platform/img.png', // Update with actual image path
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    category: 'Development',
    price: 'Free',
    lessons: 20,
    rating: 4.8,
    image: '/images/courses/web-dev.jpg', // Update with actual image path
  },
  // Add more courses here
];

export default function CourseMarketplace() {
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreSubjects, setShowMoreSubjects] = useState(false);

  return (
    <div className="container mx-auto p-4 mt-20 max-w-7xl">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">Showing 1-12 of 5 Results</div>
        <div className="flex items-center gap-4">
          {/* Sorting Dropdown */}
          <div className="relative w-44">
            <select className="border rounded-md px-3 py-1.5 pr-8 text-sm w-full appearance-none bg-white">
              <option>Latest</option>
              <option>Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
          {/* Search Box */}
          <div className="relative w-44">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md px-3 py-1.5 pr-8 text-sm w-full bg-white"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Courses Section */}
        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Sidebar Section (Optional: Categories/Filters) */}
        <div className="hidden md:block border p-4 rounded-lg bg-white shadow-sm">
          <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
          <ul className="text-sm text-gray-600">
            <li className="mb-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Web Development
              </label>
            </li>
            <li className="mb-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Finance & Accounting
              </label>
            </li>
            {showMoreCategories && (
              <>
                <li className="mb-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Graphic Design
                  </label>
                </li>
              </>
            )}
            <button
              onClick={() => setShowMoreCategories(!showMoreCategories)}
              className="text-teal-500 text-sm mt-2"
            >
              {showMoreCategories ? 'Show Less' : 'Show More'}
            </button>
          </ul>

          {/* Price */}
          <div className="border rounded-lg p-4 mt-4">
            <h3 className="font-medium text-lg mb-3">Price</h3>
            <RadioGroup defaultValue="all">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paid" id="price-paid" />
                <Label htmlFor="price-paid">Paid</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="price-free" />
                <Label htmlFor="price-free">Free</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Level */}
          <div className="border rounded-lg p-4 mt-4">
            <h3 className="font-medium text-lg mb-3">Level</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="level-beginner" />
                <Label htmlFor="level-beginner">Beginner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="level-intermediate" />
                <Label htmlFor="level-intermediate">Intermediate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="level-advanced" />
                <Label htmlFor="level-advanced">Advanced</Label>
              </div>
            </div>
          </div>

          {/* Ratings */}
          <div className="border rounded-lg p-4 mt-4">
            <h3 className="font-medium text-lg mb-3">Ratings</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`} className="flex">
                    <Rating value={rating} />
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
