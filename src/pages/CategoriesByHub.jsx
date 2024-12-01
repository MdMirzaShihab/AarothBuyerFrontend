import React from "react";
import { useParams } from "react-router-dom";
import {
  hubs,
  productCategories,
  products,
  vendorProfiles,
} from "../constants";
import ProductCard from "../cards/ProductCard";
import CategoryByHubCard from "../cards/CategoryByHubCard";

const CategoriesByHub = () => {
  const { hubId } = useParams();
  const hub = hubs.find((hub) => hub.id === parseInt(hubId));

  // Step 1: Filter products that belong to the selected hub
  const productsInHub = products.filter((product) => product.hub === hub.id);

  // Step 2: Filter categories that belong to the selected hub
  const categoriesInHub = productCategories.filter((category) =>
    productsInHub.some((product) => product.category === category.id)
  );

  // Filter vendors that are selling in this hub
  const vendorsInHub = vendorProfiles.filter((vendor) =>
    productsInHub.some((product) => product.vendor === vendor.id)
  );

  // Step 3: Function to calculate average price of products in a category
  const getAveragePriceForCategory = (categoryId) => {
    const productsInCategory = productsInHub.filter(
      (product) => product.category === categoryId
    );
    const totalPrice = productsInCategory.reduce(
      (acc, product) => acc + product.price,
      0
    );
    return totalPrice / productsInCategory.length;
  };

  return (
    <div className="min-h-screen bg-earthy-beige py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-earthy-brown text-center mb-6">
          {hub.name}
        </h1>
        <p className="text-lg text-earthy-yellow text-center mb-4">
          Hub location: {hub.location}, {hub.subdistrict}, {hub.district},{" "}
          {hub.division}
        </p>
        <p className="text-lg text-earthy-brown text-center mb-4">
          Hub ID: {hub.id}
        </p>
        <div className="text-center mb-8">
          <p className="text-xl text-earthy-brown mb-2">
            Products in this hub: {productsInHub.length}
          </p>
          <p className="text-xl text-earthy-brown mb-2">
            Total categories: {categoriesInHub.length}
          </p>
          <p className="text-xl text-earthy-brown mb-6">
            Vendors selling products: {vendorsInHub.length}
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {categoriesInHub.map((category) => {
            const averagePrice = getAveragePriceForCategory(category.id); // Calculate average price for this category
            return (
              <CategoryByHubCard
                key={category.id}
                category={category}
                averagePrice={averagePrice} // Pass average price as a prop
                hub={hub}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesByHub;
