import { Link } from "react-router-dom";
import HubCardHome from "../cards/HubCardHome";
import { hubs } from "../constants";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation"; // Import navigation styles (if you use navigation)
import { Navigation } from "swiper/modules";

const HubsSectionHome = () => {
  // State to manage the search term
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredHubs, setFilteredHubs] = useState(hubs);

  // Get unique divisions and districts
  const divisions = Array.from(new Set(hubs.map((hub) => hub.division)));
  const districts = Array.from(new Set(hubs.map((hub) => hub.district)));

  // Filter hubs based on selected filters
  const filterHubs = () => {
    let filtered = hubs;

    // Filter by division
    if (selectedDivision) {
      filtered = filtered.filter((hub) => hub.division === selectedDivision);
    }

    // Filter by district
    if (selectedDistrict) {
      filtered = filtered.filter((hub) => hub.district === selectedDistrict);
    }

    // Filter by search query (location, division, or district)
    if (searchQuery) {
      filtered = filtered.filter(
        (hub) =>
          hub.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hub.division.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hub.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hub.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredHubs(filtered);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle division change
  const handleDivisionChange = (selectedOption) => {
    setSelectedDivision(selectedOption ? selectedOption.value : null);
    setSelectedDistrict(null); // Reset district when division changes
  };

  // Handle district change
  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption ? selectedOption.value : null);
  };

  // Apply filtering whenever filters or search query changes
  useEffect(() => {
    filterHubs();
  }, [selectedDivision, selectedDistrict, searchQuery]);

  // Division and district options for the select inputs
  const divisionOptions = divisions.map((division) => ({
    value: division,
    label: division,
  }));

  const districtOptions = districts
    .filter((district) => {
      if (selectedDivision) {
        // Only show districts related to the selected division
        return hubs.some(
          (hub) =>
            hub.district === district && hub.division === selectedDivision
        );
      }
      return true;
    })
    .map((district) => ({
      value: district,
      label: district,
    }));

  return (
    <section className="pb-10 pt-4 px-2 bg-earthy-beige">
      <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-2xl font-bold text-earthy-brown">Hubs</h2>
            <input
              type="text"
              placeholder="Search by name, location, or district"
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 border rounded-md"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            {/* Division Select */}
            <Select
              options={divisionOptions}
              value={divisionOptions.find(
                (option) => option.value === selectedDivision
              )}
              onChange={handleDivisionChange}
              isClearable
              placeholder="Select Division"
              className="w-30 md:w-56 z-10"
            />

            {/* District Select */}
            <Select
              options={districtOptions}
              value={districtOptions.find(
                (option) => option.value === selectedDistrict
              )}
              onChange={handleDistrictChange}
              isClearable
              placeholder="Select District"
              className="w-30 md:w-56 z-10"
              isDisabled={!selectedDivision} // Disable District select until Division is selected
            />
          </div>
        </div>
      </div>

      <div className="mt-8 ">
        {/* Swiper Container */}
        <Swiper
          loop={true} // Enable looping
          navigation={true} // Enable navigation arrows
          centeredSlides={true}
          modules={[Navigation]}
          breakpoints={{
            1440: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 4,
            },
            480: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }} // Responsive breakpoints for different screen sizes
        >
          {filteredHubs.map((hub) => (
            <SwiperSlide key={hub.id}>
              <HubCardHome hubs={hub} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="#"
          className="inline-flex items-center text-lg text-earthy-brown hover:underline">
          View all
          <svg
            className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HubsSectionHome;
