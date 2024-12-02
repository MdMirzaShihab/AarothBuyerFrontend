import React, { useState } from "react";
import { hubs, products } from "../constants";
import PriceCard from "../cards/PriceCard";

const SubDistrictsByCategory = ({ categoryId }) => {
  // State for search and sorting options
  const [searchQuery, setSearchQuery] = useState("");  // For search by subdistrict name
  const [sortOrder, setSortOrder] = useState("lowToHigh");  // For sorting prices (low to high or high to low)

  // Filter products based on the selected categoryId
  const productsInCategory = products.filter(
    (product) => product.category === parseInt(categoryId)
  );

  // Group products by subdistrict and calculate the average price
  const subDistrictData = productsInCategory.reduce((acc, product) => {
    const hub = hubs.find((hub) => hub.id === product.hub);
    if (hub) {
      const subDistrict = hub.subdistrict;

      if (!acc[subDistrict]) {
        acc[subDistrict] = {
          products: [],
          totalPrices: 0,
          maxPrice: -Infinity,
          minPrice: Infinity,
        };
      }

      acc[subDistrict].products.push(product);
      acc[subDistrict].totalPrices += product.price;

      if (product.price > acc[subDistrict].maxPrice) {
        acc[subDistrict].maxPrice = product.price;
      }
      if (product.price < acc[subDistrict].minPrice) {
        acc[subDistrict].minPrice = product.price;
      }
    }
    return acc;
  }, {});

  // Convert subDistrictData into an array for rendering
  const subDistrictSummary = Object.keys(subDistrictData).map((subDistrict) => ({
    subDistrict,
    productCount: subDistrictData[subDistrict].products.length,
    averagePrice:
      subDistrictData[subDistrict].products.length > 0
        ? (subDistrictData[subDistrict].totalPrices /
            subDistrictData[subDistrict].products.length).toFixed(2)
        : 0,
    maxPrice: subDistrictData[subDistrict].maxPrice.toFixed(2),
    minPrice: subDistrictData[subDistrict].minPrice.toFixed(2),
  }));

  // Filter the subDistrictSummary based on the search query (subdistrict name)
  const filteredSubDistricts = subDistrictSummary.filter((data) =>
    data.subDistrict.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort the filtered subdistricts based on the selected sort order
  const sortedSubDistricts = filteredSubDistricts.sort((a, b) => {
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
          Average price by subdistrict
        </h2>

        {/* Search bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Subdistrict"
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

        <p>{sortedSubDistricts.length} products found</p>

        <div className="flex mx-auto pb-10 px-3 sm:px-0 pt-[50px] max-w-7xl justify-center flex-wrap gap-5">
          {sortedSubDistricts.length > 0 ? (
            sortedSubDistricts.map((data) => (
              <PriceCard
                key={data.subDistrict}
                location={data.subDistrict}
                productCount={data.productCount}
                averagePrice={data.averagePrice}
                maxPrice={data.maxPrice}
                minPrice={data.minPrice}
              />
            ))
          ) : (
            <p className="text-center text-earthy-brown">
              No products found in this category for any subdistrict.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubDistrictsByCategory;
