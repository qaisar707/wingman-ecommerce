import React from "react";

interface SortingProps {
  sortOption: string;
  onSortChange: (option: string) => void;
}

const Sorting: React.FC<SortingProps> = ({ sortOption, onSortChange }) => {
  return (
    <div className="flex justify-end mb-4">
      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="border rounded px-3 py-1"
      >
        <option value="default">Sort by</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="ratingAsc">Rating: Low to High</option>
        <option value="ratingDesc">Rating: High to Low</option>
      </select>
    </div>
  );
};

export default Sorting;
