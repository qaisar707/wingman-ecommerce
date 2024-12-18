import React from "react";

interface StarRatingProps {
  rating: number;
  totalStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          className={`text-xl ${
            index < filledStars ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
