import { ChiliImg, DaalImg, FreshChiniguraChal, FreshRedSmallOnions, FreshShamratOnion, FreshThaiTomatoes, GarlicImg, GreenDeshiChili, LargeFreshGarlic, OnionImg, PotatoImg, RedLargeOnions, RiceImg, RoundLargePotatoes, SmallPotatos, TomatoImg } from "../assets";


const productCatagories =  [
  {
    "id": 1,
    "name": "Tomato",
    "image": TomatoImg,
  },
  {
    "id": 2,
    "name": "Potato",
    "image": PotatoImg,
  },
  {
    "id": 3,
    "name": "Onion",
    "image": OnionImg,
  },
  {
    "id": 4,
    "name": "Rice",
    "image": RiceImg,
  },
  {
    "id": 5,
    "name": "Chili",
    "image": ChiliImg,
  },
  {
    "id": 6,
    "name": "Garlic",
    "image": GarlicImg,
  },
  {
    "id": 7,
    "name": "Daal",
    "image": DaalImg,
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
    {
      division: "Dhaka",
      districts: [
        {
          district: "Rajbari",
          hubs: [
            { hubId: 1, name: "Baliakandi", location: "Rajbari, Dhaka" },
            { hubId: 2, name: "Goalondo", location: "Rajbari, Dhaka" },
            { hubId: 3, name: "Sadar", location: "Rajbari, Dhaka" },
          ],
        },
        {
          district: "Gazipur",
          hubs: [
            { hubId: 4, name: "Joydevpur", location: "Gazipur, Dhaka" },
            { hubId: 5, name: "Kaliakair", location: "Gazipur, Dhaka" },
          ],
        },
        {
          district: "Narayanganj",
          hubs: [
            { hubId: 6, name: "Sadar", location: "Narayanganj, Dhaka" },
            { hubId: 7, name: "Bandhan", location: "Narayanganj, Dhaka" },
          ],
        },
      ],
    },
    {
      division: "Chattogram",
      districts: [
        {
          district: "Chittagong",
          hubs: [
            { hubId: 8, name: "Patenga", location: "Chittagong, Chattogram" },
            { hubId: 9, name: "Foy's Lake", location: "Chittagong, Chattogram" },
          ],
        },
        {
          district: "Cox's Bazar",
          hubs: [
            { hubId: 10, name: "Cox's Bazar", location: "Cox's Bazar, Chattogram" },
            { hubId: 11, name: "Teknaf", location: "Cox's Bazar, Chattogram" },
          ],
        },
      ],
    },
    {
      division: "Khulna",
      districts: [
        {
          district: "Khulna",
          hubs: [
            { hubId: 12, name: "Sadar", location: "Khulna, Khulna" },
            { hubId: 13, name: "Dighalia", location: "Khulna, Khulna" },
          ],
        },
        {
          district: "Jessore",
          hubs: [
            { hubId: 14, name: "Sadar", location: "Jessore, Khulna" },
            { hubId: 15, name: "Chaugachha", location: "Jessore, Khulna" },
          ],
        },
      ],
    },
    {
      division: "Rajshahi",
      districts: [
        {
          district: "Rajshahi",
          hubs: [
            { hubId: 16, name: "Sadar", location: "Rajshahi, Rajshahi" },
            { hubId: 17, name: "Mohanpur", location: "Rajshahi, Rajshahi" },
          ],
        },
        {
          district: "Bogura",
          hubs: [
            { hubId: 18, name: "Sadar", location: "Bogura, Rajshahi" },
            { hubId: 19, name: "Shibganj", location: "Bogura, Rajshahi" },
          ],
        },
      ],
    },
    {
      division: "Barishal",
      districts: [
        {
          district: "Barishal",
          hubs: [
            { hubId: 20, name: "Sadar", location: "Barishal, Barishal" },
            { hubId: 21, name: "Muladi", location: "Barishal, Barishal" },
          ],
        },
      ],
    },
    {
      division: "Sylhet",
      districts: [
        {
          district: "Sylhet",
          hubs: [
            { hubId: 22, name: "Sadar", location: "Sylhet, Sylhet" },
            { hubId: 23, name: "Moulvibazar", location: "Sylhet, Sylhet" },
          ],
        },
        {
          district: "Moulvibazar",
          hubs: [
            { hubId: 24, name: "Sadar", location: "Moulvibazar, Sylhet" },
            { hubId: 25, name: "Kulaura", location: "Moulvibazar, Sylhet" },
          ],
        },
      ],
    },
    {
      division: "Mymensingh",
      districts: [
        {
          district: "Mymensingh",
          hubs: [
            { hubId: 26, name: "Sadar", location: "Mymensingh, Mymensingh" },
            { hubId: 27, name: "Trishal", location: "Mymensingh, Mymensingh" },
          ],
        },
        {
          district: "Jamalpur",
          hubs: [
            { hubId: 28, name: "Sadar", location: "Jamalpur, Mymensingh" },
            { hubId: 29, name: "Baksiganj", location: "Jamalpur, Mymensingh" },
          ],
        },
      ],
    },
    {
      division: "Rangpur",
      districts: [
        {
          district: "Rangpur",
          hubs: [
            { hubId: 30, name: "Sadar", location: "Rangpur, Rangpur" },
            { hubId: 31, name: "Kurigram", location: "Rangpur, Rangpur" },
          ],
        },
        {
          district: "Dinajpur",
          hubs: [
            { hubId: 32, name: "Sadar", location: "Dinajpur, Rangpur" },
            { hubId: 33, name: "Birampur", location: "Dinajpur, Rangpur" },
          ],
        },
      ],
    },
  ];
  


  export { products, hubs, productCatagories };