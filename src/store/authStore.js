import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: null,
      error: null,
      login: (userData) => set({ isAuthenticated: true, user: userData }),
      logout: () => {
        localStorage.removeItem('authToken');
        set({ isAuthenticated: false, user: null });
      },
      checkAuth: () => {
        const token = localStorage.getItem('authToken');
        if (token) {
          set({ isAuthenticated: true });
        } else {
          set({ isAuthenticated: false, user: null });
        }
      },
      setError: (error) => set({ error }),
      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);