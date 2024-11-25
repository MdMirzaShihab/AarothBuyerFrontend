import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../cards/ProductCard";
import { hubs, productCatagories, products } from "../constants";

const ProductSectionHome = () => {
  return (
    <section className="pb-10 pt-4 px-2 md:px-16">
      <h2 className="text-4xl text-center font-bold text-earthy-brown">
        Items for you
      </h2>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {products.map((product) => {
          const catagory = productCatagories.find((cat) => cat.id === product.catagory);
          const hub = hubs.find((h) => h.id === product.hub);
          return (
            <ProductCard key={product.id} product={product} catagory={catagory} hub={hub} />
          )}
          
        )}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="/products"
          className="inline-flex items-center text-lg text-earthy-brown hover:underline">
          View all
          <svg
            className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default ProductSectionHome;
