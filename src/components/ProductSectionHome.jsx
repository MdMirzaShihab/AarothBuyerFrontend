import React from 'react'
import { Link } from 'react-router-dom';

const ProductSectionHome = () => {
  return (
    <div>
      <Link  to={`/products`}>
        <p className=" text-center underline text-earthy-brown">Product Page</p></Link>
    </div>
  )
}

export default ProductSectionHome