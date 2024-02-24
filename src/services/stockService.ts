import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const fetchStockData = async (ticker: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stocks?ticker=${ticker}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return [];
  }
};
