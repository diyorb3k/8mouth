import React from 'react';
import { IoSearch } from 'react-icons/io5';

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Update search term
  };

  return (
    <div className="search-input-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Mahsulotlarni qidiring..." // "Search for products..."
        className="search-input"
      />
      <IoSearch className="search-icon" />
    </div>
  );
};

export default SearchInput;
