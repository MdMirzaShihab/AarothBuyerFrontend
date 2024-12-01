import {
  ChiliImg,
  DaalImg,
  FreshChiniguraChal,
  FreshRedSmallOnions,
  FreshShamratOnion,
  FreshThaiTomatoes,
  GarlicImg,
  GreenDeshiChili,
  LargeFreshGarlic,
  OnionImg,
  PotatoImg,
  RedLargeOnions,
  RiceImg,
  RoundLargePotatoes,
  SmallPotatos,
  TomatoImg,
} from "../assets";

const vendorProfiles = [
  {
    id: 1,
    name: "Bengali Tomatoes",
    Rating: 2,
  },
  {
    id: 2,
    name: "Sorafot Potatoes",
    Rating: 1.5,
  },
  {
    id: 3,
    name: "Joarder Traders",
    Rating: 5,
  },
  {
    id: 4,
    name: "Mina Rice Mills",
    Rating: 4,
  },
  {
    id: 5,
    name: "Deshi Chilis",
    Rating: 4.5,
  },
  {
    id: 6,
    name: "Vagolpur",
    Rating: 2,
  },
];

const productCategories = [
  {
    id: 1,
    name: "Tomato",
    image: TomatoImg,
  },
  {
    id: 2,
    name: "Potato",
    image: PotatoImg,
  },
  {
    id: 3,
    name: "Onion",
    image: OnionImg,
  },
  {
    id: 4,
    name: "Rice",
    image: RiceImg,
  },
  {
    id: 5,
    name: "Chili",
    image: ChiliImg,
  },
  {
    id: 6,
    name: "Garlic",
    image: GarlicImg,
  },
  {
    id: 7,
    name: "Daal",
    image: DaalImg,
  },
];

const products = [
  {
    id: 1,
    name: "Fresh Thai Tomatoes",
    category: 1,
    image: [FreshThaiTomatoes],
    minQuantity: 20,
    sold: 600,
    maxQuantity: 800,
    hub: 17,
    price: 117,
    shipping: 3,
    vendor: 1,
  },
  {
    id: 2,
    name: "Round large potatoes",
    category: 2,
    image: [RoundLargePotatoes],
    minQuantity: 50,
    sold: 850,
    maxQuantity: 1000,
    hub: 19,
    price: 70,
    shipping: 3,
    vendor: 2,
  },
  {
    id: 3,
    name: "Red large Onions",
    category: 3,
    image: [RedLargeOnions],
    minQuantity: 15,
    sold: 60,
    maxQuantity: 600,
    hub: 1,
    price: 105,
    shipping: 2.5,
    vendor: 3,
  },
  {
    id: 4,
    name: "Fresh Chinigura Chal",
    category: 4,
    image: [FreshChiniguraChal],
    minQuantity: 10,
    sold: 330,
    maxQuantity: 400,
    hub: 27,
    price: 130,
    shipping: 2,
    vendor: 4,
  },
  {
    id: 5,
    name: "Green Deshi Chili",
    category: 5,
    image: [GreenDeshiChili],
    minQuantity: 10,
    sold: 40,
    maxQuantity: 200,
    hub: 13,
    price: 96,
    shipping: 1.5,
    vendor: 5,
  },
  {
    id: 6,
    name: "Large Fresh Garlic",
    category: 6,
    image: [LargeFreshGarlic],
    minQuantity: 20,
    sold: 200,
    maxQuantity: 600,
    hub: 2,
    price: 141,
    shipping: 2,
    vendor: 6,
  },
  {
    id: 7,
    name: "Fresh Shamrat Onion",
    category: 3,
    image: [FreshShamratOnion],
    minQuantity: 20,
    sold: 120,
    maxQuantity: 600,
    hub: 1,
    price: 115,
    shipping: 2,
    vendor: 3,
  },
  {
    id: 8,
    name: "Small Potatos",
    category: 2,
    image: [SmallPotatos],
    minQuantity: 20,
    sold: 80,
    maxQuantity: 600,
    hub: 17,
    price: 60,
    shipping: 2,
    vendor: 2,
  },
  {
    id: 9,
    name: "Fresh Red Small Onions",
    category: 3,
    image: [FreshRedSmallOnions, FreshShamratOnion, RedLargeOnions],
    minQuantity: 20,
    sold: 60,
    maxQuantity: 600,
    hub: 1,
    price: 105,
    shipping: 2,
    vendor: 3,
  },
];

const hubs = [
  {
    id: 1,
    name: "শাকবাগান",
    subdistrict: "Baliakandi",
    district: "Rajbari",
    division: "Dhaka",
    location: "45/1 Shakbagan Road",
  },
  {
    id: 2,
    name: "সবজিঘর",
    subdistrict: "Goalondo",
    district: "Rajbari",
    division: "Dhaka",
    location: "89/2 Subji Ghar Road",
  },
  {
    id: 3,
    name: "ফলপ্রথম",
    subdistrict: "Sadar",
    district: "Rajbari",
    division: "Dhaka",
    location: "15/3 Phol Protham Road",
  },
  {
    id: 4,
    name: "শাকবাড়ি",
    subdistrict: "Joydevpur",
    district: "Gazipur",
    division: "Dhaka",
    location: "10/4 Shakbari Road",
  },
  {
    id: 5,
    name: "পানিমেলা",
    subdistrict: "Kaliakair",
    district: "Gazipur",
    division: "Dhaka",
    location: "56/2 Pani Mela Road",
  },
  {
    id: 6,
    name: "সবজি বাজার",
    subdistrict: "Sadar",
    district: "Narayanganj",
    division: "Dhaka",
    location: "32/1 Sabji Bazar Road",
  },
  {
    id: 7,
    name: "সবজির মাঠ",
    subdistrict: "Bandhan",
    district: "Narayanganj",
    division: "Dhaka",
    location: "21/3 Sabjir Math Road",
  },
  {
    id: 8,
    name: "পতেঙ্গা শাকবাগান",
    subdistrict: "Patenga",
    district: "Chittagong",
    division: "Chattogram",
    location: "48/1 Patenga Shakbagan Road",
  },
  {
    id: 9,
    name: "সবজি দালান",
    subdistrict: "Foy's Lake",
    district: "Chittagong",
    division: "Chattogram",
    location: "25/2 Sabji Dalan Road",
  },
  {
    id: 10,
    name: "তাজা শাকসবজি",
    subdistrict: "Cox's Bazar",
    district: "Cox's Bazar",
    division: "Chattogram",
    location: "19/3 Taja Shaksabji Road",
  },
  {
    id: 11,
    name: "সবজি বাজার",
    subdistrict: "Teknaf",
    district: "Cox's Bazar",
    division: "Chattogram",
    location: "40/1 Sabji Bazar Road",
  },
  {
    id: 12,
    name: "সবজি হাট",
    subdistrict: "Sadar",
    district: "Khulna",
    division: "Khulna",
    location: "62/3 Shobji Hat Road",
  },
  {
    id: 13,
    name: "শাক-সবজি সমাহার",
    subdistrict: "Dighalia",
    district: "Khulna",
    division: "Khulna",
    location: "27/4 Shak-Shobji Samahar Road",
  },
  {
    id: 14,
    name: "ঝালমুড়ি বাজার",
    subdistrict: "Sadar",
    district: "Jessore",
    division: "Khulna",
    location: "33/2 Jhalmuri Bazar Road",
  },
  {
    id: 15,
    name: "সবজি ষ্টেশন",
    subdistrict: "Chaugachha",
    district: "Jessore",
    division: "Khulna",
    location: "51/2 Shobji Station Road",
  },
  {
    id: 16,
    name: "তাজা শাকবাগান",
    subdistrict: "Sadar",
    district: "Rajshahi",
    division: "Rajshahi",
    location: "13/1 Taja Shakbagan Road",
  },
  {
    id: 17,
    name: "সবজি পট্টি",
    subdistrict: "Mohanpur",
    district: "Rajshahi",
    division: "Rajshahi",
    location: "38/4 Sabji Patti Road",
  },
  {
    id: 18,
    name: "শাকসবজি ভবন",
    subdistrict: "Sadar",
    district: "Bogura",
    division: "Rajshahi",
    location: "21/5 Shaksabji Bhaban Road",
  },
  {
    id: 19,
    name: "সবজি গলি",
    subdistrict: "Shibganj",
    district: "Bogura",
    division: "Rajshahi",
    location: "11/2 Sabji Goli Road",
  },
  {
    id: 20,
    name: "শাকবাগান বাজার",
    subdistrict: "Sadar",
    district: "Barishal",
    division: "Barishal",
    location: "12/3 Shakbagan Bazar Road",
  },
  {
    id: 21,
    name: "সবজি শাখা",
    subdistrict: "Muladi",
    district: "Barishal",
    division: "Barishal",
    location: "28/2 Sabji Shakha Road",
  },
  {
    id: 22,
    name: "ফলপাতা",
    subdistrict: "Sadar",
    district: "Sylhet",
    division: "Sylhet",
    location: "17/4 Phol Pata Road",
  },
  {
    id: 23,
    name: "তাজা শাক",
    subdistrict: "Moulvibazar",
    district: "Sylhet",
    division: "Sylhet",
    location: "25/1 Taja Shak Road",
  },
  {
    id: 24,
    name: "সবজি মেলা",
    subdistrict: "Sadar",
    district: "Moulvibazar",
    division: "Sylhet",
    location: "42/3 Sabji Mela Road",
  },
  {
    id: 25,
    name: "শাক সেন্টার",
    subdistrict: "Kulaura",
    district: "Moulvibazar",
    division: "Sylhet",
    location: "56/2 Shak Center Road",
  },
  {
    id: 26,
    name: "শাকবাগান মেলা",
    subdistrict: "Sadar",
    district: "Mymensingh",
    division: "Mymensingh",
    location: "33/1 Shakbagan Mela Road",
  },
  {
    id: 27,
    name: "পানিমেলা বাজার",
    subdistrict: "Trishal",
    district: "Mymensingh",
    division: "Mymensingh",
    location: "42/5 Pani Mela Bazar Road",
  },
  {
    id: 28,
    name: "তাজা সবজি",
    subdistrict: "Sadar",
    district: "Jamalpur",
    division: "Mymensingh",
    location: "12/3 Taja Shobji Road",
  },
  {
    id: 29,
    name: "সবজি বাজার",
    subdistrict: "Baksiganj",
    district: "Jamalpur",
    division: "Mymensingh",
    location: "50/2 Sabji Bazar Road",
  },
  {
    id: 30,
    name: "তাজা শাকবাগান",
    subdistrict: "Sadar",
    district: "Rangpur",
    division: "Rangpur",
    location: "36/4 Taja Shakbagan Road",
  },
  {
    id: 31,
    name: "সবজি গ্রাম",
    subdistrict: "Kurigram",
    district: "Rangpur",
    division: "Rangpur",
    location: "29/1 Sabji Gram Road",
  },
  {
    id: 32,
    name: "শাকপট্টি",
    subdistrict: "Sadar",
    district: "Dinajpur",
    division: "Rangpur",
    location: "23/2 Shak Patti Road",
  },
  {
    id: 33,
    name: "সবজি চত্বর",
    subdistrict: "Birampur",
    district: "Dinajpur",
    division: "Rangpur",
    location: "44/5 Sabji Chottor Road",
  },
];

export { products, hubs, productCategories, vendorProfiles };
