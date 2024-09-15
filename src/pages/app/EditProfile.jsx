import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PublicLayout } from "../../components/PublicLayout";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useForm } from "../../hooks/useForm";
import { Footer } from "../../components/Footer";
import { useAuthStore } from "../../store/authStore";

export const EditProfile = () => {
  const navigate = useNavigate();
  const { values, handleChange, resetForm } = useForm({
    firstName: "",
    lastName: "",
    occupation: "",
    nationality: "",
    city: "",
    location: "",
    bio: "",
    isBusinessOwner: false,
    userType: "",
    isSearchingForRetailers: false,
    phoneNumber: "",
    twitterURL: "",
    instagramURL: "",
    linkedinURL: "",
    facebookURL: "",
  });
  const { error, setError, clearError } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    setIsLoading(true);
    
    try {
      // Here you would typically call an API to update the profile
      // For now, we'll just simulate a successful update
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Profile updated:", values);
      // Navigate back to profile or show success message
      navigate("/app/profile");
    } catch (error) {
      setError(error.message || "An error occurred while updating the profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <motion.div
        className="overflow-y-scroll flex flex-col items-center justify-center w-full bg-whyte py-1 md:py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button
            label="Back to Profile"
            click={() => navigate("/app/profile")}
            btnStyles="mb-6 bg-secondary font-bold text-white px-4 py-2 rounded"
          />
        <div className="w-full max-w-3xl p-8">
          
          
          <form onSubmit={handleSubmit} className="flex flex-col mx-auto gap-8">
            {error && <div className="text-error text-xs -my-4">{error}</div>}
            
            <div className="bg-white border-2 border-secondary/50 p-6 space-y-4 gap-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-primary">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                  value={values.occupation}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                  value={values.nationality}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={values.city}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={values.location}
                  onChange={handleChange}
                />
              </div>
              <motion.textarea 
                  initial={{ scale: 1 }}
                  animate={{ scale: isFocused ? 1.02 : 1 }}
                  name="bio"
                placeholder="Bio"
                value={values.bio}
                onChange={handleChange}
                  className={`flex-grow h-32 rounded-lg border-primary/50 shadow-sm block w-full ring-1 ring-inset ring-whyte focus:ring-2 focus:ring-inset focus:ring-primary border-2 ${isLoading === true ? 'border-grey': 'border-primary/50'} outline-whyte sm:text-sm sm:leading-6 text-xs md:text-sm`}
                  required
                  disabled={isLoading}
                rows="4"
              />
            </div>

            <div className="bg-white border-2 border-secondary/50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-primary">Business Information</h3>
              <div className="space-y-4">
                <div>
                  <p>Are you a business owner?</p>
                  <div className="flex gap-4">
                    <label>
                      <input
                        type="radio"
                        name="isBusinessOwner"
                        value="true"
                        checked={values.isBusinessOwner === true}
                        onChange={() => handleChange({ target: { name: 'isBusinessOwner', value: true } })}
                      /> Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="isBusinessOwner"
                        value="false"
                        checked={values.isBusinessOwner === false}
                        onChange={() => handleChange({ target: { name: 'isBusinessOwner', value: false } })}
                      /> No
                    </label>
                  </div>
                </div>
                {/* <div>
                  <p>Are you a job seeker, potential employer?</p>
                  <div className="flex gap-4">
                    <label>
                      <input
                        type="radio"
                        name="userType"
                        value="employer"
                        checked={values.userType === 'employer'}
                        onChange={handleChange}
                      /> Employer
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="userType"
                        value="jobSeeker"
                        checked={values.userType === 'jobSeeker'}
                        onChange={handleChange}
                      /> Job Seeker
                    </label>
                  </div>
                </div>
                <div>
                  <p>Will you be searching for retailers and locations to purchase goods and services?</p>
                  <div className="flex gap-4">
                    <label>
                      <input
                        type="radio"
                        name="isSearchingForRetailers"
                        value="true"
                        checked={values.isSearchingForRetailers === true}
                        onChange={() => handleChange({ target: { name: 'isSearchingForRetailers', value: true } })}
                      /> Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="isSearchingForRetailers"
                        value="false"
                        checked={values.isSearchingForRetailers === false}
                        onChange={() => handleChange({ target: { name: 'isSearchingForRetailers', value: false } })}
                      /> No
                    </label>
                  </div>
                </div> */}
                {values.isBusinessOwner === true ? (
                  <div className="mb-12 flex flex-col gap-6">
                  <hr className="bg-black mx-2 my-6" />
                  <div className="flex flex-col w-1/2 flex-grow">
                  <label className="font-bold" htmlFor="typeOfBusiness">Type of Business?</label>
                  <Input 
                  type="text"
                  name="typeOfBusiness"
                  placeholder="Example. Wine Buisness"
                  value={values.typeOfBusiness}
                  onChange={handleChange}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="flex-grow"
                  required
                  />
                  </div>
                  <div className="flex flex-col w-1/2 fles-grow">
                  <label className="font-bold" htmlFor="businessName">Name of Business?</label>
                  <Input
                  type="text"
                  name="nameOfBusiness"
                  placeholder="Example. Kike Ventures"
                  value={values.nameOfBusiness}
                  onChange={handleChange}
                  className="flex-grow"
                  required
                  />
                  </div>
                  <div className="flex flex-col">
                  <label className="font-bold" htmlFor="aboutBusiness">Tell us a bit about what you do.</label>
                  <motion.textarea 
                  initial={{ scale: 1 }}
                  animate={{ scale: isFocused ? 1.02 : 1 }}
                  name="aboutBusiness" 
                  placeholder="I sell ..."
                  rows="10"
                  value={values.aboutBusiness}
                  onChange={handleChange}
                  className={`flex-grow h-32 rounded-lg border-primary/50 shadow-sm block w-full ring-1 ring-inset ring-whyte focus:ring-2 focus:ring-inset focus:ring-primary border-2 ${isLoading === true ? 'border-grey': 'border-primary/50'} outline-whyte sm:text-sm sm:leading-6 text-xs md:text-sm`}
                  required
                  disabled={isLoading}
                   />
                  </div>
                  </div>
                ): null}
              </div>
            </div>

            <div className="bg-white border-2 border-secondary/50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-primary">On the Web</h3>
              <p className="text-sm mb-4">Build trust with your network by verifying your social profiles</p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    className="flex-grow"
                  />
                  <Button label="Verify" btnStyles="bg-primary text-white px-4 py-2 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="url"
                    name="twitterURL"
                    placeholder="Twitter URL"
                    value={values.twitterURL}
                    onChange={handleChange}
                    className="flex-grow"
                  />
                  <Button label="Verify" btnStyles="bg-primary text-white px-4 py-2 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="url"
                    name="instagramURL"
                    placeholder="Instagram URL"
                    value={values.instagramURL}
                    onChange={handleChange}
                    className="flex-grow"
                  />
                  <Button label="Verify" btnStyles="bg-primary text-white px-4 py-2 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="url"
                    name="linkedinURL"
                    placeholder="LinkedIn URL"
                    value={values.linkedinURL}
                    onChange={handleChange}
                    className="flex-grow"
                  />
                  <Button label="Verify" btnStyles="bg-primary text-white px-4 py-2 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="url"
                    name="facebookURL"
                    placeholder="Facebook URL"
                    value={values.facebookURL}
                    onChange={handleChange}
                    className="flex-grow"
                  />
                  <Button label="Verify" btnStyles="bg-primary text-white px-4 py-2 rounded" />
                </div>
              </div>
            </div>

            <Button
              label={isLoading ? "Saving..." : "Save changes"}
              type="submit"
              btnStyles={`w-full p-2 rounded-lg font-bold ${isLoading ? 'bg-grey text-whyte animate-pulse' : 'bg-primary text-white'}`}
              disabled={isLoading}
            />
          </form>
        </div>
        {/* <Footer /> */}
      </motion.div>
  );
};