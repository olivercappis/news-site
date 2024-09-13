import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="btn btn-outline-primary">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
