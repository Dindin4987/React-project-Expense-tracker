import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expensesReducer from '../redux/expensesSlice';
import incomeReducer from '../redux/incomeSlice';
import authReducer from '../redux/authSlice'
import { combineReducers } from '@reduxjs/toolkit';

// Configure persist for the auth state
const persistConfig = {
    key: 'root',
    storage,
};

// Combine reducers
const rootReducer = combineReducers({
    expenses: expensesReducer,
    income: incomeReducer,
    auth: authReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export default store;