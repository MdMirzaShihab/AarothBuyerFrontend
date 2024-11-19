import React, { useState } from 'react';
import { products } from '../constants';

export default function BuyerPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="py-16 px-8 bg-earthy-beige">
      <h2 className="text-2xl font-bold text-earthy-brown">Buyer Dashboard</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow bg-earthy-tan text-earthy-brown"
          >
            <h3 className="font-bold">{product.name}</h3>
            <p>Price: {product.price} per kg</p>
            <button
              onClick={() => handleProductClick(product)}
              className="bg-earthy-yellow text-white py-1 px-2 mt-4 rounded"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="mt-8 p-4 border rounded shadow bg-earthy-tan text-earthy-brown">
          <h3 className="font-bold">Product Details</h3>
          <p><strong>Name:</strong> {selectedProduct.name}</p>
          <p><strong>Quantity:</strong> {selectedProduct.quantity} kg</p>
          <p><strong>Price:</strong> {selectedProduct.price} per kg</p>
          <button className="bg-earthy-brown text-white py-2 px-4 mt-4 rounded">
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}
