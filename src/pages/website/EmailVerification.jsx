import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { motion } from 'framer-motion';
import { PublicLayout } from '../../components/PublicLayout';
import { authService } from '../../services/authService';

export const EmailVerification = () => {
  const [verificationStatus, setVerificationStatus] = useState('verifying');
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setVerificationStatus('error');
        return;
      }
      console.log(token)
      try {
        const response = await api.get(`/api/auth/verify-email/${token}`);
        if (response.status === 200) {
        setVerificationStatus('success');
        } else {
          setVerificationStatus('error');
        }
      } catch (error) {
        console.error('Email verification failed:', error);
        setVerificationStatus('error');
      }
    };

    verifyEmail();
  }, [token]);


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
            <p className='animate-pulse text-drkprimary'>Verifying your email...</p>
          )}
          {verificationStatus === 'success' && (
            <>
              <p className="text-success mb-4">Your email has been successfully verified!</p>
              <Link
                to="/sign-in"
                className="bg-primary text-white text-xs p-2 rounded-lg font-bold"
              >
                Continue to Sign In
              </Link>
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