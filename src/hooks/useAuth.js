import { useState } from 'react';
import { authService } from '../services/authService';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  // Implement other auth methods (signUp, signOut, etc.)

  return { isLoading, error, signIn };
};