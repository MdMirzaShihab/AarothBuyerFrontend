import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src= {Logo} alt="Logo" className="h-8" />
            <span className="text-2xl font-bold text-earthy-brown">Aaroth</span>
          </Link>

          {/* Navbar Menu for Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Mega Menu Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleDropdown} 
                className="text-lg font-medium text-earthy-brown hover:text-earthy-beige hover:bg-earthy-yellow rounded p-2 transition duration-300 ease-in-out"
              >
                Categories
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-80  bg-white border border-gray-300 shadow-lg rounded-lg">
                  <div className="grid grid-cols-3 gap-12 p-4">
                    <div>
                      <h3 className="text-xl font-semibold text-earthy-brown">Vegetable</h3>
                      <ul className="mt-2 space-y-2">
                        <li><Link to="/fashion/onion" className="text-earthy-brown hover:text-earthy-yellow">Onion</Link></li>
                        <li><Link to="/fashion/potato" className="text-earthy-brown hover:text-earthy-yellow">Potato</Link></li>
                        <li><Link to="/fashion/tomato" className="text-earthy-brown hover:text-earthy-yellow">Tomato</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-earthy-brown">Crops</h3>
                      <ul className="mt-2 space-y-2">
                        <li><Link to="/electronics/rice" className="text-earthy-brown hover:text-earthy-yellow">Rice</Link></li>
                        <li><Link to="/electronics/wheat" className="text-earthy-brown hover:text-earthy-yellow">Wheat</Link></li>
                        <li><Link to="/electronics/sugarcane" className="text-earthy-brown hover:text-earthy-yellow">Sugarcane</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-earthy-brown">Spices</h3>
                      <ul className="mt-2 space-y-2">
                        <li><Link to="/home/ginger" className="text-earthy-brown hover:text-earthy-yellow">Ginger</Link></li>
                        <li><Link to="/home/garlic" className="text-earthy-brown hover:text-earthy-yellow">Garlic</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>




            {/* Seller Button */}
            <Link 
              to="/seller" 
              className="px-4 py-2 bg-earthy-tan text-earthy-brown rounded-full hover:bg-earthy-yellow hover:text-white"
            >
              I am a Seller
            </Link>



            {/* Cart */}
            <Link to="/cart" className="relative">
            <svg className="w-[30px] h-[30px] fill-[#8c644a]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"></path>

</svg>
            </Link>


            {/* Sign In/Sign Out Button */}
            <button className="text-lg font-bold hover:font-semibold text-earthy-brown hover:bg-earthy-beige p-2 rounded-xl">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-earthy-brown">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <Link to="/categories" className="text-lg text-earthy-brown">Categories</Link>
            <Link to="/seller" className="px-4 py-2 bg-earthy-yellow text-earthy-brown rounded-full hover:bg-earthy-tan">
              I am a Seller
            </Link>
            <Link to="/cart" className="text-lg text-earthy-brown">Cart</Link>
            <button className="text-lg text-earthy-brown hover:text-earthy-yellow">Sign In</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
