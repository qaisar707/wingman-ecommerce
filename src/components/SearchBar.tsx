import { ISearchBarProps } from "../utils/interfaces/IComponent";
import React, { useState, useEffect } from "react";
import { useDebounce } from "../utils/hooks/useDebounce";

const SearchBar: React.FC<ISearchBarProps> = ({ placeholder = "Search products...", onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const debouncedQuery = useDebounce(inputValue, 300);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      onSearch(debouncedQuery);
    } else {
      onSearch("");
    }
  }, [debouncedQuery, onSearch]);

  return (
    <div className="flex items-center max-w-md mx-auto border rounded-md shadow-sm">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-grow py-2 px-4 text-sm text-gray-900 placeholder-gray-400 border-none focus:outline-none focus:ring-0 rounded-l-md"
      />
    </div>
  );
};

export default SearchBar;
