import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StockData {
  id: string;
  symbol: string;
  price: number;
  timestamp: number;
  volume: number;
}

interface DataState {
  data: StockData[];
  selectedSymbol: string;
}

const initialState: DataState = {
  data: [],
  selectedSymbol: 'BTC', // Default symbol
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<StockData[]>) => {
      state.data = action.payload;
    },
    setSelectedSymbol: (state, action: PayloadAction<string>) => {
      state.selectedSymbol = action.payload;
    },
  },
});

export const { setData, setSelectedSymbol } = dataSlice.actions;
export default dataSlice.reducer;
