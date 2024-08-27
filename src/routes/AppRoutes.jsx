import React from "react";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = ({displayLocation}) => {
  return (
    <>
      <Routes location={displayLocation}>
        <Route path="/" />
        <Route path="/create" />
        <Route path="/tasks" />
      </Routes>
    </>
  );
};
