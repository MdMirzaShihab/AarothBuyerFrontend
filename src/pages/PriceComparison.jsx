import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productCategories } from "../constants"; // Import your productCategories data
import DivitionsByCategory from '../components/DivitionsByCategory';
import DistrictsByCategory from '../components/DistrictsByCategory';
import SubDistrictsByCategory from '../components/SubDistrictsByCategory';

const PriceComparison = () => {
  const { categoryId } = useParams(); // Get categoryId from the URL params
  const navigate = useNavigate(); // Initialize navigate hook
  const category = productCategories.find((cat) => cat.id === parseInt(categoryId)); // Find the category based on categoryId
  const [selectedTab, setSelectedTab] = useState('division'); // Default tab is 'division'

  // Change the selected tab
  const handleTabChange = (tab) => {
    setSelectedTab(tab); // Set the selected tab
  };

  // Handle navigation back to the main category list
  const handleBack = () => {
    navigate('/'); // Navigate back to the main page (categories list)
  };

  return (
    <div className="container mx-auto p-6">

      {/* Category Name */}
      <div className='text-4xl font-bold text-earthy-brown text-center mb-6'>
        {productCategories.find((cat) => cat.id === parseInt(categoryId))?.name || 'Category Not Found'}
      </div>

      {/* Button Group to switch between Division, District, or Subdistrict */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mx-2 rounded-lg ${selectedTab === 'division' ? 'bg-earthy-yellow text-white' : 'bg-earthy-beige text-earthy-brown'}`}
          onClick={() => handleTabChange('division')}
        >
          Division
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-lg ${selectedTab === 'district' ? 'bg-earthy-yellow text-white' : 'bg-earthy-beige text-earthy-brown'}`}
          onClick={() => handleTabChange('district')}
        >
          District
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-lg ${selectedTab === 'subdistrict' ? 'bg-earthy-yellow text-white' : 'bg-earthy-beige text-earthy-brown'}`}
          onClick={() => handleTabChange('subdistrict')}
        >
          Subdistrict
        </button>
      </div>

      {/* Render the appropriate component based on the selected tab */}
      <div>
        {selectedTab === 'division' && <DivitionsByCategory categoryId={categoryId} />}
        {selectedTab === 'district' && <DistrictsByCategory categoryId={categoryId} />}
        {selectedTab === 'subdistrict' && <SubDistrictsByCategory categoryId={categoryId} />}
      </div>
    </div>
  );
};

export default PriceComparison;
