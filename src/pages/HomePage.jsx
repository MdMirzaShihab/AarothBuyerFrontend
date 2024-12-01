import HeroSection from "../components/HeroSection";
import Categories from "../components/CategoriesSectionHome";
import Products from "../components/ProductSectionHome";
import Hubs from "../components/HubsSectionHome";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Hubs />
      <Products />
    </div>
  );
}
