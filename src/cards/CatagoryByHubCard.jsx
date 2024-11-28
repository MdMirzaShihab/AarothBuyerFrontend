import React from "react";
import { Link } from "react-router-dom";

const CatagoryByHubCard = ({ category, averagePrice, hub }) => {
  return (
<div
      className="group bg-gradient-to-b pt-20 from-transparent via-transparent to-earthy-tan relative flex flex-col rounded-xl bg-clip-border text-gray-700 shadow-md h-full transition-transform duration-700 transform hover:-translate-y-3">
      <div className="relative mx-4 group-hover:bg-earthy-yellow bg-clip-border shadow-xl hover:shadow-2xl rounded-3xl object-cover transition duration-500 ease-in-out">
        <div className="object-contain flex justify-center items-center">
          <img
            src={category.image}
            alt={`${category.name}'s picture`}
            className={` -mt-20 w-40 p-2 `}
            />
            </div>
          </div>
          <div className="p-6 text-center rounded-b-xl shadow-lg">
            <h4 className="block text-earthy-brown font-bold font-sans text-2xl leading-snug tracking-normal antialiased mb-3">
          {category.name}
          </h4>
          <p className="text-lg text-earthy-brown font-medium mb-2">Average price:</p>
          <p className="text-xl font-bold text-forest"> ৳{averagePrice.toLocaleString('bn-BD', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/kg</p>
          <Link
          to={`/hubdetails/${hub.id}/category/${category.id}`} // Navigate to FilteredProducts with hubId and categoryId
          className="mt-4 inline-block bg-forest text-white font-bold py-2 px-4 rounded hover:bg-olive transition duration-300"
        >
          View Products
        </Link>
      </div>
    </div>
  );
};

export default CatagoryByHubCard;
