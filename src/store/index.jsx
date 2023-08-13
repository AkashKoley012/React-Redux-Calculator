import { configureStore } from '@reduxjs/toolkit';
import calculatorSlice from './slices/CalculatorSlice';

const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
  },
});

export default store;
