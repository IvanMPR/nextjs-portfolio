"use client";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitch({ selectedTheme }) {
  const [theme, setTheme] = useState("default");
  function handleTheme() {
    if (theme === "default") {
      setTheme("dark");
      selectedTheme("dark");
    } else {
      setTheme("default");
      selectedTheme("default");
    }
  }
  return (
    <div onClick={handleTheme}>
      {theme === "default" ? (
        <FaMoon
          size={15}
          className=' hover:cursor-pointer text-text'
          // alt='Change color theme'
        />
      ) : (
        <FaSun
          size={15}
          className=' hover:cursor-pointer text-text'
          // alt='Change color theme'
        />
      )}
    </div>
  );
}
