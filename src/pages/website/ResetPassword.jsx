import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuth";
import { useError } from "../../hooks/useError";
import { PublicLayout } from "../../components/PublicLayout";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useForm } from "../../hooks/useForm";
import { authService } from "../../services/authService";

export const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useParams();
  const { verifyEmail } = useAuth();
  const { error, setError, clearError } = useError();
  const { values, handleChange, resetForm } = useForm({
    oldPassword: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.oldPassword || !values.password || !values.confirmPassword) {
      setError("oldPassword", "Please fill in all fields");
      setError("password", "Please fill in all fields");
      setError("confrimPassword", "Please fill in all fields");
      return;
    }
    clearError();
    setIsLoading(true);
    try {
      const response = await authService.resetPassword(token, values.password);
      console.log(response)
      setSuccess(true)
      // Reset form
      resetForm();
    } catch (error) {
      setError("An error occurred");
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
      className="flex flex-col items-center justify-center bg-whyte py-1 md:py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md bg-white md:rounded-lg shadow-md p-8">
        <h2 className="text-xl md:text-3xl font-bold text-center text-primary mb-8">
          Reset Password
        </h2>
        {!success && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {error && <div className="text-error text-xs -mb-4">{error}</div>}
            <Input
              type="password"
              name="oldPassword"
              placeholder="Old Password"
              value={values.oldPassword}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <Input
              type="password"
              name="password"
              placeholder="New Password"
              value={values.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <Button
              label={isLoading ? "Sending..." : "Reset Password"}
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
              Password Reset Successful!
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
