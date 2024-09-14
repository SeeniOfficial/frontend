import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
        const response = await verifyEmail(token);
        setSuccess(true);
        console.log(response);
      } catch (error) {
        setError(
          error.response.data.message || "An error occurred during sign in"
        );
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.error("Token not found in the URL", error);
      setSuccess(false);
    }
  }, [location]);

  return (
    <PublicLayout>
      <motion.div
        className="relative w-full max-w-md bg-white md:rounded-lg shadow-md p-8 text-error h-60 justify-center items-center text-center flex flex-col my-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isLoading && (
          <div className="w-full max-w-md bg-white md:rounded-lg shadow-md p-8 text-center">
            <h1 className="text-xl font-bold">Verifying your email...</h1>
          </div>
        )}
        {!isLoading && success && (
          <div className="w-full max-w-md md:rounded-lg shadow-md p-8 flex items-center justify-center min-h-screen bg-green-100">
            <h1 className="text-xl font-bold text-success">
              Your email has been successfully verified!
            </h1>
            <Link className="font-bold underline text-secondary" to="/sign=in">
              Go to Log in
            </Link>
          </div>
        )}
        {isLoading && !success && (
          <div className="w-full max-w-md md:rounded-lg shadow-md p-8 flex items-center justify-center min-h-screen bg-red-100">
            <h1 className="text-xl font-bold text-error">
              Email verification failed. Please try again.
            </h1>
          </div>
        )}
      </motion.div>
    </PublicLayout>
  );
};
