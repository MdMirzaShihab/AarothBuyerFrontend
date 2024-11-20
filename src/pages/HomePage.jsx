import HeroSection from "../components/HeroSection";
import Catagories from "../components/Catagories";
import HubsInfo from "../components/HubsInfo";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Catagories />
      <HubsInfo />
      <Footer />
    </div>
  );
}
