import mongoose from 'mongoose';

const stockDataSchema = new mongoose.Schema({
  symbol: String,
  name: String,
  price: Number,
  rank: Number,
  volume: Number,
  marketCap: Number,
  timestamp: { type: Date, default: Date.now }
});

const StockData = mongoose.model('StockData', stockDataSchema);

export default StockData;
