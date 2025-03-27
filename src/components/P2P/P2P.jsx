import { useState, useEffect } from "react";
import { FaStar, FaHeart, FaShareAlt, FaMapMarkerAlt } from "react-icons/fa";
import { fetchTransactions, addTransaction } from "../../api/api"; 
import Image4 from "/assets/Image4.png";

const categories = ["All", "Electronics", "Home Appliances", "Apparel", "Groceries"];

const P2P = () => {
  const [selectedOption, setSelectedOption] = useState("Explore");
  const [category, setCategory] = useState("All");
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions from API on component mount
  useEffect(() => {
    const loadTransactions = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
    };
    loadTransactions();
  }, []);

  const filterTransactions = () => {
    return transactions.filter(
      (transaction) =>
        (selectedOption === "Explore" || transaction.type === selectedOption) &&
        (category === "All" || transaction.category === category)
    );
  };

  const handleAddTransaction = async (transaction) => {
    const newTransaction = await addTransaction(transaction);
    if (newTransaction) {
      setTransactions([...transactions, newTransaction]);
    }
  };

  return (
    <div>
      {/* Navigation Links */}
      <div className="flex gap-8 p-4 text-lg font-semibold">
        {["Explore", "Buy", "Sell"].map((option) => (
          <a
            key={option}
            href={`#${option.toLowerCase()}`}
            className={`cursor-pointer ${
              selectedOption === option ? "text-primary" : "text-gray-700 dark:text-white"
            } dark:hover:text-primary hover:text-primary transition-colors duration-300`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </a>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex justify-between p-4">
        <select className="border p-2 rounded" value={category} onChange={(e) => setCategory(e.target.value)}>
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
          <div key={transaction.id} className="relative p-4 border rounded shadow-lg hover:scale-105 transition-transform duration-500">
            <div className="absolute top-2 right-2 flex gap-2">
              <FaHeart className="dark:text-white text-primary cursor-pointer" />
              <FaShareAlt className="text-primary cursor-pointer" />
            </div>

            <img src={transaction.img || Image4} alt="" className="h-[150px] w-[150px] object-cover rounded-full mx-auto" />

            <div className="mt-2 flex justify-between items-center">
              <h3 className="text-lg dark:text-white font-bold">{transaction.product}</h3>
              <p className="text-sm text-gray-400 mt-1">{transaction.datePosted}</p>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <p className="text-gray-500">{transaction.user}</p>
              <p className="text-sm text-gray-400 mt-1">{transaction.phone}</p>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <p className="text-gray-500">{transaction.category}</p>
              <p className="text-secondary">Tsh{transaction.price}/=</p>
            </div>

            <p className="text-sm text-gray-600 mt-2">{transaction.description}</p>

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
              <p className={`text-sm mt-1 ${transaction.availability === "Available" ? "text-green-500" : "text-red-500"}`}>
                {transaction.availability}
              </p>

              <button
                className="bg-primary text-white px-4 py-1 rounded"
                onClick={() => handleAddTransaction(transaction)}
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
