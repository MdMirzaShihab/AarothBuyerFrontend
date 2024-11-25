import { Leaves } from "../assets";

const HeroSection = () => {
  return (
    <section className="bg-earthy-beige py-16 px-8 text-center">
      <h1 className="text-4xl font-bold text-olive">
        Welcome to
        <span className="text-forest"> Aaroth.com</span>
      </h1>
      <img src={Leaves} alt="Aaroth Logo" className="mx-auto mt-4" />
      <p className="text-olive mt-4">
        An online mega marketplace for agricultural products.
      </p>
      <div className="mt-8 flex justify-center gap-4"></div>
    </section>
  );
};

export default HeroSection;
