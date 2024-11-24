import { Link } from "react-router-dom";
import { productCatagories } from "../constants";
import CatagoryCard from "../cards/CatagoryCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import navigation styles (if you use navigation)
import { Navigation } from "swiper/modules";



const CatagoriesSectionHome = () => {

    return (
      <section className="pb-10 pt-4 px-2 md:px-16">
        <h2 className="text-4xl text-center font-bold text-earthy-brown">Catagories</h2>
        <div className="pt-10">
        <Swiper
        loop={true}         // Enable looping
        navigation={true}  // Enable navigation arrows
        spaceBetween={30}
        centeredSlides={true}
        modules={[ Navigation ]}
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
        }}  // Responsive breakpoints for different screen sizes
      >
          {productCatagories.map((catagory) => (
            <SwiperSlide key={catagory.id}>
            <CatagoryCard  catagory={catagory} />
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
        <div className="flex justify-center mt-8">
        <Link to="#" className="inline-flex items-center text-lg text-earthy-brown hover:underline">
      View all
    <svg className="w-3.5 h-3.5 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </Link>
  </div>
      </section>
    );
};

export default CatagoriesSectionHome;
