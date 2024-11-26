import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../constants';
import { vendorProfiles } from '../constants';
import { productCatagories } from '../constants';
import { hubs } from '../constants';

const ProductDetails = () => {
  const { productId } = useParams();

  // Find the product based on the productId in the URL
  const product = products.find((product) => product.id === parseInt(productId));

  // Find the corresponding vendor profile
  const vendor = vendorProfiles.find((vendor) => vendor.id === product.vendor);

  // Find the corresponding product category
  const category = productCatagories.find((category) => category.id === product.catagory);

  // Find the corresponding hub
  const hub = hubs.find((hub) => hub.id === product.hub);

  // State for selected quantity
  const [quantity, setQuantity] = useState(product.minQuantity);

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(product.image[0]);

  // Calculate remaining quantity
  const remainingQuantity = product.maxQuantity - product.sold;

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = Math.min(Math.max(e.target.value, product.minQuantity), remainingQuantity); // Ensure value is within range
    setQuantity(value);
  };

  // Add to Cart (this could later be connected to a state management or cart system)
  const addToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to the cart`);
  };

  // Calculate the progress of sold vs. max quantity
  const soldPercentage = (product.sold / product.maxQuantity) * 100;

  return (
    <section className="text-gray-700 body-font overflow-hidden min-h-screen bg-earthy-beige">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Product Image Gallery */}
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            {/* Main Image */}
            <div className="w-full mb-4">
              <img
                alt={product.name}
                className="w-full h-auto object-contain rounded-lg border border-earthy-tan"
                src={selectedImage} // Display the selected image
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {product.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Product image ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105 border ${
                    img === selectedImage ? 'border-olive' : 'border-earthy-tan'
                  }`}
                  onClick={() => setSelectedImage(img)} // Update selected image on click
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* Product Title */}
            <h2 className="text-sm title-font text-olive tracking-widest">{category?.name}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>

            {/* Rating */}
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    fill={index < vendor?.Rating ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
                <span className="text-gray-600 ml-3">{vendor?.Rating} Rating</span>
              </div>
              <div className="mr-3">Vendor: {vendor?.name}</div>
            </div>

            {/* Product Description */}
            <p className="leading-relaxed">{product.description}</p>

            {/* Hub Information */}
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold text-gray-700">Hub:</span>
              <span className="font-semibold text-olive">{hub?.name}, {hub?.district}</span>
            </div>

            {/* Remaining Quantity & Progress Bar */}
            <div className="flex flex-col mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg text-gray-700">Remaining Quantity:</span>
                <span className="font-semibold text-olive">{remainingQuantity}kg left</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-lg">
                <div
                  className="bg-forest h-2 rounded-lg"
                  style={{ width: `${soldPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>{product.sold}kg sold</span>
                <span>{product.maxQuantity}kg capasity</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-earthy-tan mb-5">
              <div className="flex items-center gap-4">
                <label htmlFor="quantity" className="text-lg text-forest">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  min={product.minQuantity}
                  max={remainingQuantity}
                  onChange={handleQuantityChange}
                  className="w-20 p-2 border border-olive rounded-md text-gray-800"
                />
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">৳ {product.price}</span>
              <button
                onClick={addToCart}
                className="flex ml-auto text-white bg-olive border-0 py-2 px-6 focus:outline-none hover:bg-earthy-tan hover:text-earthy-brown rounded"
              >
                Add to Cart
              </button>
            </div>

            {/* Location and Vendor Info */}
            <div className="flex mt-6">
              <span className="text-olive">Hub Location: {hub?.location}, {hub?.subdistrict}, {hub?.district}, {hub?.division}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
