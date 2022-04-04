import React from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { FaSun, FaRegMoon } from "react-icons/fa";
import darkLogo from "./assets/dk_button.svg";
import lightLogo from "./assets/dk_button_inverted.svg";

import ReactSwitch from "react-switch";
import SideBar from "./components/SideBar.js";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="sidebar">
        <Route exact path="/" element={Home} />
        <Route exact path="/projects" element={Projects} />
        <Route exact path="/about" element={About} />
        <Route exact path="/contact" element={Contact} />
        {/* <Redirect to="/" /> */}
        {theme === "dark" ? (
          <img
            id="logo"
            className="logo-image"
            src={darkLogo}
            alt="website logo"
          />
        ) : (
          <img
            id="logo"
            className="logo-image"
            src={lightLogo}
            alt="website logo"
          />
        )}
        <SideBar />
        <div className="dark-mode-container">
          <hr className="sidebar-break"></hr>
          <div>
            <span>Dark Mode</span>
            <ReactSwitch
              className="dark-mode-switch"
              onChange={switchTheme}
              checked={theme === "dark"}
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <FaSun color="white" width="100%" height="100%" />
                </div>
              }
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <FaRegMoon color="white" width="100%" height="100%" />
                </div>
              }
              offColor="#e68a00"
              onColor="#000000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
