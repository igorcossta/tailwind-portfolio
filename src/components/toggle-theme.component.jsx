import React, { useState, Fragment } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const ToggleTheme = ({ isMobileMenu, func }) => {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    const root = document.getElementById('root');
    root.classList.toggle('dark');
    setIsDark(root.classList.contains('dark'));

    func(false);
  };

  return (
    <Fragment>
      {isDark ? (
        <MdLightMode
          className={`h-6 w-6 cursor-pointer text-yellow-500 ${
            isMobileMenu && 'mx-auto'
          } ${!isMobileMenu && 'hidden md:block'}`}
          onClick={() => toggle()}
        />
      ) : (
        <MdDarkMode
          className={`h-6 w-6 cursor-pointer text-yellow-500 ${
            isMobileMenu && 'mx-auto'
          } ${!isMobileMenu && 'hidden md:block'}`}
          onClick={() => toggle()}
        />
      )}
    </Fragment>
  );
};

export default ToggleTheme;
