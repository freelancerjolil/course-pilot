'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ChevronDown, Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import CourseCard from '../components/Course/CourseCard';
import Loading from '../loading';

export default function CourseMarketplace() {
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('Latest');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:3000/api/courses'); // Adjust URL in production
        if (!res.ok) throw new Error('Failed to fetch courses');
        const data = await res.json();
        setCourses(data);
        setFilteredCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    let filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((course) =>
        selectedCategories.includes(course.category)
      );
    }
    if (selectedLevel) {
      filtered = filtered.filter((course) => course.level === selectedLevel);
    }
    if (selectedPriceRange === 'Free') {
      filtered = filtered.filter((course) => course.price === 0);
    } else if (selectedPriceRange === 'Paid') {
      filtered = filtered.filter((course) => course.price > 0);
    }
    if (selectedRating) {
      filtered = filtered.filter(
        (course) => course.rating >= parseFloat(selectedRating)
      );
    }

    setFilteredCourses(filtered);
  }, [
    searchQuery,
    courses,
    selectedCategories,
    selectedLevel,
    selectedPriceRange,
    selectedRating,
  ]);

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedLevel('');
    setSelectedPriceRange('');
    setSelectedRating('');
    setSearchQuery('');
    setSortOption('Latest');
  };

  const sortedCourses = useMemo(() => {
    return [...filteredCourses].sort((a, b) => {
      if (sortOption === 'Latest')
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortOption === 'Top Rated') return b.rating - a.rating;
      if (sortOption === 'Price: Low to High') return a.price - b.price;
      if (sortOption === 'Price: High to Low') return b.price - a.price;
      return 0;
    });
  }, [sortOption, filteredCourses]);

  return (
    <div className="container mx-auto p-4 mt-20 max-w-7xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="text-sm text-gray-600 mb-4 md:mb-0">
          {loading ? (
            <Loading></Loading>
          ) : (
            `Showing ${sortedCourses.length} results`
          )}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          {/* Sorting Dropdown */}
          <div className="relative w-full md:w-44 mb-4 md:mb-0">
            <select
              className="border rounded-md px-3 py-1.5 pr-8 text-sm w-full appearance-none bg-white focus:ring-teal-500"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option>Latest</option>
              <option>Top Rated</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
          {/* Search Box */}
          <div className="relative w-full md:w-44">
            <input
              type="text"
              placeholder="Search courses"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-md px-3 py-1.5 pr-8 text-sm w-full bg-white focus:ring-teal-500"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Main Layout: Course Cards and Sidebar */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Course Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            <Loading />
          ) : sortedCourses.length === 0 ? (
            <p className="text-center col-span-3">No courses found</p>
          ) : (
            sortedCourses.map((course) => (
              <CourseCard
                key={course._id}
                title={course.title}
                category={course.category}
                price={course.price}
                lessons={course.lessons}
                rating={course.rating}
                image={course.image} // Ensure API provides an image URL
              />
            ))
          )}
        </div>

        {/* Sidebar Section (Optional: Categories/Filters) */}
        <div className="hidden md:block md:w-64">
          <div className="border p-4 rounded-lg bg-white shadow-sm">
            {/* Categories */}
            <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
            <ul className="text-sm text-gray-600">
              <li className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={(e) =>
                      setSelectedCategories((prev) =>
                        e.target.checked
                          ? [...prev, 'Data Science']
                          : prev.filter(
                              (category) => category !== 'Data Science'
                            )
                      )
                    }
                  />
                  Data Science
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={(e) =>
                      setSelectedCategories((prev) =>
                        e.target.checked
                          ? [...prev, 'Web Development']
                          : prev.filter(
                              (category) => category !== 'Web Development'
                            )
                      )
                    }
                  />
                  Web Development
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={(e) =>
                      setSelectedCategories((prev) =>
                        e.target.checked
                          ? [...prev, 'DevOps']
                          : prev.filter((category) => category !== 'DevOps')
                      )
                    }
                  />
                  DevOps
                </label>
              </li>
              {showMoreCategories && (
                <>
                  <li className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onChange={(e) =>
                          setSelectedCategories((prev) =>
                            e.target.checked
                              ? [...prev, 'Finance & Accounting']
                              : prev.filter(
                                  (category) =>
                                    category !== 'Finance & Accounting'
                                )
                          )
                        }
                      />
                      Finance & Accounting
                    </label>
                  </li>
                  <li className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onChange={(e) =>
                          setSelectedCategories((prev) =>
                            e.target.checked
                              ? [...prev, 'Artificial Intelligence']
                              : prev.filter(
                                  (category) =>
                                    category !== 'Artificial Intelligence'
                                )
                          )
                        }
                      />
                      AI & Deep Learning Fundamentals
                    </label>
                  </li>
                </>
              )}
            </ul>
            <button
              onClick={() => setShowMoreCategories(!showMoreCategories)}
              className="text-teal-500 text-sm mt-2"
            >
              {showMoreCategories ? 'Show Less' : 'Show More'}
            </button>

            {/* Price */}
            <div className="border rounded-lg p-4 mt-4">
              <h3 className="font-medium text-lg mb-3">Price</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={(e) =>
                        setSelectedPriceRange(e.target.checked ? 'Paid' : '')
                      }
                    />
                    Paid
                  </label>
                </div>
                <div className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={(e) =>
                        setSelectedPriceRange(e.target.checked ? 'Free' : '')
                      }
                    />
                    Free
                  </label>
                </div>
              </div>
            </div>

            {/* Level */}
            <div className="border rounded-lg p-4 mt-4">
              <h3 className="font-medium text-lg mb-3">Difficulty Level</h3>
              {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <div className="mb-2" key={level}>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="level"
                      value={level}
                      checked={selectedLevel === level}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="mr-2"
                    />
                    {level}
                  </label>
                </div>
              ))}
            </div>

            {/* Ratings */}
            <div className="border rounded-lg p-4 mt-4">
              <h3 className="font-medium text-lg mb-3">Ratings</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="rating"
                    value="4"
                    onChange={(e) => setSelectedRating(e.target.value)}
                    id="rating-4"
                  />
                  <Label htmlFor="rating-4">4 stars & above</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="rating"
                    value="3"
                    onChange={(e) => setSelectedRating(e.target.value)}
                    id="rating-3"
                  />
                  <Label htmlFor="rating-3">3 stars & above</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="rating"
                    value="2"
                    onChange={(e) => setSelectedRating(e.target.value)}
                    id="rating-2"
                  />
                  <Label htmlFor="rating-2">2 stars & above</Label>
                </div>
              </div>
            </div>
            <Button
              className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white"
              onClick={resetFilters}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
