import React from 'react';
import { hubs, products } from "../constants";
import DistrictPriceCard from '../cards/DistrictPriceCard';

const DistrictsByCategory = ({ categoryId }) => {
  // Filter products based on selected categoryId
  const productsInCategory = products.filter((product) => product.category === parseInt(categoryId));

  // Group products by district and calculate average price, highest price, lowest price, and count
  const districtDetails = hubs.reduce((acc, hub) => {
    const hubProducts = productsInCategory.filter((product) => product.hub === hub.id);

    if (hubProducts.length > 0) {
      // Calculate the average price for this district
      const totalPrice = hubProducts.reduce((sum, product) => sum + product.price, 0);
      const avgPrice = totalPrice / hubProducts.length;

      // Find the highest and lowest price in this district
      const highestPrice = Math.max(...hubProducts.map((product) => product.price));
      const lowestPrice = Math.min(...hubProducts.map((product) => product.price));

      acc.push({
        district: hub.district,
        avgPrice: avgPrice.toFixed(2),
        productCount: hubProducts.length,
        highestPrice,
        lowestPrice,
      });
    }

    return acc;
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="lg:w-3/4 w-full p-4">
        <h2 className="text-2xl font-bold text-earthy-brown mb-6">Average price in all districts</h2>
        <div className="flex mx-auto pb-10 px-3 sm:px-0 pt-[50px] max-w-7xl justify-center flex-wrap gap-5">
          {/* Render DistrictPriceCard for each district */}
          {districtDetails.map((district, index) => (
            <DistrictPriceCard
              key={index}
              district={district.district}
              avgPrice={district.avgPrice}
              productCount={district.productCount}
              highestPrice={district.highestPrice}
              lowestPrice={district.lowestPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistrictsByCategory;
