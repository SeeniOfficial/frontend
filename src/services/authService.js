import { api } from './api';


export const authService = {
  signIn: (credentials) => api.post('/api/auth/login', credentials),
  signUp: (userData) => api.post('/api/auth/register', userData),
  verifyEmail: (token) =>  api.get(`/api/auth/verify-email/${token}`),
  verifyEmail: (token) => api.get(`/api/auth/verify-email/${token}`),
  resendVerificationEmail: (email) => api.post('/api/auth/resend_verification_email', { email }),
  isAuthenticated() {
    // Check if a valid token exists in localStorage
const token = localStorage.getItem('authToken');
    return !!token; // Returns true if token exists, false otherwise
  }
  // Add other auth-related methods
};