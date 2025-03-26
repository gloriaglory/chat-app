import { useState } from "react";
import { FaStar, FaHeart, FaShareAlt } from "react-icons/fa";
import Image4 from "/assets/Image4.png";

const products = [
  {
    id: 1,
    name: "Mama Mzungu shop",
    category: "Wholesale clothes",
    rating: 5,
    img: Image4,
    type: "Retail",
  },
  {
    id: 2,
    name: "Vill mini supermarket",
    category: "Retail Home Appliances",
    rating: 4,
    img: Image4,
    type: "Wholesale",
  },
  {
    id: 3,
    name: "Soko kuu",
    category: "Local Market",
    rating: 5,
    img: Image4,
    type: "Retail",
  },
  {
    id: 4,
    name: "Shamba Diary products",
    category: "Diary products",
    rating: 4,
    img: Image4,
    type: "Retail",
  },
  {
    id: 5,
    name: "Lisah Bakery",
    category: "Bakery",
    rating: 5,
    img: Image4,
    type: "Wholesale",
  },
  {
    id: 6,
    name: "Ling Fresh juice",
    category: "fresh juice",
    rating: 5,
    img: Image4,
    type: "Retail",
  },
  {
    id: 7,
    name: "Bino Electronics",
    category: "Phone accessories",
    rating: 4,
    img: Image4,
    type: "Wholesale",
  },
  {
    id: 8,
    name: "mama isha Mtumba",
    category: "Second hand clothes",
    rating: 5,
    img: Image4,
    type: "Retail",
  },
  {
    id: 9,
    name: "Nyumbani tailoring",
    category: "Tailor made clothes",
    rating: 4,
    img: Image4,
    type: "Retail",
  },
  {
    id: 10,
    name: "Makao house",
    category: "Organic medicines",
    rating: 2,
    img: Image4,
    type: "Wholesale",
  },
];


const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Explore"); 

  const filterProducts = () => {
    return products.filter(
      (product) =>
        (selectedOption === "Explore" || product.type === selectedOption) // Filtering by product type
    );
  };

  const viewDetails = (product) => {
    console.log("Viewing details for:", product);
};


  return (
    <div>
      {/* Navigation Links (Left aligned) */}
      <div className="flex gap-8 p-4 text-lg font-semibold">
        <a
          href="#explore"
          className={`cursor-pointer ${
            selectedOption === "Explore" ? "text-primary" : "text-gray-700 dark:text-white"
          } dark:hover:text-primary hover:text-primary transition-colors duration-300`}
          onClick={() => setSelectedOption("Explore")}
        >
          Explore
        </a>
        <a
          href="#wholesale"
          className={`cursor-pointer ${
            selectedOption === "Wholesale" ? "text-primary" : "text-gray-700 dark:text-white"
          } dark:hover:text-primary hover:text-primary transition-colors duration-300`}
          onClick={() => setSelectedOption("Wholesale")}
        >
          Wholesale
        </a>
        <a
          href="#retail"
          className={`cursor-pointer ${
            selectedOption === "Retail" ? "text-primary" : "text-gray-700 dark:text-white"
          } dark:hover:text-primary hover:text-primary transition-colors duration-300`}
          onClick={() => setSelectedOption("Retail")}
        >
          Retail
        </a>
      </div>


      {/* Product Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filterProducts().map((product) => (
          <div
            key={product.id}
            className="relative p-4 border rounded shadow-lg hover:scale-105 transition-transform duration-500"

          >
            {/* Icons Positioned at the Top-Left of Each Card */}
            <div className="absolute top-2 right-2 flex gap-2">
              <FaHeart className="dark:text-white text-primary cursor-pointer" />
              <FaShareAlt className="text-primary cursor-pointer" />
            </div>

            <img
              src={product.img}
              alt=""
              className="h-[150px] w-[150px] object-cover rounded-full mx-auto"
            />
            <h3 className="text-lg dark:text-white font-bold">
              {product.name}
            </h3>
            <p className="text-gray-500">{product.category}</p>

            <div className="flex">
              {[...Array(product.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>

            <button
              className="mt-2 bg-primary text-white px-4 py-1 rounded"
              onClick={() => viewDetails(product)}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
