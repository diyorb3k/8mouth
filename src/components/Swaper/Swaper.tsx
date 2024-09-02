"use client";
import '../App.scss/header.scss'; // CSS fayl manzilini to'g'rilang

import React, { useEffect, useState } from 'react';

interface Data {
  id: number;
  image: string;
}

const Swaper: React.FC = () => {
  const [data] = useState<Data[]>([
    { id: 1, image: '/1716885789-main_1600x491_uz swaper1.png' },
    { id: 2, image: '/1724851130-Naushniki Honor 1600x491 swaper2.png' },
    { id: 3, image: '/1724150902-1600х491 (6) swaper3.png' },
    { id: 4, image: '/1723203897-shop_maktabbozori_main_swaper4.png' },
    { id: 5, image: '/1716976999-main_1600х491_swaper5.png' },
    { id: 6, image: '/1717994426-1600x491 UZ swaper6.png.crdownload' },
    { id: 7, image: '/1724228670-1600x491 swaper7.png' },
    { id: 8, image: '/1723108501-BQ_Texnika_uz_1600╨╡491swaper8.png' },
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="container p-4 border rounded shadow-md overflow-hidden relative">
      {/* <h1 className="text-xl font-bold">Swaper Component</h1> */}

      {data.length > 0 && (
        <div className="mt-4 swaper   rounded-[4px] relative w-full h-64 overflow-hidden">
          <img 
            src={data[currentImageIndex].image}
            alt={`Image ${data[currentImageIndex].id}`}
            className="absolute w-full h-auto transition-opacity duration-1000 ease-in-out"
            style={{ opacity: 1 }}
          />
        </div>
      )}

      <div className="flex justify-center mt-4 space-x-2">
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Swaper;
