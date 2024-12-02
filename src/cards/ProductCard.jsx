import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, category, hub }) => {
  return (
    <Link to={`/products/${product.id}`} className="block">
      <div className="flex flex-col w-72 rounded-xl p-4 m-2 bg-earthy-beige shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-earthy-tan hover:text-earthy-brown">
        {/* Image Section */}
        <div className="mb-4 relative">
          <img
            src={product.image[0] || "/default-image.jpg"}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-xl text-earthy-brown mb-2">{product.name}</h3>

        {/* Category */}
        <p className="text-sm text-earthy-brown mb-2">Category: {category.name}</p>

        {/* Hub Information */}
        <p className="text-sm text-earthy-brown mb-2">
          Hub: {hub.name}, {hub.district}
        </p>

        {/* Quantities */}
        <div className="mb-2">
          <p className="text-sm text-earthy-brown">Min Quantity: {product.minQuantity.toLocaleString()} kg</p>
          <p className="text-sm text-earthy-brown">Available: {product.maxQuantity.toLocaleString()} kg</p>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-olive mt-2">
          Price: ৳{product.price.toLocaleString("bn-BD")}/kg
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
