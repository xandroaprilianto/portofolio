import { useEffect, useState } from "react";
import { BiSolidSun } from 'react-icons/bi';
import { FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <BiSolidSun /> : <FaMoon/>}
    </button>
  );
};

export default DarkModeToggle;