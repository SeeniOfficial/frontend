import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PublicLayout } from "../../components/PublicLayout";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
// import { useAuthStore } from "../../store/authStore";
import { useError } from "../../hooks/useError";

export const EmailVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useParams();
  const { verifyEmail } = useAuth();
  const { error, setError } = useError();

  useEffect(async () => {
    if (token) {
      setIsLoading(true);
      try {
        await verifyEmail(token);
        setSuccess(true);
        console.log(response);
      } catch (err) {
        setError(
          err.response.data.message || "An error occurred during sign in"
        );
        console.log(err);
      setSuccess(false);
      } finally {
        setIsLoading(false);
      }
    }
  }, [location]);

  return (
    <PublicLayout>
      <motion.div
        className="relative w-full max-w-md bg-white md:rounded-lg shadow-md p-8 text-error h-60 justify-center items-center text-center flex flex-col mx-auto my-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl md:text-3xl font-bold text-center text-primary mb-8">
            Email Verification
          </h2>
        {isLoading && (
          <div className="w-full text-center">
            <h1 className="text-xl font-bold">Verifying your email...</h1>
          </div>
        )}
        {!isLoading && success && (
          <div className="w-full flex flex-col gap-8 items-center justify-center">
            <h1 className="text-xl font-bold text-success">
              Your email has been successfully verified!
            </h1>
            <div className="font-bold underline text-xs text-secondary" onClick={() => navigate("/sign-in")}>
              Go to Login
            </div>
          </div>
        )}
        {!isLoading && !success && (
          <div className="w-full flex items-center justify-center">
            <h1 className="text-xl font-bold text-error">
              {error}. Please try again.
            </h1>
          </div>
        )}
      </motion.div>
    </PublicLayout>
  );
};
