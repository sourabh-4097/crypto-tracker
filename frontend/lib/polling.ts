import { AppDispatch } from '../store';
import { setData } from '../store/slices/dataSlice';
import { fetchStockData } from './api';

export const startPolling = (dispatch: AppDispatch, symbol: string) => {
  if (typeof window !== 'undefined') {
    // Run only on the client
    const fetchData = async () => {
      try {
        const data = await fetchStockData(symbol);
        dispatch(setData(data));
      } catch (error) {
        console.error('Failed to fetch stock data:', error);
      }
    };

    fetchData(); // Initial fetch
    setInterval(fetchData, 5000); // Poll every 5 seconds
  }
};
