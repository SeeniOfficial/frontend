import { api } from './api';

export const authService = {
  signIn: (credentials) => api.post('/auth/signin', credentials),
  signUp: (userData) => api.post('/auth/signup', userData),
  isAuthenticated() {
    // Check if a valid token exists in localStorage
    const token = localStorage.getItem('authToken');
    return !!token; // Returns true if token exists, false otherwise
  }
  // Add other auth-related methods
};