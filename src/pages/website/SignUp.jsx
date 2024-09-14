import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { PublicLayout } from "../../components/PublicLayout";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import google from "../../assets/google.png";
import fb from "../../assets/facebook.png";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";
import { useForm } from "../../hooks/useForm";
import { useAuth } from "../../hooks/useAuth";
import { useAuthStore } from "../../store/authStore";

export const SignUp = () => {
  const navigate = useNavigate();
  const { values, handleChange, resetForm } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    repeatPassword: "",
  });
  // const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { signUp, isLoading, error: authError } = useAuth();
  const { error, setError, clearError } = useAuthStore();

  const passwordValidations = usePasswordValidation(values.password);

  const handleSignUp = async (e) => {
    clearError();
    e.preventDefault();
    console.log("Signing up");

    // Check if all password requirements are met
    const allRequirementsMet =
      Object.values(passwordValidations).every(Boolean);
    if (allRequirementsMet && values.password === values.repeatPassword) {
      try {
        await signUp({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          password: values.password,
          role: "user",
        });
        console.log();
        setSuccess(true);
        resetForm();
      } catch (err) {
        // Error handling is now managed by the useAuth hook
        console.error("Sign up error:", err);
        if (err.status === 400) {
          setError(err.response.data.message);
          // resetForm();
        } else {
          setError(err.response.data.message);
        }
      }
    } else {
      // This error is not handled by useAuth, so we need to manage it here
      console.error("Password requirements not met or passwords don't match");
    }
  };

  return (
    <PublicLayout>
      <motion.div
        className="flex flex-col items-center justify-center bg-whyte overflow-y-hidden py-1 md:py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {success && (
          <div className="relative w-full max-w-md bg-white md:rounded-lg shadow-md p-8 text-error font-bold h-60 justify-center items-center text-center text-xl flex">
            <p>Signup successful!</p>
            <p className="text-base mt-2">
              Please check your email to verify your account. Click on the
              verification link to complete the process.
            </p>
          </div>
        )}
        {!success && (
          <div className="relative w-full max-w-md bg-white md:rounded-lg shadow-md p-8">
            <h2 className=" text-xl md:text-3xl font-bold text-center text-primary mb-8">
              Sign Up
            </h2>
            <form onSubmit={handleSignUp} className="flex flex-col gap-8">
              {error && <div className="text-error text-xs -my-4" onFocus={() => focus()}>{error}</div>}
              <div className="flex flex-col md:flex-row gap-8 md:gap-4 w-full">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={values.phone}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={values.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <Input
                type="password"
                name="repeatPassword"
                placeholder="Repeat Password"
                value={values.repeatPassword}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <div className="space-y-2 text-sm">
                <p>Password must:</p>
                <p
                  className={
                    passwordValidations.hasUpperCase
                      ? "text-success"
                      : "text-grey"
                  }
                >
                  Contain an upper case
                </p>
                <p
                  className={
                    passwordValidations.hasLowerCase
                      ? "text-success"
                      : "text-grey"
                  }
                >
                  Contain a lower case
                </p>
                <p
                  className={
                    passwordValidations.hasNumber ? "text-success" : "text-grey"
                  }
                >
                  Contain a number
                </p>
                <p
                  className={
                    passwordValidations.hasSpecialChar
                      ? "text-success"
                      : "text-grey"
                  }
                >
                  Contain a special character
                </p>
              </div>
              <Button
                label={isLoading ? "Signing Up..." : "Sign Up"}
                type="submit"
                btnStyles={`w-full p-2 rounded-lg font-bold ${
                  isLoading
                    ? "bg-grey text-whyte animate-pulse"
                    : "bg-primary text-white"
                }`}
                disable={isLoading}
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
        )}
      </motion.div>
    </PublicLayout>
  );
};
