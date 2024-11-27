import React from "react";
import { useParams } from "react-router-dom";
import { hubs, products } from "../constants";
import ProductCard from "../cards/ProductCard";

const CatagoriesByHub = () => {
  const { hubId } = useParams();

  const hub = hubs.find((hub) => hub.id === parseInt(hubId));

  const productsInHub = products.filter((product) => {product.hub === hubId});
console.log(productsInHub);

  return (
  <div>
    <h1>Hub Name {hub.name}</h1>
    <p> Hub location: {hub.location}, {hub.subdistrict}, {hub.district}, {hub.division} </p>
    <p> Products in this hub: {productsInHub.length} </p>
    {productsInHub.map((product) => (
      <ProductCard key={product.id} product={product} hub={hub} />
    ))}


  
    
  </div>
)
};

export default CatagoriesByHub;
