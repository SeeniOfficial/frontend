import { api } from "./api";

export const authService = {
  signIn: (credentials) => api.post("/api/auth/login", credentials),
  signUp: (userData) => api.post("/api/auth/register", userData),
  verifyEmail: (token) => api.get(`/api/auth/verify-email/${token}`),
  resendVerificationLink: (user) => api.post("/api/auth/resend-verification-email", user),
  forgotPassword: (user) => api.post("/api/auth/forgot-password", user),
  resetPassword: (token, password) => api.post(`/api/auth/reset-password/${token}`, password ),
  isAuthenticated() {
    // Check if a valid token exists in localStorage
    const token = localStorage.getItem("authToken");
    return !!token; // Returns true if token exists, false otherwise
  },
  // Add other auth-related methods
};
