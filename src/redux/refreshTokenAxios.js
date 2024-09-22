// import axios from "axios";
// import { store } from "./store";
// import { refreshToken } from "./authSlice";

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:3000',
// })

// axiosInstance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;
//         if (error.response.status === 403 && !originalRequest._retry) {
//             originalRequest._retry = true;

//             // Attempt to refresh token
//             const { refreshToken: token } = store.getState().auth;
//             if (token) {
//                 const newAccessToken = await store.dispatch(refreshToken(token));
//                 originalRequest.headers['Authorization'] = `Bearer ${newAccessToken.payload}`;
//                 return axiosInstance(originalRequest);
//             }
//         }
//         return Promise.reject(error);
//     }
// );

// export default axiosInstance;