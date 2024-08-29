import React from "react";
import { Routes, Route} from "react-router-dom";
import { Landing } from "../pages/website/Landing";

export const AppRoutes = ({ displayLocation }) => {
  return (
    <>
        <Routes location={displayLocation}>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/landing" />
        <Route path="/tasks" /> */}
        </Routes>
    </>
  );
};
