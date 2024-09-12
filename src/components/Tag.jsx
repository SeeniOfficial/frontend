import React from "react";

export const Tag = ({ label }) => {
  return (
   <div className="flex justify-end">
     <span
      className={`px-2 py-1 text-xs text-white font-semibold rounded-lg ${label === 'Open' ? 'bg-success' : 'bg-error'}`}
    >
      {label}
    </span>
   </div>
  );
};