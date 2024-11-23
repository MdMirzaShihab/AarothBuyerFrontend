import { Link } from "react-router-dom";
import HubCardHome from "../cards/HubCardHome";
import { hubs } from "../constants";
import { useEffect, useState } from "react";



const HubsSectionHome = () => {
    // State to manage the search term
    const [searchTerm, setSearchTerm] = useState("");
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

    // Handle search input change
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    // Filter hubs based on the search term
    useEffect(() => {
      const filtered = allHubs.filter(
        (hub) =>
          hub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hub.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hub.district.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHubs(filtered);
    }, [searchTerm]);


  return (
    <section className="pb-10 pt-4 px-2 bg-earthy-beige">
      <div className="flex flex-wrap justify-center gap-2 mt-2">
      <h2 className="text-2xl font-bold text-earthy-brown">Hubs</h2>
       {/* Search Bar */}
       <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search by name, location, or district"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded-md"
        />
      </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {filteredHubs.map(( hub ) => (
          <HubCardHome key={hub.hubId} hubs = {hub} />
        ))}
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
  