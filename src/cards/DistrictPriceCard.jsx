import React from 'react';

const DistrictPriceCard = ({ district, avgPrice, productCount, highestPrice, lowestPrice }) => {
  return (
    <div className="bg-earthy-beige shadow-lg rounded-lg p-5 w-64 h-56 flex flex-col items-center justify-between border border-earthy-tan">
      <h3 className="text-xl font-semibold text-earthy-brown">{district}</h3>
      <p className="text-2xl font-bold text-forest mt-2">৳ {avgPrice}</p>
      <p className="text-sm text-earthy-brown mt-1">Average Price</p>
      
      <div className="mt-4 text-sm text-earthy-brown">
        <p><strong>Number of Products:</strong> {productCount}</p>
        <p><strong>Highest Price:</strong> ৳ {highestPrice}</p>
        <p><strong>Lowest Price:</strong> ৳ {lowestPrice}</p>
      </div>
    </div>
  );
};

export default DistrictPriceCard;
