import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BuyerPage from "./pages/BuyerPage";
import SellerPage from "./pages/SellerPage";
import AllProducts from "./pages/AllProductsPage";
import ProductDetails from "./pages/ProductDetails";
import CategoriesByHub from "./pages/CategoriesByHub";
import ProductsByHubAndCategory from "./components/ProductsByHubAndCategory";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/hubdetails/:hubId" element={<CategoriesByHub />} />
        <Route
          path="/hubdetails/:hubId/category/:categoryId"
          element={<ProductsByHubAndCategory />} // Route for filtered products page
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
