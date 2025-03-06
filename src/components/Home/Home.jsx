import { useState } from "react";
import { FaStar, FaHeart, FaShareAlt } from "react-icons/fa";
import Image4 from "/assets/Image4.png";

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1800,
    rating: 5,
    img: Image4,
    type: "Retail",
  },
  {
    id: 2,
    name: "Refrigerator",
    category: "Home Appliances",
    price: 3500,
    rating: 4,
    img: Image4,
    type: "Wholesale",
  },
  {
    id: 3,
    name: "T-shirt",
    category: "Apparel",
    price: 1200,
    rating: 5,
    img: Image4,
    type: "Retail",
  },
  {
    id: 4,
    name: "Headphones",
    category: "Electronics",
    price: 100000,
    rating: 4,
    img: Image4,
    type: "Retail",
  },
  {
    id: 5,
    name: "Bread",
    category: "Groceries",
    price: 212300,
    rating: 5,
    img: Image4,
    type: "Wholesale",
  },
  {
    id: 6,
    name: "Laptop",
    category: "Electronics",
    price: 1800,
    rating: 5,
    img: Image4,
    type: "Retail",
  },
  {
    id: 7,
    name: "Refrigerator",
    category: "Home Appliances",
    price: 3500,
    rating: 4,
    img: Image4,
    type: "Wholesale",
  },
  {
    id: 8,
    name: "T-shirt",
    category: "Apparel",
    price: 1200,
    rating: 5,
    img: Image4,
    type: "Retail",
  },
  {
    id: 9,
    name: "Headphones",
    category: "Electronics",
    price: 100000,
    rating: 4,
    img: Image4,
    type: "Retail",
  },
  {
    id: 10,
    name: "Bread",
    category: "Groceries",
    price: 212300,
    rating: 5,
    img: Image4,
    type: "Wholesale",
  },
];

const categories = [
  "All",
  "Electronics",
  "Home Appliances",
  "Apparel",
  "Groceries",
];

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Explore"); // 'Explore', 'Wholesale', 'Retail'
  const [category, setCategory] = useState("All"); // Category filter
  const [cart, setCart] = useState([]);

  const filterProducts = () => {
    return products.filter(
      (product) =>
        (selectedOption === "Explore" || product.type === selectedOption) && // Filtering by product type
        (category === "All" || product.category === category) // Filtering by category
    );
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
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

      {/* Category Filter */}
      <div className="flex justify-between p-4">
        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option
             key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
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
            <p className="text-green-500">Tsh{product.price}/=</p>

            <div className="flex">
              {[...Array(product.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>

            <button
              className="mt-2 bg-primary text-white px-4 py-1 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
