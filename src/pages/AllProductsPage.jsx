import React, { useEffect, useState } from "react";
import { hubs, productCatagories, products } from "../constants";
import ProductCard from "../cards/ProductCard";
import Select from "react-select";

const AllProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [locationFilter, setLocationFilter] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedSubdistrict, setSelectedSubdistrict] = useState(null);

  useEffect(() => {
    applyFiltersAndSorting();
  }, [locationFilter, priceRange, categoryFilter, sortOrder, selectedDivision, selectedDistrict, selectedSubdistrict]);

  const applyFiltersAndSorting = () => {
    let tempProducts = [...products];

    // Location Filter
    if (locationFilter) {
      tempProducts = tempProducts.filter((product) => {
        // Find the hub related to the product
        const hub = hubs.find((hub) => hub.id === product.hub);
        // Check if any of the fields match the locationFilter (case insensitive)
        const matchLocation = hub?.location.toLowerCase().includes(locationFilter.toLowerCase());
        const matchDistrict = hub?.district?.toLowerCase().includes(locationFilter.toLowerCase());
        const matchSubdistrict = hub?.subdistrict?.toLowerCase().includes(locationFilter.toLowerCase());
        const matchProductName = product.name.toLowerCase().includes(locationFilter.toLowerCase());

        return matchLocation || matchDistrict || matchSubdistrict || matchProductName;
      });
    }

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
          (priceRange.min ? product.price >= priceRange.min : true) &&
          (priceRange.max ? product.price <= priceRange.max : true)
      );
    }

    // Category Filter
    if (categoryFilter) {
      tempProducts = tempProducts.filter((product) => product.catagory === categoryFilter.value);
    }

    // Sorting by Price
    tempProducts.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setFilteredProducts(tempProducts);
  };

  const categoryOptions = productCatagories.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));

    // Options for Division, District, and Subdistrict (assuming these are available from `hubs` data)
    const divisionOptions = [...new Set(hubs.map((hub) => hub.division))].map((division) => ({
      value: division,
      label: division,
    }));
  
    const districtOptions = selectedDivision
      ? [...new Set(hubs.filter((hub) => hub.division === selectedDivision.value).map((hub) => hub.district))]
          .map((district) => ({ value: district, label: district }))
      : [];
  
    const subdistrictOptions = selectedDistrict
      ? [...new Set(hubs.filter((hub) => hub.district === selectedDistrict.value).map((hub) => hub.subdistrict))]
          .map((subdistrict) => ({ value: subdistrict, label: subdistrict }))
      : [];
  
    // Handlers for Division, District, and Subdistrict selects
    const handleDivisionChange = (selectedOption) => {
      setSelectedDivision(selectedOption);
      setSelectedDistrict(null); // Reset district and subdistrict when division changes
      setSelectedSubdistrict(null);
    };
  
    const handleDistrictChange = (selectedOption) => {
      setSelectedDistrict(selectedOption);
      setSelectedSubdistrict(null); // Reset subdistrict when district changes
    };
  
    const handleSubdistrictChange = (selectedOption) => {
      setSelectedSubdistrict(selectedOption);
    };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sort and Filter Sidebar (mobile becomes top bar) */}
      <div className="lg:w-1/4 w-full lg:p-4 p-2 bg-gray-100 mb-4 lg:mb-0">
        <h2 className="text-xl font-bold mb-4">Filter & Sort</h2>

        {/* Location Filter */}
        <div className="mb-4">
          <label className="block font-semibold">Search</label>
          <input
            type="text"
            name="location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            placeholder="Search by location"
          />
        </div>
                {/* Division, District, and Subdistrict Selects */}
                <div className="flex flex-col justify-center items-center gap-2 mb-4">
                <label className="block font-semibold">Location</label>
          {/* Division Select */}
          <Select
            options={divisionOptions}
            value={divisionOptions.find((option) => option.value === selectedDivision?.value)}
            onChange={handleDivisionChange}
            className="w-30 md:w-56"
            isClearable
            placeholder="Select Division"
          />

          {/* District Select */}
          <Select
            options={districtOptions}
            value={districtOptions.find((option) => option.value === selectedDistrict?.value)}
            onChange={handleDistrictChange}
            className="w-30 md:w-56"
            isClearable
            placeholder="Select District"
            isDisabled={!selectedDivision} // Disable District select until Division is selected
          />

          {/* Subdistrict Select */}
          <Select
            options={subdistrictOptions}
            value={subdistrictOptions.find((option) => option.value === selectedSubdistrict?.value)}
            onChange={handleSubdistrictChange}
            className="w-30 md:w-56"
            isClearable
            placeholder="Select Subdistrict"
            isDisabled={!selectedDistrict} // Disable Subdistrict select until District is selected
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
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
              className="w-1/2 p-2 border border-gray-300 rounded"
              placeholder="Min"
            />
            <input
              type="number"
              name="priceMax"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
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
          const catagory = productCatagories.find((cat) => cat.id === product.catagory);
          const hub = hubs.find((h) => h.id === product.hub);
          return (
            <ProductCard key={product.id} product={product} catagory={catagory} hub={hub}  /> // Render each product using the ProductCard component
          )}
          
        )}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
