import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import { Landing } from "../pages/website/Landing";
import { ProfilePage } from "../pages/app/ProfilePage";
import { SignIn } from "../pages/website/SignIn";
import { SignUp } from "../pages/website/SignUp";
import { ForgotPassword } from "../pages/website/ForgotPassword";
import { ProtectedRoute } from "./ProtectedRoutes";
import { ExplorePage } from "../pages/website/ExplorePage";
<<<<<<< HEAD
import { EditProfile } from "../pages/app/EditProfile";
import { EmailVerification } from "../pages/website/EmailVerification";
import { useAuthStore } from "../store/authStore";

const AuthProvider = ({ children }) => {
  const { checkAuth } = useAuthStore();
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return children;
};

=======
>>>>>>> parent of ff4842c (feat: working on email verification)

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
<<<<<<< HEAD
          <Route path="/verify-email/:token" element={<EmailVerification />} />
=======
>>>>>>> parent of ff4842c (feat: working on email verification)
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/explore" element={<ExplorePage />} />
            <Route
              path="/app/set-location"
              element={
                <ProtectedRoute>
                  <SetLocation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/app/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/app/catalog"
              element={
                <ProtectedRoute>
                  <Catalog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/app/messages"
              element={
                <ProtectedRoute>
                  <Messages />
                </ProtectedRoute>
              }
            /> */}

            {/* Catch-all redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};
