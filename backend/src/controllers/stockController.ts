import { Request, Response } from 'express';
import StockData from '../models/stockData';
import { fetchStockData } from '../services/stockService';

export const getStockData = async (req: Request, res: Response) => {
  const { symbol } = req.params;
  try {
    const data = await fetchStockData(symbol);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
};

export const getLatestStockData = async (req: Request, res: Response) => {
  const { symbol } = req.params;
  try {
    const data = await StockData.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch latest stock data' });
  }
};
