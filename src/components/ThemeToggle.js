import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 text-2xl focus:outline-none"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
