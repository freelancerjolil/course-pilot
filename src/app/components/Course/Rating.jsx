const Rating = ({ value }) => {
  const fullStars = Math.floor(value);
  const halfStar = value % 1 >= 0.5 ? true : false;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {/* Full stars */}
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-400">
            ★
          </span>
        ))}

      {/* Half star */}
      {halfStar && <span className="text-yellow-400">☆</span>}

      {/* Empty stars */}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">
            ★
          </span>
        ))}
    </div>
  );
};

export default Rating;
