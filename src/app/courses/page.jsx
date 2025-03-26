'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import CourseCard from '../components/Course/CourseCard';
import Loading from '../loading';

// Constants
const SORT_OPTIONS = [
  'Latest',
  'Top Rated',
  'Price: Low to High',
  'Price: High to Low',
];

const CATEGORIES = [
  'Data Science',
  'Web Development',
  'DevOps',
  'Finance & Accounting',
  'Artificial Intelligence',
];

const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];
const PRICE_OPTIONS = ['Free', 'Paid'];
const RATING_OPTIONS = ['4', '3', '2'];

// Main Component
export default function CourseMarketplace() {
  // State Management
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState(SORT_OPTIONS[0]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Data Fetching
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/courses');
        if (!res.ok) throw new Error('Failed to fetch courses');
        const data = await res.json();
        setCourses(data);
        setFilteredCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Filtering Logic
  useEffect(() => {
    const applyFilters = () => {
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
      if (selectedPriceRange) {
        filtered = filtered.filter((course) =>
          selectedPriceRange === 'Free' ? course.price === 0 : course.price > 0
        );
      }
      if (selectedRating) {
        filtered = filtered.filter(
          (course) => course.rating >= Number.parseFloat(selectedRating)
        );
      }

      setFilteredCourses(filtered);
    };

    applyFilters();
  }, [
    searchQuery,
    courses,
    selectedCategories,
    selectedLevel,
    selectedPriceRange,
    selectedRating,
  ]);

  // Sorting Logic
  const sortedCourses = useMemo(() => {
    const sortFunctions = {
      Latest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      'Top Rated': (a, b) => b.rating - a.rating,
      'Price: Low to High': (a, b) => a.price - b.price,
      'Price: High to Low': (a, b) => b.price - a.price,
    };
    return [...filteredCourses].sort(sortFunctions[sortOption] || (() => 0));
  }, [sortOption, filteredCourses]);

  // Reset Filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedLevel('');
    setSelectedPriceRange('');
    setSelectedRating('');
    setSearchQuery('');
    setSortOption(SORT_OPTIONS[0]);
  };

  // Render Components
  const FilterSidebar = () => (
    <div
      className={`md:w-64 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}
    >
      <div className="border p-4 rounded-lg bg-white shadow-sm">
        <FilterSection title="Categories">
          {CATEGORIES.slice(0, showMoreCategories ? undefined : 3).map(
            (category) => (
              <CheckboxFilter
                key={category}
                label={category}
                checked={selectedCategories.includes(category)}
                onChange={(checked) =>
                  setSelectedCategories((prev) =>
                    checked
                      ? [...prev, category]
                      : prev.filter((c) => c !== category)
                  )
                }
              />
            )
          )}
          <button
            onClick={() => setShowMoreCategories(!showMoreCategories)}
            className="text-teal-500 text-sm mt-2"
          >
            {showMoreCategories ? 'Show Less' : 'Show More'}
          </button>
        </FilterSection>

        <FilterSection title="Price">
          {PRICE_OPTIONS.map((price) => (
            <RadioFilter
              key={price}
              name="price"
              label={price}
              checked={selectedPriceRange === price}
              onChange={() => setSelectedPriceRange(price)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Difficulty Level">
          {LEVELS.map((level) => (
            <RadioFilter
              key={level}
              name="level"
              label={level}
              checked={selectedLevel === level}
              onChange={() => setSelectedLevel(level)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Ratings">
          {RATING_OPTIONS.map((rating) => (
            <RadioFilter
              key={rating}
              name="rating"
              label={`${rating} stars & above`}
              checked={selectedRating === rating}
              onChange={() => setSelectedRating(rating)}
            />
          ))}
        </FilterSection>

        <Button
          className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white"
          onClick={resetFilters}
        >
          Reset
        </Button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-20 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="text-sm text-gray-600">
          {loading ? <Loading /> : `Showing ${sortedCourses.length} results`}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <SelectFilter
            options={SORT_OPTIONS}
            value={sortOption}
            onChange={setSortOption}
          />
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
          <Button
            className="md:hidden w-full sm:w-auto"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            Filters
          </Button>
        </div>
      </div>

      {/* Error Display */}
      {error && <p className="text-red-500 text-center mb-6">{error}</p>}

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {loading ? (
            <Loading />
          ) : sortedCourses.length === 0 ? (
            <p className="text-center">No courses found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedCourses.map((course) => (
                <CourseCard key={course._id} {...course} />
              ))}
            </div>
          )}
        </div>
        <FilterSidebar />
      </div>
    </div>
  );
}

// Reusable Components
const FilterSection = ({ title, children }) => (
  <div className="border rounded-lg p-4 mb-4 last:mb-0">
    <h3 className="font-medium text-lg mb-3">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const CheckboxFilter = ({ label, checked, onChange }) => (
  <label className="flex items-center text-sm text-gray-600">
    <input
      type="checkbox"
      className="mr-2"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    {label}
  </label>
);

const RadioFilter = ({ name, label, checked, onChange }) => (
  <label className="flex items-center text-sm text-gray-600">
    <input
      type="radio"
      name={name}
      className="mr-2"
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);

const SelectFilter = ({ options, value, onChange }) => (
  <div className="relative w-full sm:w-44">
    <select
      className="border rounded-md px-3 py-1.5 pr-8 text-sm w-full appearance-none bg-white focus:ring-teal-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
  </div>
);

const SearchInput = ({ value, onChange }) => (
  <div className="relative w-full sm:w-44">
    <input
      type="text"
      placeholder="Search courses"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-md px-3 py-1.5 pr-8 text-sm w-full bg-white focus:ring-teal-500"
    />
    <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
  </div>
);
