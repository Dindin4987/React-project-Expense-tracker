// src/features/incomeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, category: 'Salary', amount: 3500, date: '2023-09-01', comment: 'IT Company' },
];

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.push(action.payload);
    },
    editIncome: (state, action) => {
      const index = state.findIndex(income => income.id === action.payload.id);
      if (index >= 0) {
        state[index] = action.payload;
      }
    },
    deleteIncome: (state, action) => {
      return state.filter(income => income.id !== action.payload);
    },
  },
});

export const { addIncome, editIncome, deleteIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
