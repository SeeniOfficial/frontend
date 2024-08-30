import React, { useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
// import { Content } from "./components/Content";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className
    >
      <AppRoutes />
    </div>
    )
}

export default App;
