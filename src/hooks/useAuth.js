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
      const response = await authService.signIn(credentials);
      login(response.user);
      localStorage.setItem('authToken', response.token);
      return response.user;
    } catch (err) {
      console.log(err)
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyEmail = async (token) => {
    setIsLoading(true)
    try {
      const response = await authService.verifyEmail(token);
      console.log("Verification response:", response);
      return(response)
    } catch (error) {
      console.error("Email verification failed:", error);
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, signUp, signIn, verifyEmail };
};