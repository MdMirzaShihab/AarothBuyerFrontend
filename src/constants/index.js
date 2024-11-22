import { ChiliImg, DaalImg, FreshChiniguraChal, FreshRedSmallOnions, FreshShamratOnion, FreshThaiTomatoes, GarlicImg, GreenDeshiChili, LargeFreshGarlic, OnionImg, PotatoImg, RedLargeOnions, RiceImg, RoundLargePotatoes, SmallPotatos, TomatoImg } from "../assets";


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
      "name": "Fresh Thai Tomatoes",
      "catagory": "Tomato",
      "image": FreshThaiTomatoes,
      "minQuantity": 20,
      "maxQuantity": 800,
      "location": "Rajshahi",
      "price": 117,
      "shipping": 3
    },
    {
      "id": 2,
      "name": "Round large potatoes",
      "catagory": "Potato",
      "image": RoundLargePotatoes,
      "minQuantity": 50,
      "maxQuantity": 1000,
      "location": "Bogura",
      "price": 153,
      "shipping": 3
    },
    {
      "id": 3,
      "name": "Red large Onions",
      "catagory": "Onion",
      "image": RedLargeOnions,
      "minQuantity": 15,
      "maxQuantity": 600,
      "location": "Rajbari",
      "price": 105,
      "shipping": 2.5
    },
    {
      "id": 4,
      "name": "Fresh Chinigura Chal",
      "catagory": "Rice",
      "image": FreshChiniguraChal,
      "minQuantity": 10,
      "maxQuantity": 400,
      "location": "Mymensingh",
      "price": 149,
      "shipping": 2
    },
    {
      "id": 5,
      "name": "Green Deshi Chili",
      "catagory": "Chili",
      "image": GreenDeshiChili,
      "minQuantity": 10,
      "maxQuantity": 200,
      "location": "Cuadanga",
      "price": 96,
      "shipping": 1.5
    },
    {
      "id": 6,
      "name": "Large Fresh Garlic",
      "catagory": "Garlic",
      "image": LargeFreshGarlic, 
      "minQuantity": 20,
      "maxQuantity": 600,
      "location": "Rajbari",
      "price": 141,
      "shipping": 2
    },
    {
      "id": 7,
      "name": "Fresh Shamrat Onion",
      "catagory": "Onion",
      "image": FreshShamratOnion,
      "minQuantity": 20,
      "maxQuantity": 600,
      "location": "Rajbari",
      "price": 115,
      "shipping": 2
    },
    {
      "id": 8,
      "name": "Small Potatos",
      "catagory": "Potato",
      "image": SmallPotatos,
      "minQuantity": 20,
      "maxQuantity": 600,
      "location": "Rajbari",
      "price": 112,
      "shipping": 2
    },
    {
      "id": 9,
      "name": "Fresh Red Small Onions",
      "catagory": "Onion",
      "image": FreshRedSmallOnions,
      "minQuantity": 20,
      "maxQuantity": 600,
      "location": "Rajbari",
      "price": 105,
      "shipping": 2
    }

  ]

  const hubs = [
    { hubId: 1, name: "Baliakandi", location: "Rajbari, Dhaka" },
    { hubId: 2, name: "Joydevpur", location: "Gazipur, Dhaka" },
    { hubId: 3, name: "Nandail", location: "Nandail, Mymensingh" },
  ];


  export { products, hubs, productCatagories };