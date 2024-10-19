import { useState } from "react";
import "./App.css";
function App() {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <div className={`app-container ${theme}`}>
      <h1>Theme Checker</h1>
      <button onClick={() => handleTheme()} className="toggle-button">
        Change Theme
      </button>
    </div>
  );
}

export default App;
