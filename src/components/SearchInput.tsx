import React from 'react';
import { useSearchStore } from '@/store/store'; 

const SearchInput: React.FC = () => {
  const { setSearchTerm } = useSearchStore(); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); 
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
