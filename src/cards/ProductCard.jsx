import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, catagory, hub }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="no-underline">
    <div className="border flex w-72 flex-col rounded-xl p-4 bg-white shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="h-full object-cover mb-4"
      />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-500">Category: {catagory.name}</p>
      <p className="text-sm text-gray-500">Hub: {hub.name}, {hub.district}</p>
      <p className="text-sm">
        Min Quantity: {product.minQuantity.toLocaleString()} kg
      </p>
      <p className="text-sm">
        Available: {product.maxQuantity.toLocaleString()} kg
      </p>
      <p className="text-lg font-bold text-green-600">Price: ৳{product.price.toLocaleString('bn-BD')}/kg</p>
    </div>
    </Link>
  );
};

export default ProductCard;
