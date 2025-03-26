import { useState } from "react";
import { FaStar, FaHeart, FaShareAlt, FaMapMarkerAlt } from "react-icons/fa";
import Image4 from "/assets/Image4.png";

const p2pTransactions = [
  {
    id: 1,
    product: "Samsung S10 phone",
    category: "Electronics",
    phone: "+2556889907",
    price: 180000,
    description: "Used samsung s10 phone, fault: fingerprint scanner",
    datePosted: "2025-03-01",
    availability: "Available",
    rating: 5,
    img: Image4,
    type: "Buy",
    user: "Maria Leonard",
    location: "Dar es Salaam, Tanzania", 
  },
  {
    id: 2,
    product: "LG Refrigerator",
    category: "Home Appliances",
    phone: "+2556889907",
    price: 350000,
    description: "Slightly used, good condition LG fridge",
    datePosted: "2025-03-03",
    availability: "Sold",
    rating: 4,
    img: Image4,
    type: "Sell",
    user: "Hamisi Hamisi",
    location: "Arusha, Tanzania", 
  },
  {
    id: 3,
    product: "Kiwanja",
    category: "Apparel",
    phone: "+2556889907",
    price: 12000000,
    description: "Kiwanja kinauzwa Mwanza, Nyamagana",
    datePosted: "2025-03-05",
    availability: "Available",
    rating: 5,
    img: Image4,
    type: "Buy",
    user: "John Mushi",
    location: "Mwanza, Tanzania",  
  },

];

const categories = [
  "All",
  "Electronics",
  "Home Appliances",
  "Apparel",
  "Groceries",
];

const P2P = () => {
  const [selectedOption, setSelectedOption] = useState("Explore"); 
  const [category, setCategory] = useState("All"); // Category filter
  const [transactions, setTransactions] = useState([]);

  const filterTransactions = () => {
    return p2pTransactions.filter(
      (transaction) =>
        (selectedOption === "Explore" || transaction.type === selectedOption) && // Filtering by transaction type
        (category === "All" || transaction.category === category) // Filtering by category
    );
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      {/* Navigation Links */}
      <div className="flex gap-8 p-4 text-lg font-semibold">
        <a
          href="#explore"
          className={`cursor-pointer ${
            selectedOption === "Explore"
              ? "text-primary"
              : "text-gray-700 dark:text-white"
          } dark:hover:text-primary hover:text-primary transition-colors duration-300`}
          onClick={() => setSelectedOption("Explore")}
        >
          Explore
        </a>
        <a
          href="#buy"
          className={`cursor-pointer ${
            selectedOption === "Buy"
              ? "text-primary"
              : "text-gray-700 dark:text-white"
          } dark:hover:text-primary hover:text-primary transition-colors duration-300`}
          onClick={() => setSelectedOption("Buy")}
        >
          Buy
        </a>
        <a
          href="#sell"
          className={`cursor-pointer ${
            selectedOption === "Sell"
              ? "text-primary"
              : "text-gray-700 dark:text-white"
          } dark:hover:text-primary hover:text-primary transition-colors duration-300`}
          onClick={() => setSelectedOption("Sell")}
        >
          Sell
        </a>
      </div>

      {/* Category Filter */}
      <div className="flex justify-between p-4">
        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* P2P Transaction Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filterTransactions().map((transaction) => (
          <div
            key={transaction.id}
            className="relative p-4 border rounded shadow-lg hover:scale-105 transition-transform duration-500"
          >
            {/* Icons Positioned at the Top-Left of Each Card */}
            <div className="absolute top-2 right-2 flex gap-2">
              <FaHeart className="dark:text-white text-primary cursor-pointer" />
              <FaShareAlt className="text-primary cursor-pointer" />
            </div>

            <img
              src={transaction.img}
              alt=""
              className="h-[150px] w-[150px] object-cover rounded-full mx-auto"
            />

<div className="mt-2 flex justify-between items-center">
            <h3 className="text-lg dark:text-white font-bold">
              {transaction.product}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
                {transaction.datePosted}
              </p>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <p className="text-gray-500">{transaction.user}</p>
              <p className="text-sm text-gray-400 mt-1">
                {transaction.phone}
              </p>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <p className="text-gray-500">{transaction.category}</p>
              <p className="text-secondary">Tsh{transaction.price}/=</p>
            </div>

            <p className="text-sm text-gray-600 mt-2">{transaction.description}</p>

            {/* Location with Icon */}
            <div className="mt-2 flex items-center space-x-2">
              <FaMapMarkerAlt className="text-primary" />
              <span className="text-gray-600">{transaction.location}</span>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <div className="flex">
                {[...Array(transaction.rating)].map((_, i) => (
                  <FaStar key={i} className="text-secondary" />
                ))}
              </div>
              <p
                className={`text-sm mt-1 ${
                  transaction.availability === "Available"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transaction.availability}
              </p>

              <button
                className="bg-primary text-white px-4 py-1 rounded"
                onClick={() => addTransaction(transaction)}
              >
                {transaction.type === "Buy" ? "Buy" : "Sell"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default P2P;
