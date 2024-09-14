import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PublicLayout } from "../../components/PublicLayout";
import { authService } from "../../services/authService";

export const EmailVerification = () => {
  const [verificationStatus, setVerificationStatus] = useState("verifying");
  const [showResendForm, setShowResendForm] = useState(false);
  const [email, setEmail] = useState("");
  const [resendStatus, setResendStatus] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect( async () => {
    console.log(token)
      if (!token) {
        setVerificationStatus("error");
        return;
      }
      try {
        await verifyEmail({token}
        )
      setVerificationStatus("success");
      } catch (error) {
      setVerificationStatus("error");
console.log(error)
      }

  }, [token]);

  const handleResendClick = () => {
    setShowResendForm(true);
  };

  const handleResendSubmit = async (e) => {
    e.preventDefault();
    setResendStatus("sending");
    try {
      await authService.resendVerificationEmail(email);
      setResendStatus("success");
    } catch (error) {
      console.error("Failed to resend verification email:", error);
      setResendStatus("error");
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
        <div className="w-full max-w-md bg-white md:rounded-lg shadow-md p-8 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-primary mb-8">
            Email Verification
          </h2>
          {verificationStatus === "verifying" && (
            <p className="animate-pulse text-drkprimary">
              Verifying your email...
            </p>
          )}
          {verificationStatus === "success" && (
            <>
              <p className="text-success mb-4">
                Your email has been successfully verified!
              </p>
              <Link
                to="/sign-in"
                className="bg-primary text-white text-xs p-2 rounded-lg font-bold"
              >
                Continue to Sign In
              </Link>
            </>
          )}
          {verificationStatus === "error" && (
            <>
              <p className="text-error mb-4">
                There was an error verifying your email. Please try again or
                contact support.
              </p>
              {!showResendForm && (
                <button
                  onClick={handleResendClick}
                  className="text-primary underline"
                >
                  Resend verification email
                </button>
              )}
              {showResendForm && (
                <form onSubmit={handleResendSubmit} className="mt-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full p-2 border rounded mb-2"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white text-xs p-2 rounded-lg font-bold"
                    disabled={resendStatus === "sending"}
                  >
                    {resendStatus === "sending" ? "Sending..." : "Resend"}
                  </button>
                  {resendStatus === "success" && (
                    <p className="text-success mt-2">
                      Verification email sent successfully!
                    </p>
                  )}
                  {resendStatus === "error" && (
                    <p className="text-error mt-2">
                      Failed to send verification email. Please try again.
                    </p>
                  )}
                </form>
              )}
            </>
          )}
        </div>
      </motion.div>
    </PublicLayout>
  );
};