import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
import { PublicLayout } from '../../components/PublicLayout';
import { api } from '../../services/api';
// import { authService } from '../../services/authService';

export const EmailVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get('token');

    if (token) {
      verifyEmail(token);
    } else {
      console.error("Token not found in the URL");
    }
  }, [location]);

  const verifyEmail = async (token) => {
    try {
      const response = await api.get(`/api/auth/verify-email/${token}`);
      console.log('Email verified:', response);
      setSuccess(true)
    } catch (error) {
      console.error('Error verifying email:', error);
      setSuccess(false)
    }
  };


  return (
    <PublicLayout>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-xl font-bold">Verifying your email...</h1>
      </div>
      {success && (
        <div className="flex items-center justify-center min-h-screen bg-green-100">
        <h1 className="text-xl font-bold text-green-600">Your email has been successfully verified!</h1>
      </div>
      )}
      {!success && (
        <div className="flex items-center justify-center min-h-screen bg-red-100">
        <h1 className="text-xl font-bold text-red-600">Email verification failed. Please try again.</h1>
      </div>
      )}
    </div>
    </PublicLayout>
  );
};