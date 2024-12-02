import React, { useState } from "react";
import { hubs, products } from "../constants";
import PriceCard from "../cards/PriceCard";

const DivitionsByCategory = ({ categoryId }) => {
  // State for search and sorting options
  const [searchQuery, setSearchQuery] = useState("");  // For search by division name
  const [sortOrder, setSortOrder] = useState("lowToHigh");  // For sorting prices (low to high or high to low)

  // Filter products based on the selected categoryId
  const productsInCategory = products.filter(
    (product) => product.category === parseInt(categoryId)
  );

  // Group products by division and calculate the average, max, and min prices
  const divisionData = productsInCategory.reduce((acc, product) => {
    const hub = hubs.find((hub) => hub.id === product.hub);
    if (hub) {
      const division = hub.division;

      if (!acc[division]) {
        acc[division] = {
          products: [],
          totalPrices: 0,
          maxPrice: -Infinity,
          minPrice: Infinity,
        };
      }

      acc[division].products.push(product);
      acc[division].totalPrices += product.price;

      if (product.price > acc[division].maxPrice) {
        acc[division].maxPrice = product.price;
      }
      if (product.price < acc[division].minPrice) {
        acc[division].minPrice = product.price;
      }
    }
    return acc;
  }, {});

  // Convert divisionData into an array for rendering
  const divisionSummary = Object.keys(divisionData).map((division) => ({
    division,
    productCount: divisionData[division].products.length,
    averagePrice:
      divisionData[division].products.length > 0
        ? (divisionData[division].totalPrices /
            divisionData[division].products.length).toFixed(2)
        : 0,
    maxPrice: divisionData[division].maxPrice.toFixed(2),
    minPrice: divisionData[division].minPrice.toFixed(2),
  }));

  // Filter the divisionSummary based on the search query (division name)
  const filteredDivisions = divisionSummary.filter((data) =>
    data.division.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort the filtered divisions based on the selected sort order
  const sortedDivisions = filteredDivisions.sort((a, b) => {
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
          Average price by division
        </h2>

        {/* Search bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Division"
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

        <p>{sortedDivisions.length} products found</p>

        <div className="flex mx-auto pb-10 px-3 sm:px-0 pt-[50px] max-w-7xl justify-center flex-wrap gap-5">
          {sortedDivisions.length > 0 ? (
            sortedDivisions.map((data) => (
              <PriceCard
                key={data.division}
                location={data.division}
                productCount={data.productCount}
                averagePrice={data.averagePrice}
                maxPrice={data.maxPrice}
                minPrice={data.minPrice}
              />
            ))
          ) : (
            <p className="text-center text-earthy-brown">
              No products found in this category for any division.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DivitionsByCategory;
