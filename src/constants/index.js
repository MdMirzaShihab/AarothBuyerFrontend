import { ChiliImg, DaalImg, GarlicImg, OnionImg, PotatoImg, RiceImg, TomatoImg } from "../assets";


const productCatagories =  [
  {
    "id": 1,
    "name": "Tomato",
    "image": TomatoImg,
    "location": "Rajshahi",
    "price": 2.5
  },
  {
    "id": 2,
    "name": "Potato",
    "image": PotatoImg,
    "Link": "/potatoes",
  },
  {
    "id": 3,
    "name": "Onion",
    "image": OnionImg,
    "location": "Rajbari",
    "price": 1.5
  },
  {
    "id": 4,
    "name": "Rice",
    "image": RiceImg,
    "location": "Rajbari",
    "price": 1.5
  },
  {
    "id": 5,
    "name": "Chili",
    "image": ChiliImg,
    "location": "Rajbari",
    "price": 1.5
  },
  {
    "id": 6,
    "name": "Garlic",
    "image": GarlicImg,
    "location": "Rajbari",
    "price": 1.5
  },
  {
    "id": 7,
    "name": "Daal",
    "image": DaalImg,
    "location": "Rajbari",
    "price": 1.5
  }
]
    
  const products =  [
    {
      "id": 1,
      "name": "Tomatoes",
      "catagory": "Tomato",
      "image": TomatoImg,
      "minQuantity": 200,
      "maxQuantity": 500,
      "location": "Rajshahi",
      "price": 2.5
    },
    {
      "id": 2,
      "name": "Potatoes",
      "catagory": "Potato",
      "image": PotatoImg,
      "minQuantity": 500,
      "maxQuantity": 1000,
      "location": "Bogura",
      "price": 1.2
    },
    {
      "id": 3,
      "name": "Onions",
      "catagory": "Onion",
      "image": OnionImg,
      "minQuantity": 300,
      "maxQuantity": 600,
      "location": "Rajbari",
      "price": 1.5
    },
    {
      "id": 4,
      "name": "Rice",
      "catagory": "Rice",
      "image": RiceImg,
      "minQuantity": 300,
      "maxQuantity": 600,
      "location": "Mymensingh",
      "price": 1.5
    },
    {
      "id": 5,
      "name": "Chili",
      "catagory": "Chili",
      "image": ChiliImg,
      "minQuantity": 300,
      "maxQuantity": 600,
      "location": "Cuadanga",
      "price": 1.5
    },
    {
      "id": 6,
      "name": "Garlic",
      "catagory": "Garlic",
      "image": GarlicImg, 
      "minQuantity": 300,
      "maxQuantity": 600,
      "location": "Rajbari",  
      "price": 1.5
    } 
  ]

  const hubs = [
    { hubId: 1, name: "Baliakandi", location: "Rajbari, Dhaka" },
    { hubId: 2, name: "Joydevpur", location: "Gazipur, Dhaka" },
    { hubId: 3, name: "Nandail", location: "Nandail, Mymensingh" },
  ];


  export { products, hubs, productCatagories };