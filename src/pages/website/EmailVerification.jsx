import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PublicLayout } from '../../components/PublicLayout';
import { authService } from '../../services/authService';

export const EmailVerification = () => {
  const [verificationStatus, setVerificationStatus] = useState('verifying');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get('token');
      console.log('Verification token:', token);

      if (!token) {
        setVerificationStatus('error');
        return;
      }

      try {
        const response = await authService.verifyEmail(token);
        console.log('Verification response:', response);
        setVerificationStatus('success');
      } catch (error) {
        console.error('Email verification failed:', error);
        setVerificationStatus('error');
      }
    };

    verifyEmail();
  }, [location]);

  const handleContinue = () => {
    navigate('/sign-in');
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
          {verificationStatus === 'verifying' && (
            <p>Verifying your email...</p>
          )}
          {verificationStatus === 'success' && (
            <>
              <p className="text-success mb-4">Your email has been successfully verified!</p>
              <button
                onClick={handleContinue}
                className="bg-primary text-white p-2 rounded-lg font-bold"
              >
                Continue to Sign In
              </button>
            </>
          )}
          {verificationStatus === 'error' && (
            <p className="text-error">
              There was an error verifying your email. Please try again or contact support.
            </p>
          )}
        </div>
      </motion.div>
    </PublicLayout>
  );
};