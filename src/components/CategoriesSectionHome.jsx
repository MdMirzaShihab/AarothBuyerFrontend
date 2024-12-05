import { Link } from "react-router-dom";
import { productCategories } from "../constants";
import CategoryCard from "../cards/CategoryCardHome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules";
import { useState } from "react";

const CategoriesSectionHome = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter categories based on the search query
  const filteredCategories = productCategories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <section className="max-w-screen-xl mx-auto pb-10 pt-8 px-2">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4 px-8">
        <h2 className="text-4xl text-center font-bold text-earthy-brown">
          Price by Categories
        </h2>

        {/* Search bar for filtering categories */}
        <input
          type="text"
          placeholder="Search by category"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 w-60 border border-earthy-brown focus:outline-none rounded-md"
        />
      </div>

      <div className="py-10">
        <Swiper
          loop={true} // Enable looping
          navigation={true} // Enable navigation arrows
          spaceBetween={30}
          centeredSlides={true}
          modules={[Navigation]} // Added Pagination module for progress
          breakpoints={{
            1440: {
              slidesPerView: 7,
            },
            1024: {
              slidesPerView: 5,
            },
            720: {
              slidesPerView: 4,
            },
            480: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 2,
            },
          }} // Responsive breakpoints for different screen sizes
        >
          {filteredCategories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoriesSectionHome;
