import React, { useEffect, useState } from "react";
import { hubs, productCategories, products } from "../constants";
import ProductCard from "../cards/ProductCard";
import Select from "react-select";
import { useLocation } from "react-router-dom";

const AllProductsPage = () => {
  const location = useLocation(); // Access the current URL location
  const queryParams = new URLSearchParams(location.search);

  // States for filters
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [locationFilter, setLocationFilter] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedSubdistrict, setSelectedSubdistrict] = useState(null);
  const [selectedHub, setSelectedHub] = useState(null);

  // Options for filters
  const categoryOptions = productCategories.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));

  const hubOptions = hubs.map((hub) => ({
    value: hub.id,
    label: hub.name,
  }));

  // Initialize filters from query parameters
  useEffect(() => {
    const hubId = queryParams.get("hub");
    const categoryId = queryParams.get("category");

    if (hubId) {
      const hubOption = hubOptions.find((hub) => hub.value === parseInt(hubId));
      setSelectedHub(hubOption || null);
    }

    if (categoryId) {
      const categoryOption = categoryOptions.find(
        (cat) => cat.value === parseInt(categoryId)
      );
      setCategoryFilter(categoryOption || null);
    }
  }, [queryParams]);

  useEffect(() => {
    applyFiltersAndSorting();
  }, [
    locationFilter,
    priceRange,
    categoryFilter,
    sortOrder,
    selectedDivision,
    selectedDistrict,
    selectedSubdistrict,
    selectedHub,
  ]);

  const applyFiltersAndSorting = () => {
    let tempProducts = [...products];

    // Hub Filter
    if (selectedHub) {
      tempProducts = tempProducts.filter(
        (product) => product.hub === selectedHub.value
      );
    }

    // Location Filter
    if (locationFilter) {
      tempProducts = tempProducts.filter((product) => {
        const hub = hubs.find((hub) => hub.id === product.hub);
        return (
          hub?.location.toLowerCase().includes(locationFilter.toLowerCase()) ||
          hub?.district?.toLowerCase().includes(locationFilter.toLowerCase()) ||
          hub?.subdistrict
            ?.toLowerCase()
            .includes(locationFilter.toLowerCase()) ||
          product.name.toLowerCase().includes(locationFilter.toLowerCase())
        );
      });
    }

    // Division, District, Subdistrict Filters
    if (selectedDivision) {
      tempProducts = tempProducts.filter((product) => {
        const hub = hubs.find((hub) => hub.id === product.hub);
        return hub?.division === selectedDivision.value;
      });
    }

    if (selectedDistrict) {
      tempProducts = tempProducts.filter((product) => {
        const hub = hubs.find((hub) => hub.id === product.hub);
        return hub?.district === selectedDistrict.value;
      });
    }

    if (selectedSubdistrict) {
      tempProducts = tempProducts.filter((product) => {
        const hub = hubs.find((hub) => hub.id === product.hub);
        return hub?.subdistrict === selectedSubdistrict.value;
      });
    }

    // Price Range Filter
    if (priceRange.min || priceRange.max) {
      tempProducts = tempProducts.filter(
        (product) =>
          (!priceRange.min || product.price >= priceRange.min) &&
          (!priceRange.max || product.price <= priceRange.max)
      );
    }

    // Category Filter
    if (categoryFilter) {
      tempProducts = tempProducts.filter(
        (product) => product.category === categoryFilter.value
      );
    }

    // Sorting
    tempProducts.sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    setFilteredProducts(tempProducts);
  };

  const divisionOptions = [...new Set(hubs.map((hub) => hub.division))].map(
    (division) => ({
      value: division,
      label: division,
    })
  );

  const districtOptions = selectedDivision
    ? [
        ...new Set(
          hubs
            .filter((hub) => hub.division === selectedDivision.value)
            .map((hub) => hub.district)
        ),
      ].map((district) => ({ value: district, label: district }))
    : [];

  const subdistrictOptions = selectedDistrict
    ? [
        ...new Set(
          hubs
            .filter((hub) => hub.district === selectedDistrict.value)
            .map((hub) => hub.subdistrict)
        ),
      ].map((subdistrict) => ({ value: subdistrict, label: subdistrict }))
    : [];

  const handleHubChange = (selectedOption) => setSelectedHub(selectedOption);

  const handleDivisionChange = (selectedOption) => {
    setSelectedDivision(selectedOption);
    setSelectedDistrict(null);
    setSelectedSubdistrict(null);
  };

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption);
    setSelectedSubdistrict(null);
  };

  const handleSubdistrictChange = (selectedOption) =>
    setSelectedSubdistrict(selectedOption);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full lg:p-4 p-2 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Filter & Sort</h2>

        {/* Hub Select */}
        <div className="mb-4">
          <label className="block font-semibold">Select Hub</label>
          <Select
            options={hubOptions}
            value={hubOptions.find(
              (option) => option.value === selectedHub?.value
            )}
            onChange={handleHubChange}
            isClearable
            className="w-full"
            placeholder="Select Hub"
          />
        </div>

        {/* Location Filters (Division, District, Subdistrict, Location) */}
        <div className="flex flex-col justify-center items-center gap-2 mb-4">
          <label className="block font-semibold">Location</label>
          {/* Location Search */}
          <input
            type="text"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            placeholder="Search by Location, District, Subdistrict"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          {/* Division Select */}
          <Select
            options={divisionOptions}
            value={divisionOptions.find(
              (option) => option.value === selectedDivision?.value
            )}
            onChange={handleDivisionChange}
            className="w-30 md:w-56"
            isClearable
            placeholder="Select Division"
          />

          {/* District Select */}
          <Select
            options={districtOptions}
            value={districtOptions.find(
              (option) => option.value === selectedDistrict?.value
            )}
            onChange={handleDistrictChange}
            className="w-30 md:w-56"
            isClearable
            placeholder="Select District"
          />

          {/* Subdistrict Select */}
          <Select
            options={subdistrictOptions}
            value={subdistrictOptions.find(
              (option) => option.value === selectedSubdistrict?.value
            )}
            onChange={handleSubdistrictChange}
            className="w-30 md:w-56"
            isClearable
            placeholder="Select Subdistrict"
          />
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <label className="block font-semibold">Price Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="priceMin"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: e.target.value })
              }
              className="w-1/2 p-2 border border-gray-300 rounded"
              placeholder="Min"
            />
            <input
              type="number"
              name="priceMax"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: e.target.value })
              }
              className="w-1/2 p-2 border border-gray-300 rounded"
              placeholder="Max"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <label className="block font-semibold">Category</label>
          <Select
            options={categoryOptions}
            value={categoryFilter}
            onChange={(selectedOption) => setCategoryFilter(selectedOption)}
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
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded">
            <option value="asc">Price (Low to High)</option>
            <option value="desc">Price (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Product List Section */}
      <div className="lg:w-3/4 w-full p-4">
        <h2 className="text-2xl font-bold mb-6">Available Products</h2>
        <div className="flex mx-auto pb-10 px-3 sm:px-0 pt-[50px] max-w-7xl justify-center flex-wrap gap-5">
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
