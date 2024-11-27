import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, catagory, hub }) => {
  return (
    <Link
      to={`/products/${product.id}`}>
    <div className="flex flex-col w-72 rounded-xl p-4 m-2 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
    <div className="mb-4 relative">
          <img
            src={product.image[0] || "/default-image.jpg"}  // Handle missing images
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-600">Category: {catagory.name}</p>
      <p className="text-sm text-gray-600">Hub: {hub.name}, {hub.district}</p>
      <p className="text-sm text-gray-700">
        Min Quantity: {product.minQuantity.toLocaleString()} kg
      </p>
      <p className="text-sm text-gray-700">
        Available: {product.maxQuantity.toLocaleString()} kg
      </p>
      <p className="text-lg font-bold text-olive">Price: ৳{product.price.toLocaleString('bn-BD')}/kg</p>
    </div>
    </Link>
  );
};

export default ProductCard;
