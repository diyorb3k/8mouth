"use client";
import React, { useState } from 'react';
import Header from '../layout/Header';  // Header komponentini import qilish
import ProductList from './products/ProductList'; // ProductList komponentini import qilish

const MainComponent = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");  // Qidiruv holatini yuqori komponentda saqlash

  return (
    <div>
      {/* Header komponentiga qidiruv holatini uzatamiz */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {/* ProductList komponentiga ham qidiruv holatini uzatamiz */}
      <ProductList searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default MainComponent;
