import { useState } from 'react';
import { authService } from '../services/authService';
import { useAuthStore } from '../store/authStore';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuthStore();
  const logout = useAuthStore.getState().logout;

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
      console.log(user)
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
      // console.log("Email verified:", response);
      return response;
    } catch (error) {
      throw error
      // console.error("Error verifying email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resendVerificationLink = async (user) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.signIn(user);
      // Handle successful sign-in (e.g., store user data, redirect)
      return response;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = async (user) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.signIn(user);
      // Handle successful sign-in (e.g., store user data, redirect)
      return response;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (token, password) => {
    try {
      const response = await authService.verifyEmail(token, password);
      // console.log("Email verified:", response);
      return response;
    } catch (error) {
      throw error
      // console.error("Error verifying email:", error);
    } finally {
      setIsLoading(false);
    }
  };


const logOut = () => {
  // Clear the auth token from localStorage
  localStorage.removeItem('authToken');
  // Get the logout function from the auth store
 

  // Call the logout function to update the auth state
  logout();

  // Optionally, you can also call checkAuth to ensure the state is updated
  const checkAuth = useAuthStore.getState().checkAuth;
  checkAuth();

  console.log('User logged out successfully');
};

  // Implement other auth methods (signUp, signOut, etc.)

  return { isLoading, error, signIn, signUp, verifyEmail, resendVerificationLink, forgotPassword, resetPassword };
};