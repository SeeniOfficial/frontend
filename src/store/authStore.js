import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useAuthStore = create(persist ((set, get) =>  ({
    isAuthenticated: false,
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
  }),
  {
    name: "Seeni Auth Session",
    storage: createJSONStorage(() => sessionStorage),
  }
));