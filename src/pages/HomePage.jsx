import HeroSection from "../components/HeroSection";
import Catagories from "../components/CatagoriesSectionHome";
import Products from "../components/ProductSectionHome";
import Hubs from "../components/HubsSectionHome";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Catagories />
      <Hubs />
      <Products />
    </div>
  );
}
