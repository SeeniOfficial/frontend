import React, { useState } from "react";
import { motion } from "framer-motion";
import { PublicLayout } from "../../components/PublicLayout";
import { useForm } from "../../hooks/useForm";
import { useError } from "../../hooks/useError";
import { authService } from "../../services/authService";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);
  const { values, handleChange, resetForm } = useForm({
    email: "",
  });
  const { error, setError, clearError } = useError();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.email) {
      setError("email", "Please fill in all fields");
      return;
    }
    clearError();
    setIsLoading(true);
    try {
      const response = await authService.forgotPassword(values);
      console.log(response)
      setSuccess(true)
      // Reset form
      resetForm();
    } catch (error) {
      setError(error.response.data.message || error.response.data || "An error occurred");
      console.log(error);
      setSuccess(false)
    } finally {
      setIsLoading(false);
    }
    console.log(values);
  };

  return (
    <PublicLayout>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center bg-whyte py-1 md:py-10"
    >
      <div className="w-full max-w-md bg-white md:rounded-lg shadow-md p-8">
          <h2 className="text-xl md:text-3xl font-bold text-center text-primary mb-8">
            Forgot Password
          </h2>
          {!success && (
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
              <Button
                label={isLoading ? "Sending..." : "Send Password Reset Link"}
                type="submit"
                btnStyles={`w-full p-2 rounded-lg font-bold ${
                  isLoading
                    ? "bg-grey text-whyte animate-pulse"
                    : "bg-primary text-white"
                }`}
                disable={isLoading}
              />
            </form>
          )}
          {success && (
            <>
              <div className="text-success">
                The password reset link has been sent to your mail.
              </div>
              <Link
                to="/sign-in"
                className="my-6 text-center font-bold text-sm"
              >
                Back to login
              </Link>
            </>
          )}
        </div>
    </motion.div>
    </PublicLayout>
  );
};