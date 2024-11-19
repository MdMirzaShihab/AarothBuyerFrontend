import HeroSection from "../components/HeroSection";
import Marketplace from "../components/Marketplace";
import SellerDashboard from "../components/SellerDashboard";
import HubsInfo from "../components/HubsInfo";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Marketplace />
      <HubsInfo />
      <Footer />
    </div>
  );
}
