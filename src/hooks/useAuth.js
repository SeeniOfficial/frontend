import { useState } from 'react';
import { authService } from '../services/authService';
import { useAuthStore } from '../store/authStore';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuthStore();

  const signUp = async (userData) => {
    console.log(userData)
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.signUp(userData);
      console.log(response)
      localStorage.setItem('authToken', response.token);
      return response;
    } catch (err) {
      console.log(err)
      // setError(err.response.status);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (credentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const user = await authService.signIn(credentials);
      // Handle successful sign-in (e.g., store user data, redirect)
      return user;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyEmail = async (token) => {
    try {
      const response = await authService.verifyEmail(token);
      console.log("Email verified:", response);
    } catch (error) {
      console.error("Error verifying email:", error);
    }
  };

  // Implement other auth methods (signUp, signOut, etc.)

  return { isLoading, error, signIn, signUp, verifyEmail};
};