import React from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import { Landing } from "../pages/website/Landing";
import { ProfilePage } from "../pages/app/ProfilePage";
import { SignIn } from "../pages/website/SignIn";
import { SignUp } from "../pages/website/SignUp";
import { ForgotPassword } from "../pages/website/ForgotPassword";
import { ProtectedRoute } from "./ProtectedRoutes";
import { SetLocation } from "../pages/app/SetLocation";
import { ExplorePage } from "../pages/website/ExplorePage";

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
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
      </Router>
    </>
  );
};
