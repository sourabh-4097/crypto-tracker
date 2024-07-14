import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Your backend API URL

export const fetchStockData = async (symbol: string) => {
  const response = await axios.get(`http://localhost:5000/api/stocks/latest/${symbol}`);
  return response.data;
};
