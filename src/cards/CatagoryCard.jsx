import React from "react";

const CatagoryCard = ({ catagory }) => {
  return (
    <div
      className={`group bg-gradient-to-b pt-20 from-transparent via-transparent to-earthy-beige relative flex flex-col rounded-xl bg-clip-border  text-gray-700 shadow-md h-full transition-transform duration-700 transform hover:-translate-y-3`}>
      <div className="relative mx-4 group-hover:bg-earthy-tan bg-clip-border shadow-xl rounded-3xl object-cover transition duration-500 ease-in-out">
        <div className="object-contain">
          <img
            src={catagory.image}
            alt={`${catagory.name}'s picture`}
            className={`-mt-20 p-2 `}
          />
        </div>
      </div>
      <div className="p-3 text-center">
        <h4
          className={` block text-earthy-brown font-bold font-sans text-2xl leading-snug tracking-normal antialiased`}>
          {catagory.name}
        </h4>
      </div>
    </div>
  );
};

export default CatagoryCard;
