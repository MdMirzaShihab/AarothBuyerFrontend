import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../constants"; // Assuming you have your products constant



const ProductsByHubAndCatagory = () => {
  const { hubId, categoryId } = useParams(); // Get the hubId and categoryId from the URL

  // Step 1: Filter the products based on hubId and categoryId
  const filteredProducts = products.filter(
    (product) => product.hub === parseInt(hubId) && product.catagory === parseInt(categoryId)
  );

  return (
    <div className="min-h-screen bg-earthy-beige py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-earthy-brown text-center mb-6">
          Products in this Category
        </h1>

        {/* Display the filtered products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-md">
                <img
                  src={product.image[0]} // Assuming you have an image array
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-earthy-brown">{product.name}</h3>
                <p className="text-lg text-earthy-tan">Price: ${product.price}</p>
                <p className="text-sm text-gray-600">Sold: {product.sold}</p>
                <p className="text-sm text-gray-600">Min Quantity: {product.minQuantity}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-earthy-brown">No products found for this category.</p>
        )}
      </div>
    </div>
  );
};


export default ProductsByHubAndCatagory;
