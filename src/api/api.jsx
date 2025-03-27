import axios from "axios";

const API_BASE_URL = "https://api-url.com"; 

// Fetch transactions
export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/transactions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
};

// Fetch products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Add a new transaction
export const addTransaction = async (transaction) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/transactions`, transaction);
    return response.data;
  } catch (error) {
    console.error("Error adding transaction:", error);
    return null;
  }
};
