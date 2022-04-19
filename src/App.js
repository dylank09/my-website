import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { FaSun, FaRegMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineArrowBackIos } from "react-icons/md";
import darkLogo from "./assets/dk_button.svg";
import lightLogo from "./assets/dk_button_inverted.svg";
import CrossfadeImage from "react-crossfade-image";

import ReactSwitch from "react-switch";
import SideBar from "./components/SideBar.js";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  var colour = theme === "dark" ? "white" : "black";

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="App" data-theme={theme}>
      <div className={menuOpen ? "sidebar-opened" : "sidebar"}>
        <CrossfadeImage
          alt="website logo"
          className="logo-image"
          src={theme === "dark" ? darkLogo : lightLogo}
          style={{
            width: "100%",
            maxWidth: "150px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <SideBar />
        <div className="dark-mode-container">
          <hr className="sidebar-break"></hr>
          <div>
            <span>{theme === "dark" ? "Dark" : "Light"} Mode</span>
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
      <div style={{ position: "absolute", zIndex: 2 }}>
        {menuOpen ? (
          <MdOutlineArrowBackIos
            className="hamburger-button"
            size={32}
            onClick={toggleMenuOpen}
            color={colour}
          />
        ) : (
          <GiHamburgerMenu
            className="hamburger-button"
            size={32}
            onClick={toggleMenuOpen}
            color={colour}
          />
        )}
      </div>
      <div className="main" onClick={menuOpen ? toggleMenuOpen : null}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
