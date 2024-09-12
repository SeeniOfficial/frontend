import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { PublicLayout } from "../../components/PublicLayout";
import logo from "../../assets/logo-primary.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import google from "../../assets/google.png";
import fb from "../../assets/facebook.png";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";
import { useForm } from "../../hooks/useForm";
import { useError } from "../../hooks/useError";
import { authService } from "../../services/authService";

export const SignUp = () => {
  const navigate = useNavigate();
  const { values, handleChange, resetForm, clearError } = useForm({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const { error, setError } = useError();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false)

  const passwordValidations = usePasswordValidation(values.password);

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Signing up")
    clearError();

    // Check if all password requirements are met
    const allRequirementsMet =
      Object.values(passwordValidations).every(Boolean);
    if (allRequirementsMet && values.password === values.repeatPassword) {
      // alert()
      setIsLoading(true);
      try {
        const response = await authService.signUp({
          email: values.email,
          password: values.password,
        });

        // Assuming the API returns user data and a token
        const { user, token } = response;

        // Store the token in localStorage
        localStorage.setItem("authToken", token);

        // Update the auth store
        // login(user);
        setSuccess(true)

        // Reset form and clear errors
        resetForm();
        navigate("/dashboard");
      } catch (error) {
        setError(error.message || "An error occurred during sign up");
      } finally {
        setIsLoading(false);
      }
    } else {
      setError(
        "Please meet all password requirements and ensure passwords match"
      );
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
        <div className="w-full max-w-md bg-white md:rounded-lg shadow-md p-8">
        {success && (<div className="absolute flex place-items-center text-center justify-center text-3xl text-primary h-full w-full inset-0 bg-black/80 z-10">Signup successful!</div>)}
          <h2 className=" text-xl md:text-3xl font-bold text-center text-primary mb-8">
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
                  passwordValidations.hasNumber
                    ? "text-success"
                    : "text-grey"
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
              btnStyles={`w-full p-2 rounded-lg font-bold ${isLoading ? 'bg-grey text-whyte animate-pulse' : 'bg-primary text-white'}`}
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
      </motion.div>
    </PublicLayout>
  );
};
