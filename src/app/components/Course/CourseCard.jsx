import { Button } from '@/components/ui/button'; // Adjust if using shadcn or custom buttons
import Image from 'next/image';

const CourseCard = ({ title, category, price, lessons, rating, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white transition-all transform hover:scale-105 hover:shadow-lg">
      <div className="relative">
        {/* Category Tag */}
        <div className="absolute top-0 left-0 bg-teal-500 text-white text-xs px-2 py-1">
          {category}
        </div>

        {/* Course Image */}
        <Image
          src={image || '/placeholder.svg?height=200&width=400'}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Rating Badge */}
        {rating && (
          <div className="absolute bottom-2 right-2 bg-gray-900 bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded flex items-center">
            <span className="text-yellow-400 mr-1">★</span> {rating}
          </div>
        )}
      </div>

      {/* Course Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2">{title}</h3>

        {/* Lessons Count */}
        {lessons && (
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <span>{lessons} Lessons</span>
          </div>
        )}

        {/* Course Price */}
        <div
          className={`font-medium mb-2 ${
            price === 0 || price === 'Free'
              ? 'text-green-500'
              : 'text-green-600'
          }`}
        >
          {price === 0 ? 'Free' : `$${price}`}
        </div>

        {/* Details Button */}
        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white border-none transition-all duration-300">
          Details
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
