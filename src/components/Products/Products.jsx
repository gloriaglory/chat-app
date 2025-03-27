import { useState, useEffect } from "react";
import { FaStar, FaHeart, FaShareAlt } from "react-icons/fa";
import { fetchProducts } from "../../api/api"; 

const categories = [
  "All",
  "Electronics",
  "Home Appliances",
  "Apparel",
  "Groceries",
];

const Products = () => {
  const [selectedOption, setSelectedOption] = useState("Explore"); 
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]); 
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 

  // Fetch products
  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchProducts(); // Fetch products 
      setProducts(data); // Store the products in the state
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  // Filter products based on selected option and category
  const filterProducts = () => {
    return products.filter(
      (product) =>
        (selectedOption === "Explore" || product.type === selectedOption) && 
        (category === "All" || product.category === category) 
    );
  };

  const addToCart = (product) => {
    setCart([...cart, product]); // Add selected product to cart
  };

  return (
    <div>
      {/* Navigation Links */}
      <div className="flex gap-8 p-4 text-lg font-semibold">
        <a
          href="#explore"
          className={`cursor-pointer ${selectedOption === "Explore" ? "text-primary" : "text-gray-700 dark:text-white"
            } dark:hover:text-primary hover:text-primary transition-colors duration-300`}
          onClick={() => setSelectedOption("Explore")}
        >
          Explore
        </a>
        <a
          href="#wholesale"
          className={`cursor-pointer ${selectedOption === "Wholesale" ? "text-primary" : "text-gray-700 dark:text-white"
            } dark:hover:text-primary hover:text-primary transition-colors duration-300`}
          onClick={() => setSelectedOption("Wholesale")}
        >
          Wholesale
        </a>
        <a
          href="#retail"
          className={`cursor-pointer ${selectedOption === "Retail" ? "text-primary" : "text-gray-700 dark:text-white"
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
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Error Handling */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Loading State */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        // Product Listing
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {filterProducts().map((product) => (
            <div
              key={product.id}
              className="relative p-4 border rounded shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute top-2 right-2 flex gap-2">
                <FaHeart className="dark:text-white text-primary cursor-pointer" />
                <FaShareAlt className="text-primary cursor-pointer" />
              </div>

              <img
                src={product.img || "/assets/default-image.png"} // Fallback to a local image if no img in product
                alt={product.name}
                className="h-[150px] w-[150px] object-cover rounded-full mx-auto"
              />
              <h3 className="text-lg dark:text-white font-bold">{product.name}</h3>
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
      )}
    </div>
  );
};

export default Products;
