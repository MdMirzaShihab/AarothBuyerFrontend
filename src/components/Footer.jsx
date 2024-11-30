import { Link } from "react-router-dom";
import { LogoLight } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-earthy-brown text-earthy-beige">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={LogoLight} alt="Logo" className="h-8" />
              <span className="text-2xl font-bold text-earthy-beige">Aaroth</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-earthy-yellow uppercase">Resources</h2>
              <ul className="text-earthy-beige font-medium">
                <li className="mb-4">
                  <Link to="/about-us" className="hover:underline">About Us</Link>
                </li>
                <li className="mb-4">
                  <Link to="/how-it-works" className="hover:underline">How It Works</Link>
                </li>
                <li className="mb-4">
                  <Link to="/blog" className="hover:underline">Blog</Link>
                </li>
              </ul>
            </div>

            {/* Shop Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-earthy-yellow uppercase">Shop</h2>
              <ul className="text-earthy-beige font-medium">
                <li className="mb-4">
                  <Link to="/shop" className="hover:underline">All Shop</Link>
                </li>
                <li className="mb-4">
                  <Link to="/shop/vegetables" className="hover:underline">Vegetables</Link>
                </li>
                <li className="mb-4">
                  <Link to="/shop/fruits" className="hover:underline">Fruits</Link>
                </li>
                <li className="mb-4">
                  <Link to="/shop/dairy" className="hover:underline">Livestock</Link>
                </li>
              </ul>
            </div>

            {/* Legal & Policies Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-earthy-yellow uppercase">Legal</h2>
              <ul className="text-earthy-beige font-medium">
                <li className="mb-4">
                  <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                </li>
                <li className="mb-4">
                  <Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-earthy-tan sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-earthy-beige sm:text-center">
            © 2023 <Link to="/" className="hover:underline text-earthy-yellow">Aaroth™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Social Media Icons */}
            <a href="https://www.facebook.com/amararothfb" target="_blank" className="text-earthy-beige hover:text-earthy-yellow">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-earthy-beige hover:text-earthy-yellow ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-earthy-beige hover:text-earthy-yellow ms-5">
            <svg className="w-4 h-4" fill="currentColor" aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>

</svg>
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
