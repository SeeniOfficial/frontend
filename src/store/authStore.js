import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

export const useAuthStore = create((set) => ({
  isAuthenticated: true,
  user: null,
  login: (userData) => set({ isAuthenticated: true, user: userData }),
  logout: () => {
    localStorage.removeItem('authToken');
    set({ isAuthenticated: false, user: null });
  },
  checkAuth: () => {
    // Check if a valid token exists in localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      set({ isAuthenticated: true });
      // Optionally fetch and set user data
    } else {
      set({ isAuthenticated: false, user: null });
    }
  },
}));