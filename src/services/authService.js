import { api } from './api';

const token = localStorage.getItem('authToken');

export const authService = {
  signIn: (credentials) => api.post('/api/auth/login', credentials),
  signUp: (userData) => api.post('/api/auth/register', userData),
  verifyEmail: (token) =>  api.get('/api/auth/verify-email', { token }),
  isAuthenticated() {
    // Check if a valid token exists in localStorage
    return !!token; // Returns true if token exists, false otherwise
  }
  // Add other auth-related methods
};