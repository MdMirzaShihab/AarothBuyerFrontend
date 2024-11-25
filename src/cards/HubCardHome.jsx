import React from "react";
import { HubImg } from "../assets";

const HubCardHome = ({ hubs }) => {
  return (
    <div
      className={`flex flex-col items-center group border p-4 w-60 group bg-gradient-to-b from-transparent via-transparent to-earthy-tan relative rounded-xl bg-clip-border  text-gray-700 shadow-md h-full transition-transform duration-700 transform hover:-translate-y-3`}>
      <img
        src={HubImg}
        alt={`${hubs.name}'s picture`}
        className={`w-40 p-5 group-hover:scale-110 transition duration-500 ease-in-out`}
      />
      <h3 className="font-bold text-2xl pb-2">{hubs.name}</h3>
      <p>{hubs.district}</p>
    </div>
  );
};

export default HubCardHome;
