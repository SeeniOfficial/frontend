import { useState } from "react";
import { toogleAppTheme } from "./hooks/toogleAppTheme";
import { BrowserRouter } from "react-router-dom";
import { Content } from "./components/Content";

function App() {
  const [colorTheme, setTheme] = toogleAppTheme();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkMode(!darkMode);
    console.log(colorTheme, darkMode)
  };

  return (
    <div className="bg-slate-400 dark:bg-slate-950 w-full flex flex-col gap-6 h-screen auto p-10 text-center">
   <div className="flex justify-end gap-2 items-center">
   <button onClick={() => toggleDarkMode()} className="p-2">Switch</button>
   {!darkMode ? <div>LightMode</div>: <div>DarkMode</div>}
   </div>
    <BrowserRouter>
    <Content />
    </BrowserRouter>
    </div>
  );
}

export default App;
