import { products } from "../constants";



const ProductCard = ({ products }) => {
  
return (

   <div
      className={`group bg-gradient-to-b from-transparent via-transparent to-earthy-beige relative flex w-72 flex-col rounded-xl bg-clip-border  text-gray-700 shadow-md h-full transition-transform duration-700 transform hover:-translate-y-3`}>
      <div className="relative mx-4 mt-4 h-100 overflow-hidden rounded-xl bg-clip-border text-gray-700 shadow-lg">
 
          <img
            src={products.image}
            alt={`${products.name}'s picture`}
            className={`w-full group-hover:bg-earthy-tan shadow-xl rounded-3xl object-cover`}
          />

      </div>
      <div className="p-6 text-center">
        <h4
          className={`mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased`}>
          {products.name}
        </h4>
        <p className="block bg-gradient-to-tr from-gray-400 to-gray-600 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
          <strong>Location:</strong> {products.location}
        </p>
        <p className="block bg-gradient-to-tr from-gray-400 to-gray-600 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
          <strong>Available Quantity:</strong> {products.quantity} kg
        </p>
        <p className="block bg-gradient-to-tr from-gray-400 to-gray-600 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
          <strong>price:</strong> {products.price} per kg
        </p>
      </div>
      <div className="flex justify-center gap-7 p-6 pt-2"></div>
   </div>
);
};

const Marketplace = () => {
    return (
      <section className="py-16 px-8">
        <h2 className="text-2xl font-bold text-earthy-brown">Marketplace</h2>
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          {products.map((products) => (
            <ProductCard key={products.id} products={products} />
          ))}
        </div>
      </section>
    );
};


export default Marketplace;
