import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "../DarkMode";
import { fetchTransactions } from "../../api/api"; 
import { useEffect, useState } from "react";



const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/home",
  },
  {
    id: 2,
    name: "Products",
    link: "/Products",
  },
  {
    id: 4,
    name: "P2P",
    link: "/p2p",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Register a shop",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
  {
    id: 4,
    name: "Contacts",
    link: "/#",
  },
];

const Navbar = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    getTransactions();
  }, []);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200  z-40 sticky top-0">
      {/* Upper Navbar */}
      <div className="bg-orange-50 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#">
              <img src="/public/assets/logo.png" alt="logo" />
            </a>
          </div>
          {/* Searchbar */}
          <div className="flex justify-between items-center gap-20">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search.."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 ease-in-out rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1 translate-y-1/2 right-3" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Order button*/}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-3 rounded-2xl flex items-center gap-1 relative hover:animate-swing"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              {transactions.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {transactions.length}
                </span>
              )}
            </button>
            {/* Dark mode button */}
            <DarkMode />
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link to={data.link} className="inline-block px-4 hover:text-primary duration-200">
                {data.name}
              </Link>
            </li>
          ))}
          {/* Dropdown and links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              More
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Navbar;


  