import axios from 'axios';
import StockData from '../models/stockData';

export const fetchStockData = async (symbol: string) => {
  try {
    const options = {
      method: 'POST',
      url: 'https://api.livecoinwatch.com/coins/single',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.LIVE_COIN_WATCH_API_KEY
      },
      timeout: 5000,
      data: {
        currency: 'USD',
        code: symbol,
        meta: true
      }
    };
    const response = await axios(options);
    const data = response.data;
    const coinData = {
      name: data.name,
      symbol,
      rank: data.rank,
      price: data.rate,
      marketCap: data.cap,
      volume: data.volume,
    };

    const stockData = new StockData(coinData);
    await stockData.save();
    return stockData;
  } catch (err) { }

};

const symbols = ['BTC', 'ETH', 'USDT', 'BNB', 'SOL'];

setInterval(async () => {
  for (const symbol of symbols) {
    await fetchStockData(symbol);
  }
}, 10000);
