import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { PublicLayout } from "../../components/PublicLayout";
import logo from "../../assets/logo-primary.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import google from "../../assets/google.png";
import fb from "../../assets/facebook.png";
import { useForm } from "../../hooks/useForm";
import { useError } from "../../hooks/useError";
import { useAuthStore } from "../../store/authStore";
import { authService } from "../../services/authService";

export const SignIn = () => {
  const navigate = useNavigate();
  const { user, login, isAuthenticated } = useAuthStore();
  const { values, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const { error, setError, clearError } = useError();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      setError('email', "Please fill in all fields");
      setError('password', "Please fill in all fields");
      return;
    }
    clearError();
    setIsLoading(true);
    try {
      const response = await authService.signIn(values);
      
      // Assuming the API returns user data and a token
      const { token } = response;
      
      // Store the token in localStorage
      localStorage.setItem('authToken', token);
      const user = response.user;
      // Update the auth store
      login(user);
      
      // Reset form
      resetForm();
      
      // Redirect to a protected route (e.g., dashboard)
      navigate('/app/profile');
    console.log(user, response, isAuthenticated);

    } catch (error) {
      setError("An error occurred during sign in");
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PublicLayout>
      <motion.div
        className="flex flex-col items-center justify-center bg-whyte py-1 md:py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-md bg-white md:rounded-lg shadow-md p-8">
          <h2 className="text-xl md:text-3xl font-bold text-center text-primary mb-8">
            Sign In
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {error && <div className="text-error text-xs -mb-4">{error}</div>}
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <Button
              label={isLoading ? "Signing In..." : "Sign In"}
              type="submit"
              btnStyles={`w-full p-2 rounded-lg font-bold ${
                isLoading
                  ? "bg-grey text-whyte animate-pulse"
                  : "bg-primary text-white"
              }`}
              disable={isLoading}
            />
          </form>
          <div className="mt-4 flex flex-col gap-8 text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-primary font-bold">
                Sign Up
              </Link>
            </p>
            <Link to="/forgot-password" className="text-secondary font-bold text-sm">
              Forgot Password?
            </Link>
          </div>
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-drkprimary"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-drkprimary">OR</span>
              </div>
            </div>
            <div className="my-6 space-y-4">
              <Button
                label="Continue with Google"
                btnStyles="w-full h-fit p-2 border border-primary rounded-lg gap-2"
              >
                <div>
                  <img
                    src={google}
                    alt="Google"
                    className="object-contain h-6 w-6 flex items-center"
                  />
                </div>
              </Button>
              <Button
                label="Continue with Facebook"
                btnStyles="w-full h-fit p-2 border border-primary rounded-lg gap-1"
              >
                <img src={fb} alt="Facebook" className="h-6 w-6" />
                <span></span>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </PublicLayout>
  );
};
