import React, { useState } from "react";
import { ICardProps } from "../utils/interfaces/IComponent";
import StarRating from "./Rating";

const Card: React.FC<ICardProps> = ({ product, onClick }) => {
  const [showMore, setShowMore] = useState(false);

  const truncateText = (text: string, length: number) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  return (
    <div
      className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer w-64 h-auto flex flex-col justify-between"
      onClick={() => onClick(product)}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-2 rounded-md"
      />
      <h3 className="text-md font-semibold line-clamp-2 h-12 text-center mb-2">
        {product.title}
      </h3>
      <p className="text-sm text-gray-600 text-center mb-1">
        Category: <span className="font-bold">{product.category}</span>
      </p>
      <p className="text-sm font-semibold text-gray-800 text-center mb-1">
        Price: ${product.price}
      </p>
      <div className="flex items-center justify-center mb-2">
        <StarRating rating={product.rating.rate} />
        <span className="text-gray-600 text-sm ml-2">
          ({product.rating.count})
        </span>
      </div>
    </div>
  );
};

export default Card;
