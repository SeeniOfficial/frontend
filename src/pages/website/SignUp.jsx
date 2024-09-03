import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PublicLayout } from "../../components/PublicLayout";
import logo from "../../assets/logo-primary.png";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import google from "../../assets/google.png";
import fb from "../../assets/facebook.png";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";
import { useForm } from "../../hooks/useForm";
import { useError } from "../../hooks/useError";

export const SignUp = () => {
    const { values, handleChange, resetForm } = useForm({
        email: "",
        password: "",
        repeatPassword: "",
      });
      const { error, setError, clearError } = useError();

      const passwordValidations = usePasswordValidation(values.password);

      const handleSignUp = (e) => {
        e.preventDefault();
        
        // Check if all password requirements are met
        const allRequirementsMet = Object.values(passwordValidations).every(Boolean);
        if (allRequirementsMet && values.password === values.repeatPassword) {
          console.log("Sign up successful", values);
          resetForm();
          clearError();
        } else {
          setError("Please meet all password requirements and ensure passwords match");
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
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <img src={logo} alt="Séeni" className="mx-auto mb-8 object-contain" />
          <h2 className="text-2xl font-bold text-center text-primary mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSignUp} className="flex flex-col gap-8">
          {error && <div className="text-error text-xs -my-4">{error}</div>}
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              value={values.repeatPassword}
              onChange={handleChange}
              required
            />
            <div className="space-y-2 text-sm">
              <p>Password must:</p>
              <p className={passwordValidations.hasUpperCase ? "text-success" : "text-gray-600"}>
                Contain an upper case
              </p>
              <p className={passwordValidations.hasLowerCase ? "text-success" : "text-gray-600"}>
                Contain a lower case
              </p>
              <p className={passwordValidations.hasNumber ? "text-success" : "text-gray-600"}>
                Contain a number
              </p>
              <p className={passwordValidations.hasSpecialChar ? "text-success" : "text-gray-600"}>
                Contain a special character
              </p>
            </div>
            <Button
              label="Sign Up"
              type="submit"
              btnStyles="w-full bg-primary text-white p-2 rounded-lg font-bold"
            />
          </form>
          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-primary font-bold">
              Sign In
            </Link>
          </p>
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-drkprimary"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-drkprimary">OR</span>
              </div>
            </div>
            <div className="my-6 space-y-4">
              <Button
                label="Continue with Google"
                btnStyles="w-full h-fit p-2 border border-primary rounded-lg gap-2"
              >
                <div>
                  <img
                    src={google}
                    alt="Google"
                    className="object-contain h-6 w-6 flex items-center"
                  />
                </div>
              </Button>
              <Button
                label="Continue with Facebook"
                btnStyles="w-full h-fit p-2 border border-primary rounded-lg gap-1"
              >
                <img src={fb} alt="Facebook" className="h-6 w-6" />
                <span></span>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </PublicLayout>
  );
};
