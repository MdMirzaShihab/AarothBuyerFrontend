import React, { useState, useEffect } from "react";
import { 
  
  cartBoyImg, cartGirlImg, eggImg, girlPaperbBagImg, handVegImg,
  saleImg, vegBucketImg 
} from "../assets";
import { products, productCategories } from "../constants";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Array of images for the carousel
  const coverImages = [
     cartBoyImg, cartGirlImg, eggImg,
    girlPaperbBagImg, handVegImg, saleImg, vegBucketImg
  ];

  // Cycle images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % coverImages.length);
        setIsFading(false);
      }, 500); // Match fade duration
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [coverImages.length]);

  // Function to handle input change and filter products/categories
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      const filteredCategories = productCategories.filter((category) =>
        category.name.toLowerCase().includes(query)
      );

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

  const handleSuggestionClick = (suggestion) => {
    console.log(suggestion); // Handle clicking on a suggestion (to be expanded)
  };

  return (
    <section className="bg-earthy-beige flex items-center justify-between">
      {/* Left Section (Text content) */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center p-5 py-20 md:py-5">
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
                    <Link
                      to={`/products?category=${suggestion.id}`}
                      key={suggestion.id}>
                      <li
                        className="px-4 py-2 text-sm text-earthy-brown hover:bg-earthy-tan cursor-pointer"
                        onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="hidden md:block w-full md:w-1/2">
        <div className="flex justify-end items-center w-full min-h-[500px]">
        <img
            src={coverImages[currentImageIndex]}
            alt="Carousel Image"
            className={`h-auto max-h-[500px] object-cover transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
