import React, { useState, useEffect } from "react";
import { cover1, cover2, cover3, cover4, cover5, cover6 } from "../assets";  // Importing image asset
import { products, productCategories } from "../constants";  // Importing data
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles
import "swiper/css/effect-fade"; // Import fade effect styles


const HeroSection = () => {
  // State for search input and suggestions
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const coverImages = [cover2, cover1, cover3, cover4, cover5, cover6]; // Array of images

  // Function to handle input change and filter products/categories
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter products and categories based on the search query
    if (query) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      const filteredCategories = productCategories.filter((category) =>
        category.name.toLowerCase().includes(query)
      );

      // Combine both results and limit to top 10 suggestions
      const combinedSuggestions = [
        ...filteredProducts.map((product) => ({
          type: "product",
          id: product.id,
          name: product.name,
        })),
        ...filteredCategories.map((category) => ({
          type: "category",
          id: category.id,
          name: category.name,
        })),
      ];

      setFilteredSuggestions(combinedSuggestions.slice(0, 10));
    } else {
      setFilteredSuggestions([]);
    }
  };

  // Function to handle suggestion click (this will be expanded later for search functionality)
  const handleSuggestionClick = (suggestion) => {
    console.log(suggestion); // Handle clicking on a suggestion (to be expanded)
  };


  return (
    <section className="bg-earthy-beige  flex items-center justify-between">
      {/* Left Section (Text content) */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center p-5">
        <h1 className="text-4xl font-bold text-olive">
          Welcome to
          <span className="text-forest"> Aaroth.com</span>
        </h1>
        <p className="text-olive mt-4">
          An online mega marketplace for agricultural products.
        </p>

        {/* Search Bar Section */}
        <div className="mt-8 flex justify-center md:justify-start">
          <div className="relative w-full sm:w-96">
            {/* Input Field */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="w-full py-3 px-4 rounded-lg text-lg text-earthy-brown placeholder-earthy-brown bg-white border border-earthy-tan focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest"
            />
            {/* Search Button */}
            <button className="absolute top-0 right-0 px-6 py-3 border border-forest rounded-r-lg bg-forest text-white text-lg font-semibold hover:bg-olive focus:outline-none focus:ring-2 focus:ring-forest">
              Search
            </button>
            
            {/* Suggestions */}
            {filteredSuggestions.length > 0 && (
              <div className="absolute z-10 mt-2 w-full bg-white border border-earthy-tan rounded-lg shadow-lg">
                <ul>
                  {filteredSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      className="px-4 py-2 text-sm text-earthy-brown hover:bg-earthy-tan cursor-pointer"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="hidden md:block w-full md:w-1/2">
        <div className="flex justify-end items-center w-full">
        <Swiper
          spaceBetween={50}
          slidesPerView={1} // Display one slide at a time
          loop={true} // Infinite loop
          loopAdditionalSlides={1} // Create one duplicate slide
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay every 3 seconds
          effect="fade" // Smooth fade transition
        >
          {coverImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Cover Image ${index + 1}`} // Better accessibility
                className="w-full h-96 object-cover"
                loading="lazy" // Native lazy loading in the browser
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
