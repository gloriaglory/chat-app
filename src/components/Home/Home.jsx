import { useState, useEffect } from "react";
import { FaStar, FaHeart, FaShareAlt } from "react-icons/fa";
import { fetchProducts } from "../../api/api";

const Home = () => {
  const [products, setProducts] = useState([]); 
  const [selectedOption, setSelectedOption] = useState("Explore");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  // Fetch products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        // Error message if fetching fails
        setError(`Failed to fetch products: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  // Filter products based on selected option
  const filterProducts = () => {
    if (selectedOption === "Explore") {
      return products; // Return all products for 'Explore' option
    }
    return products.filter((product) => product.type === selectedOption);
  };

  return (
    <div>
      {/* Navigation Links */}
      <div className="flex gap-8 p-4 text-lg font-semibold">
        {["Explore", "Wholesale", "Retail"].map((option) => (
          <a
            key={option}
            className={`cursor-pointer ${
              selectedOption === option
                ? "text-primary"
                : "text-gray-700 dark:text-white"
            } dark:hover:text-primary hover:text-primary transition-colors duration-300`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </a>
        ))}
      </div>

      {/* Loading & Error Handling */}
      {loading && <div>Loading products...</div>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Product Listing */}
      {!loading && !error && (
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
                src={product.img}
                alt={product.name}
                className="h-[150px] w-[150px] object-cover rounded-full mx-auto"
              />
              <h3 className="text-lg dark:text-white font-bold">{product.name}</h3>
              <p className="text-gray-500">{product.category}</p>
              <div className="flex">
                {[...Array(product.rating || 0)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <button className="mt-2 bg-primary text-white px-4 py-1 rounded">
                View
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
