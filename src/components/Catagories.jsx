import { Link } from "react-router-dom";
import { productCatagories } from "../constants";



const CatagoryCard = ({ catagory }) => {
  
return (

   <div
      className={`group bg-gradient-to-b from-transparent via-transparent to-earthy-beige relative flex flex-col rounded-xl bg-clip-border  text-gray-700 shadow-md h-full transition-transform duration-700 transform hover:-translate-y-3`}>
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-clip-border text-gray-700 shadow-lg">
 
          <img
            src={catagory.image}
            alt={`${catagory.name}'s picture`}
            className={`w-40 p-5 group-hover:bg-earthy-tan shadow-xl rounded-3xl object-cover transition duration-500 ease-in-out`}
          />

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

const Catagories = () => {

    return (
      <section className="py-16 px-2 md:px-16">
        <h2 className="text-4xl text-center font-bold text-earthy-brown">Catagories</h2>
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          {productCatagories.map((catagory) => (
            <CatagoryCard key={catagory.id} catagory={catagory} />
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
};


export default Catagories;
