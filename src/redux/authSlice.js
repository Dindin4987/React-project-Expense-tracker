import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

// Async thunk for signing in
export const signIn = createAsyncThunk(
    'auth/signIn',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/signin', { email, password });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

// Async thunk to refresh the access token
export const refreshToken = createAsyncThunk(
    'auth/refreshToken',
    async (refreshToken, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/refresh-token', { refreshToken });
            return response.data.accessToken;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOut: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(signIn.pending, (state) => {
                state.loading = true;
            })
        .addCase(signIn.fulfilled, (state, action) => {
        state.user = jwtDecode(action.payload.accessToken);
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = null;
        })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        state.user = jwtDecode(action.payload);
      });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;