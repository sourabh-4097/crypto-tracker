import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';

// Define a function to get initial state from localStorage (client-side only)
const getInitialState = () => {
  if (typeof window !== 'undefined') {
    // Run only on the client
    return {
      data: {
        data: JSON.parse(localStorage.getItem('data') || '[]'),
        selectedSymbol: localStorage.getItem('selectedSymbol') || 'BTC',
      },
    };
  }
  // Default initial state if running on the server
  return {
    data: {
      data: [],
      selectedSymbol: 'BTC',
    },
  };
};

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  preloadedState: getInitialState(),
});

store.subscribe(() => {
  if (typeof window !== 'undefined') {
    // Run only on the client
    localStorage.setItem('data', JSON.stringify(store.getState().data.data));
    localStorage.setItem('selectedSymbol', store.getState().data.selectedSymbol);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
