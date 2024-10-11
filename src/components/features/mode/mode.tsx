import { useState } from 'react';

export default function Mode() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
      <div className={darkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        <div className="p-4">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input 
                type="checkbox" 
                checked={darkMode}
                onChange={toggleDarkMode} 
                className="sr-only"
              />
              <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${darkMode ? 'transform translate-x-6 bg-indigo-500' : ''}`}></div>
            </div>
            <span className="ml-3 text-gray-700 flex items-center">
              {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </span>
          </label>
        </div>
      </div>
    );
}
