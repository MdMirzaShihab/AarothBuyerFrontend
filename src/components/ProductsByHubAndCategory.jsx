import React from "react";
import { useParams } from "react-router-dom";
import { productCategories, products, hubs } from "../constants"; // Assuming you have your products constant
import ProductCard from "../cards/ProductCard";

const ProductsByHubAndCategory = () => {
  const { hubId, categoryId } = useParams(); // Get the hubId and categoryId from the URL

  // Step 1: Filter the products based on hubId and categoryId
  const filteredProducts = products.filter(
    (product) =>
      product.hub === parseInt(hubId) &&
      product.category === parseInt(categoryId)
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
            {filteredProducts.map((product) => {
              const category = productCategories.find(
                (cat) => cat.id === product.category
              );
              const hub = hubs.find((h) => h.id === product.hub);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  category={category}
                  hub={hub}
                /> // Render each product using the ProductCard component
              );
            })}
          </div>
        ) : (
          <p className="text-center text-earthy-brown">
            No products found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductsByHubAndCategory;
