import React from "react";
import { Link } from "react-router-dom";

const CategoryCardHome = ({ category }) => {
  return (
    <Link to={`/products?category=${category.id}`}>
      <div
        className={`group bg-gradient-to-b pt-20 from-transparent via-transparent to-earthy-beige relative flex flex-col rounded-xl bg-clip-border  text-gray-700 shadow-md h-full transition-transform duration-700 transform hover:-translate-y-3`}>
        <div className="relative mx-4 group-hover:bg-earthy-tan bg-clip-border shadow-xl rounded-3xl object-cover transition duration-500 ease-in-out">
          <div className="object-contain flex justify-center items-center">
            <img
              src={category.image}
              alt={`${category.name}'s picture`}
              className={` -mt-20 p-2 `}
            />
          </div>
        </div>
        <div className="p-3 text-center">
          <h4
            className={` block text-earthy-brown font-bold font-sans text-2xl leading-snug tracking-normal antialiased`}>
            {category.name}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCardHome;
