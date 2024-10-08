"use client";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitch() {
  const [darkTheme, setDarkTheme] = useState(false);

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
    <div onClick={handleTheme} className=' cursor-pointer'>
      {darkTheme ? (
        <div className='p-4 hover:bg-bgOffsetColor hover:dark:bg-bgOffsetColorDark rounded-full'>
          <span title='Switch to Light mode'>
            <FaSun
              size={16}
              className=' hover:cursor-pointer text-textColor dark:text-textColorDark'
            />
          </span>
        </div>
      ) : (
        <div className='p-4 hover:bg-bgOffsetColor hover:dark:bg-bgOffsetColorDark rounded-full transition-all'>
          <span title='Switch to Dark mode'>
            <FaMoon
              size={16}
              className=' hover:cursor-pointer text-textColor dark:text-textColorDark'
            />
          </span>
        </div>
      )}
    </div>
  );
}
