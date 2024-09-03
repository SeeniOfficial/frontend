import { api } from './api';

export const authService = {
  signIn: (credentials) => api.post('/auth/signin', credentials),
  signUp: (userData) => api.post('/auth/signup', userData),
  // Add other auth-related methods
};