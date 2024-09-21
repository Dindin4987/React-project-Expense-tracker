import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../redux/expensesSlice';
import incomeReducer from '../redux/incomeSlice';
import authReducer from '../redux/authSlice'

export const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        income: incomeReducer,
        auth: authReducer,
    },
});