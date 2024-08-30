import React from "react";
import { Routes, Route} from "react-router-dom";
import { Landing } from "../pages/website/Landing";

export const AppRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/landing" />
        <Route path="/tasks" /> */}
        </Routes>
    </>
  );
};
