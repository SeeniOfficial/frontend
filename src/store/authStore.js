import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create((set) => ({
  isAuthenticated: true,
  user: null,
  login: (userData) => set({ isAuthenticated: true, user: userData }),
  logout: () => {
    localStorage.removeItem('authToken');
    set({ isAuthenticated: false, user: null });
  },
  // checkAuth: () => {
  //   // Check if a valid token exists in localStorage
  //   const token = localStorage.getItem('authToken');
  //   if (token) {
  //     set({ isAuthenticated: true });
  //     // Optionally fetch and set user data
  //   } else {
  //     set({ isAuthenticated: false, user: null });
  //   }
  // },
}));


// stores/authStore.js
// import create from 'zustand';
// import { persist } from 'zustand/middleware';
// import api from '../services/api'; // Assume this is your API service

// const useAuthStore = create(
//   persist(
//     (set, get) => ({
//       token: null,
//       user: null,
//       isAuthenticated: false,
//       isLoading: false,
//       error: null,

//       setToken: (token) => set({ token }),
//       setUser: (user) => set({ user }),
//       setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
//       setIsLoading: (isLoading) => set({ isLoading }),
//       setError: (error) => set({ error }),

//       login: async (credentials) => {
//         set({ isLoading: true, error: null });
//         try {
//           const response = await api.post('/auth/login', credentials);
//           const { token, user } = response.data;
//           set({ token, user, isAuthenticated: true, isLoading: false });
//         } catch (error) {
//           set({ error: error.message, isLoading: false });
//         }
//       },

//       logout: () => {
//         set({ token: null, user: null, isAuthenticated: false });
//       },

//       checkAuth: async () => {
//         const state = get();
//         if (!state.token) {
//           set({ isAuthenticated: false });
//           return;
//         }

//         if (isTokenExpired(state.token)) {
//           set({ token: null, user: null, isAuthenticated: false });
//           return;
//         }

//         set({ isLoading: true });
//         try {
//           const response = await api.get('/auth/me', {
//             headers: { Authorization: `Bearer ${state.token}` }
//           });
//           set({ user: response.data, isAuthenticated: true, isLoading: false });
//         } catch (error) {
//           set({ token: null, user: null, isAuthenticated: false, isLoading: false, error: error.message });
//         }
//       },

//       refreshToken: async () => {
//         const state = get();
//         if (!state.token) return;

//         try {
//           const response = await api.post('/auth/refresh', { token: state.token });
//           const { token } = response.data;
//           set({ token, isAuthenticated: true });
//         } catch (error) {
//           set({ token: null, user: null, isAuthenticated: false, error: error.message });
//         }
//       },
//     }),
//     {
//       name: 'auth-storage', // name of the item in localStorage
//       getStorage: () => localStorage, // Use localStorage for persistence
//     }
//   )
// );

// Helper function to check if the token is expired
// function isTokenExpired(token) {
//   if (!token) return true;
//   try {
//     const payload = JSON.parse(atob(token.split('.')[1]));
//     return payload.exp < Date.now() / 1000;
//   } catch (error) {
//     return true;
//   }
// }

// export default useAuthStore;