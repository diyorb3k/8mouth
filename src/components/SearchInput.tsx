import React from 'react';
import { useStore } from '@/store/store'; // Update to useStore

const SearchInput: React.FC = () => {
  const { setSearchTerm } = useStore(); // Get the setSearchTerm function from the store

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Update the search term in the store
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={handleChange}
    />
  );
};

export default SearchInput;
