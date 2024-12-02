import React, { useState } from "react";
import { hubs, products } from "../constants";
import PriceCard from "../cards/PriceCard";

const DistrictsByCategory = ({ categoryId }) => {
  // State for search and sorting options
  const [searchQuery, setSearchQuery] = useState("");  // For search by district name
  const [sortOrder, setSortOrder] = useState("lowToHigh");  // For sorting prices (low to high or high to low)

  // Filter products based on selected categoryId
  const productsInCategory = products.filter(
    (product) => product.category === parseInt(categoryId)
  );

  // Group products by district and calculate the average price
  const districtData = productsInCategory.reduce((acc, product) => {
    const hub = hubs.find((hub) => hub.id === product.hub);
    if (hub) {
      const district = hub.district;

      if (!acc[district]) {
        acc[district] = {
          products: [],
          totalPrices: 0,
          maxPrice: -Infinity,
          minPrice: Infinity,
        };
      }

      acc[district].products.push(product);
      acc[district].totalPrices += product.price;

      if (product.price > acc[district].maxPrice) {
        acc[district].maxPrice = product.price;
      }
      if (product.price < acc[district].minPrice) {
        acc[district].minPrice = product.price;
      }
    }
    return acc;
  }, {});

  // Convert districtData into an array for rendering
  const districtSummary = Object.keys(districtData).map((district) => ({
    district,
    productCount: districtData[district].products.length,
    averagePrice:
      districtData[district].products.length > 0
        ? (districtData[district].totalPrices /
            districtData[district].products.length).toFixed(2)
        : 0,
    maxPrice: districtData[district].maxPrice.toFixed(2),
    minPrice: districtData[district].minPrice.toFixed(2),
  }));

  // Filter the districtSummary based on the search query (district name)
  const filteredDistricts = districtSummary.filter((data) =>
    data.district.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort the filtered districts based on the selected sort order
  const sortedDistricts = filteredDistricts.sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return parseFloat(a.averagePrice) - parseFloat(b.averagePrice);
    } else if (sortOrder === "highToLow") {
      return parseFloat(b.averagePrice) - parseFloat(a.averagePrice);
    }
    return 0;
  });

  return (
    <div className="container mx-auto p-6">
      <div className="lg:w-3/4 w-full p-4">
        <h2 className="text-2xl font-bold text-earthy-brown mb-6">
          Average price by district
        </h2>

{/* Search bar */}
<div className="mb-4">
  <input
    type="text"
    placeholder="Search by District"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="p-3 w-full border border-earthy-tan rounded-lg bg-earthy-beige text-earthy-brown placeholder:text-earthy-brown/50 shadow-md transition-all hover:bg-earthy-tan"
  />
</div>

{/* Sort by price dropdown */}
<div className="mb-6">
  <select
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    className="p-3 w-full border border-earthy-tan rounded-lg bg-earthy-beige text-earthy-brown cursor-pointer shadow-md transition-all hover:bg-earthy-tan"
  >
    <option value="lowToHigh">Sort by Price: Low to High</option>
    <option value="highToLow">Sort by Price: High to Low</option>
  </select>
</div>

        <p>{sortedDistricts.length} products found</p>

        <div className="flex mx-auto pb-10 px-3 sm:px-0 pt-[50px] max-w-7xl justify-center flex-wrap gap-5">
          {sortedDistricts.length > 0 ? (
            sortedDistricts.map((data) => (
              <PriceCard
                key={data.district}
                location={data.district}
                productCount={data.productCount}
                averagePrice={data.averagePrice}
                maxPrice={data.maxPrice}
                minPrice={data.minPrice}
              />
            ))
          ) : (
            <p className="text-center text-earthy-brown">
              No products found in this category for any district.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DistrictsByCategory;
