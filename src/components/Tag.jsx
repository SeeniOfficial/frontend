import React from "react";

export const Tag = ({ label, color = "green", className = "" }) => {
  return (
    <span
      className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${className}`}
    >
      {label}
    </span>
  );
};