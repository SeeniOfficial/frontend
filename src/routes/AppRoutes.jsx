import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Landing } from "../pages/website/Landing";
import { ProfilePage } from "../pages/app/ProfilePage";
import { SignIn } from "../pages/website/SignIn";
import { SignUp } from "../pages/website/SignUp";
import { ForgotPassword } from "../pages/website/ForgotPassword";

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
};
