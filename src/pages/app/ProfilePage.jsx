import React, { useEffect, useState } from "react";
import { color, motion } from "framer-motion";
import upload from "../../assets/upload.svg";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { StarRating } from "../../components/StarRating";
import location from "../../assets/location.png";
import locate from "../../assets/location.svg";
import setlocation from "../../assets/setlocation.svg";
import delivery from "../../assets/delivery.png";
import deliver from "../../assets/delivery.svg";
import card from "../../assets/card.svg";
import payment from "../../assets/payment.png";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { useAuthStore } from "../../store/authStore";
import { Avatar } from "../../components/Avatar";


export const ProfilePage = () => {
  const profileCard = [
    {
      image: location,
      color: "text-primary",
      title: (
        <div className="flex gap-2 items-center">
          {" "}
          <img src={locate} alt="" /> <span>Location Services</span>
        </div>
      ),
      description: "Set up the location of your physical store and gain visibility",
      footer:      <motion.button
          className="font-semibold flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/app/set-location')}
        >
          <span><img className="w-4" src={setlocation} alt="set location" /></span>
          <div className="border-b-[2.5px] border-primary">Set location</div>
        </motion.button>
    },
    {
      image: delivery,
      color: "text-error/50",
      title: (
        <div className="flex gap-2 items-center">
          {" "}
          <img src={deliver} alt="" /> <span className="">Delivery Services</span>
        </div>
      ),
      description: "Set up a delivery system for easy access  to paid goods for your customers",
      footer:      <motion.button
          className="font-semibold flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span><img className="w-4" src={deliver} alt="delivery setting" /></span>
          <div className="border-b-[2.5px] border-error/50">Delivery Settings</div>
        </motion.button>
    },
    {
      image: payment,
      color: "text-secondary",
      title: <div className="flex gap-2 items-center">
      {" "}
      <img src={card} alt="card" /> <span className="">Payment Services</span>
    </div>
  ,
      description: "Set up easy payment methods for your customers to ensure secure transactions",
      footer:      <motion.button
          className="font-semibold flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span><img className="w-4" src={card} alt="payment settings" /></span>
          <div className="border-b-[2.5px] border-secondary">Payment Settings</div>
        </motion.button>
    },
  ];
  const [bio, setBio] = useState(
    "I am a very interesting individual interested in the sales and purchase of items"
  );
  const navigate = useNavigate()
  const { user } = useAuthStore();

  useEffect (() => console.log(user), [])

  return (
    <motion.div
      className="bg-whyte w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Banner Image Upload */}
      <div className="bg-white h-56 justify-center gap-2 text-left flex items-center mx-auto">
        <div>
          <img src={upload} alt="" />
        </div>
        <div className="h-40 rounded-md flex flex-col gap-1 justify-center cursor-pointer">
          <span className="text-xs font-bold">
            Click here to upload banner image
          </span>
          <p className="text-xs text-error">
            Dimensions must not exceed 1043 x 335
          </p>
        </div>
      </div>

      {/* Profile Image and Info */}
      <div className="flex flex-col items-center -mt-12">
        <div className="relative w-24 h-24 bg-white border border-primary rounded-full mb-4 md:mb-0 md:mr-6 flex items-center justify-center shadow-md">
          <div className="opacity-80">
          <Avatar user={`${user.firstName} ${user.lastName}` || "Ajao Richard"} style="w-24 h-24 text-5xl text-primary" />
          </div>
          <span className="absolute -right-5 -bottom-5 p-4 text-sm rounded-full flex items-center justify-center text-white font-bold">
          <img src={upload} alt="upload profile image" className="w-8 h-8" />
          <input type="image" className="opacity-0  w-8 h-8 z-10 bg-neutral absolute" />
      </span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center font-bold">
          <h2 className="text-xl">{user.firstName} {user.lastName}</h2>
          <p className="text-xs text-secondary flex items-center gap-2">
            <span>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 4C18.58 4 19.05 4.2 19.42 4.59C19.8 5 20 5.45 20 6V17C20 17.55 19.8 18 19.42 18.41C19.05 18.8 18.58 19 18 19H2C1.42 19 0.95 18.8 0.58 18.41C0.2 18 0 17.55 0 17V6C0 5.45 0.2 5 0.58 4.59C0.95 4.2 1.42 4 2 4H6V2C6 1.42 6.2 0.95 6.58 0.58C6.95 0.2 7.42 0 8 0H12C12.58 0 13.05 0.2 13.42 0.58C13.8 0.95 14 1.42 14 2V4H18ZM2 6V17H18V6H2ZM12 4V2H8V4H12Z"
                  fill="#007C66"
                />
              </svg>
            </span>
            Wine and Exotic Drinks Retailer
          </p>
          <p className="text-xs text-secondary flex items-center gap-2">
            <span>
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8941 16.894L11.5916 22.198C11.3827 22.4071 11.1346 22.573 10.8615 22.6861C10.5884 22.7993 10.2957 22.8575 10.0001 22.8575C9.70452 22.8575 9.41182 22.7993 9.13875 22.6861C8.86567 22.573 8.61757 22.4071 8.40862 22.198L3.10612 16.894C2.20069 15.9887 1.48244 14.9139 0.992387 13.731C0.502333 12.548 0.25007 11.2802 0.25 9.99979C0.24993 8.71939 0.502056 7.45151 0.991981 6.26855C1.48191 5.08558 2.20004 4.0107 3.10537 3.10526C4.0107 2.19983 5.08551 1.48159 6.26842 0.991532C7.45133 0.501478 8.71918 0.249215 9.99959 0.249146C11.28 0.249076 12.5479 0.501201 13.7308 0.991126C14.9138 1.48105 15.9887 2.19918 16.8941 3.10451C17.7996 4.0099 18.5179 5.08479 19.008 6.2678C19.4981 7.45081 19.7503 8.71877 19.7503 9.99926C19.7503 11.2798 19.4981 12.5477 19.008 13.7307C18.5179 14.9137 17.7996 15.9886 16.8941 16.894ZM15.3041 4.69601C14.6076 3.99948 13.7807 3.44696 12.8706 3.07C11.9606 2.69304 10.9852 2.49903 10.0001 2.49903C9.01507 2.49903 8.03968 2.69304 7.12961 3.07C6.21955 3.44696 5.39265 3.99948 4.69612 4.69601C3.99959 5.39255 3.44707 6.21945 3.07011 7.12951C2.69315 8.03957 2.49913 9.01497 2.49913 10C2.49913 10.9851 2.69315 11.9605 3.07011 12.8705C3.44707 13.7806 3.99959 14.6075 4.69612 15.304L10.0001 20.605L15.3041 15.304C16.0008 14.6075 16.5534 13.7807 16.9304 12.8706C17.3075 11.9605 17.5015 10.9851 17.5015 10C17.5015 9.01493 17.3075 8.0395 16.9304 7.12943C16.5534 6.21936 16.0008 5.39248 15.3041 4.69601ZM10.0001 13C9.60061 13.009 9.20332 12.9382 8.83158 12.7916C8.45984 12.6449 8.12114 12.4255 7.83536 12.1462C7.54958 11.8669 7.32249 11.5333 7.16741 11.165C7.01233 10.7967 6.9324 10.4011 6.9323 10.0015C6.9322 9.60192 7.01193 9.20632 7.16683 8.83795C7.32172 8.46958 7.54865 8.13586 7.83429 7.8564C8.11993 7.57694 8.45852 7.35736 8.83019 7.21056C9.20185 7.06375 9.59911 6.99268 9.99862 7.00151C10.7825 7.01885 11.5284 7.34235 12.0767 7.90277C12.625 8.46319 12.9321 9.216 12.9323 10C12.9325 10.7841 12.6257 11.537 12.0777 12.0977C11.5297 12.6584 10.784 12.9823 10.0001 13Z"
                  fill="#0084A7"
                />
              </svg>
            </span>
            Ogbomoso, <span className="font-normal">Nigeria</span>
          </p>
          <Button
            label={
              <>
               <MdEdit />
                <span>Edit Profile</span>
              </>
            }
            btnLabelStyles="border border-primary bg-primary font-bold text-xs text-white p-2 flex items-center rounded-lg"
            click={() => navigate('/app/edit-profile')}
           />
        </div>
      </div>
      <div className="flex flex-col justify-center mx-auto text-center my-4">
        <label htmlFor="star rating" className="text-xs font-bold text-primary">
          Star Rating
        </label>
        <StarRating value={user.ratings.numberOfRatings} starColor="yellow" />
      </div>

      {/* Bio */}
      <div className="flex flex-col text-center mx-8">
        <label className="">Bio</label>
        <div
          className="w-full md:w-64 text-sm p-2 h-36 border text-left border-primary rounded-lg bg-transparent mx-auto"
        >{bio}</div>
      </div>

      <div className="flex flex-col md:flex-row mx-auto justify-center gap-10 px-8 w-full my-4 mb-12">
        {profileCard.map((card, index) => (
          <Card
            cardStyles={`w-full ${card.color}`}
            image={card.image}
            title={card.title}
            description={card.description}
            roundedCorners={true}
            padding={true}
            className="max-w-md"
            footer={card.footer}
          />
        ))}
      </div>
    </motion.div>
  );
};
