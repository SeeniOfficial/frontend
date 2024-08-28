import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Content } from "./components/Content";

function App() {
  return (
    <div className="w-full text-center">
    <BrowserRouter>
    <Content />
    </BrowserRouter>
    </div>
  );
}

export default App;
