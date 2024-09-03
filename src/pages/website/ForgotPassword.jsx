import React from "react";
import { motion } from "framer-motion";
import { PublicLayout } from "../../components/PublicLayout";

export const ForgotPassword = () => {
  return (
    <PublicLayout>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen"
    >
      ForgotPassword
    </motion.div>
    </PublicLayout>
  );
};
