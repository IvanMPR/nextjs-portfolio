"use client";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitch() {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  function handleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div onClick={handleTheme}>
      {darkTheme ? (
        <FaSun
          size={15}
          className=' hover:cursor-pointer text-textColor dark:text-textColorDark'
          // alt='Change color theme'
        />
      ) : (
        <FaMoon
          size={15}
          className=' hover:cursor-pointer text-textColor dark:text-textColorDark'
          // alt='Change color theme'
        />
      )}
    </div>
  );
}
