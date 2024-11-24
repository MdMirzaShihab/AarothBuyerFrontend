import { Link } from "react-router-dom";
import HubCardHome from "../cards/HubCardHome";
import { hubs } from "../constants";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import navigation styles (if you use navigation)
import { Navigation } from "swiper/modules";



const HubsSectionHome = () => {
    // State to manage the search term
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [filteredHubs, setFilteredHubs] = useState([]);
  

  const allHubs = hubs.flatMap(division => 
    division.districts.flatMap(district => 
      district.hubs.map(hub => ({
        ...hub,
        district: district.district,
        division: division.division,
      }))
    )
  );

    // Options for Division select dropdown
    const divisionOptions = hubs.map((division) => ({
      value: division.division,
      label: division.division,
    }));


  // Options for District select dropdown, based on selected Division
  const getDistrictOptions = () => {
    if (!selectedDivision) return [];
    const division = hubs.find((div) => div.division === selectedDivision);
    const districtOptions = division?.districts.map((district) => ({
      value: district.district,
      label: district.district,
    })) || [];
    return districtOptions;
  };

    // Handle search input change
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };

      // Handle division select change
  const handleDivisionChange = (selectedOption) => {
    setSelectedDivision(selectedOption?.value || null);
    setSelectedDistrict(null); // Reset district when division changes
  };

  // Handle district select change
  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption?.value || null);
  };
  
  // Filter hubs based on search term, division, and district
  useEffect(() => {
    const filtered = allHubs.filter(
      (hub) =>
        (hub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hub.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hub.district.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!selectedDivision || hub.division === selectedDivision) &&
        (!selectedDistrict || hub.district === selectedDistrict)
    );
    setFilteredHubs(filtered);
  }, [searchTerm, selectedDivision, selectedDistrict]);


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
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded-md"
        />
        </div>
        <div className="flex justify-center items-center gap-2">

                {/* Division Select */}
          <Select
          options={divisionOptions}
          value={divisionOptions.find((option) => option.value === selectedDivision)}
          onChange={handleDivisionChange}
          isClearable
          placeholder="Select Division"
          className="w-30 md:w-56 z-10"
        />

        {/* District Select */}
        <Select
          options={getDistrictOptions()}
          value={getDistrictOptions().find((option) => option.value === selectedDistrict)}
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
        loop={true}         // Enable looping
        navigation={true}  // Enable navigation arrows
        centeredSlides={true}
        modules={[ Navigation ]}
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
        }}  // Responsive breakpoints for different screen sizes
      >
        {filteredHubs.map((hub) => (
          <SwiperSlide key={hub.hubId}>
            <HubCardHome hubs={hub} />
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
}

export default HubsSectionHome;
  