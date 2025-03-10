import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

interface ThemeSwitchProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="flex items-center relative">
      <div
        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
          theme === 'dark' ? 'justify-end' : 'justify-start'
        }`}
        onClick={toggleTheme}
      >
        <div className="w-4 h-4 bg-white rounded-full shadow"></div>
      </div>
      <div className="ml-2">
        {theme === 'light' ? (
          <FaSun className="text-xl text-yellow-500" />
        ) : (
          <FaMoon className="text-xl text-gray-600" />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitch;
