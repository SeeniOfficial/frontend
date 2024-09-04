import React from "react";
import { Link } from "react-router-dom";
export const LinkItem = ({ to, children, title }) => (
  <div>
    <Link to={to} className="flex gap-2 p-2 hover:bg-primary rounded-lg w-36 items-center text-black/50 font-bold text-xs hover:text-white" title={title}>
      {children}
    </Link>
  </div>
);
