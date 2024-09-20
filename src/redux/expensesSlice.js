import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, category: 'Cinema', amount: 150, date: '2023-09-01', time: '09:10:00', comment: 'Movie' },
  { id: 2, category: 'Clothes', amount: 500, date: '2023-09-03', time: '09:10:00', comment: 'Shirt' },
];

const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.push(action.payload);
        },
        editExpense: (state, action) => {
      const index = state.findIndex(expense => expense.id === action.payload.id);
      if (index >= 0) {
        state[index] = action.payload;
      }
    },
        deleteExpense: (state, action) => {
           return state.filter(expense => expense.id !== action.payload);
    },
  },
});

export const { addExpense, editExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;