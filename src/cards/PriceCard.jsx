import React from 'react';

const PriceCard = ({ location, averagePrice , productCount, maxPrice, minPrice}) => {
  return (
    <div className="bg-earthy-beige shadow-lg rounded-lg p-5 w-64 h-56 flex flex-col items-center justify-between border border-earthy-tan">
      <h3 className="text-xl font-semibold text-earthy-brown">{location}</h3>
      <p className="text-2xl font-bold text-forest mt-2">৳ {averagePrice}</p>
      <p className="text-sm text-earthy-brown mt-1">Average Price</p>
      
      <div className="mt-4 text-sm text-earthy-brown">
        <p><strong>Number of Products:</strong> {productCount}</p>
        <p> <strong>Max Price:</strong> {maxPrice}</p>
        <p><strong>Min Price:</strong> {minPrice}</p>
      </div>
    </div>
  );
};

export default PriceCard;
