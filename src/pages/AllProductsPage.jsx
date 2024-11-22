import React, { useState } from "react"; // Import the ProductCard component
import { products } from "../constants";
import ProductCard from "../cards/ProductCard";
import Select from "react-select"; 

const AllProductsPage = () => {
  const [searchParams, setSearchParams] = useState({
    location: "",
    priceMin: 0,
    priceMax: 1000,
    category: "",
  });

  const categories = [
    "Tomato", "Potato", "Onion", "Rice", "Chili", "Garlic", "Daal"
  ];

    // Format categories for react-select
    const categoryOptions = categories.map((cat) => ({ value: cat, label: cat }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    // Handle category selection change
    const handleCategoryChange = (selectedOption) => {
      setSearchParams((prev) => ({
        ...prev,
        category: selectedOption ? selectedOption.value : "",
      }));
    };

  // Filter products based on the search parameters
  const filteredProducts = products.filter((product) => {
    return (
      (searchParams.location === "" || product.location.includes(searchParams.location)) &&
      (product.price >= searchParams.priceMin && product.price <= searchParams.priceMax) &&
      (searchParams.category === "" || product.catagory.includes(searchParams.category))
    );
  });

  // Sort products based on price (ascending or descending)
  const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sort and Filter Sidebar (mobile becomes top bar) */}
      <div className="lg:w-1/4 w-full lg:p-4 p-2 bg-gray-100 mb-4 lg:mb-0">
        <h2 className="text-xl font-bold mb-4">Filter & Sort</h2>

        {/* Location Filter */}
        <div className="mb-4">
          <label className="block font-semibold">Location</label>
          <input
            type="text"
            name="location"
            value={searchParams.location}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            placeholder="Search by location"
          />
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <label className="block font-semibold">Price Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="priceMin"
              value={searchParams.priceMin}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
              placeholder="Min"
            />
            <input
              type="number"
              name="priceMax"
              value={searchParams.priceMax}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
              placeholder="Max"
            />
          </div>
        </div>

        {/* Category Filter with React Select */}
        <div className="mb-4">
          <label className="block font-semibold">Category</label>
          <Select
            options={categoryOptions}
            value={categoryOptions.find(option => option.value === searchParams.category)}
            onChange={handleCategoryChange}
            isClearable
            className="w-full"
            placeholder="Select a category"
          />
        </div>

        {/* Sort By Price */}
        <div className="mb-4">
          <label className="block font-semibold">Sort By</label>
          <select
            name="sort"
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
          >
            <option value="asc">Price (Low to High)</option>
            <option value="desc">Price (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Product List Section */}
      <div className="lg:w-3/4 w-full p-4">
        <h2 className="text-2xl font-bold mb-6">Available Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} /> // Render each product using the ProductCard component
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage