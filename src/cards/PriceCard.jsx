import React from "react";

const PriceCard = ({
  location,
  averagePrice,
  productCount,
  maxPrice,
  minPrice,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-earthy-beige shadow-lg rounded-2xl p-5 flex flex-col items-center border-8 border-earthy-tan">
        <h3 className="text-xl font-semibold text-earthy-brown">{location}</h3>
        <p className="text-2xl font-bold text-forest mt-2">৳ {averagePrice}</p>
        <p className="text-sm text-earthy-brown mt-1">Average Price</p>

      </div>

      <div className="rounded-e-2xl bg-earthy-tan shadow-lg ">

      <div className="p-6 text-sm  text-earthy-brown">
          <p>
            <strong>Number of Items:</strong> {productCount}
          </p>
          <p>
            {" "}
            <strong>Max Price:</strong> {maxPrice}
          </p>
          <p>
            <strong>Min Price:</strong> {minPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
