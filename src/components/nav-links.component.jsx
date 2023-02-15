import React from 'react';

const NavLinks = ({ func, isMobile }) => {
  const links = ['home', 'works'];
  return (
    <React.Fragment>
      {links.map((link, index) => (
        <li
          key={`carousel-image-${index}`}
          className={`hover:cursor-pointer hover:text-gray-500`}>
          <a href={`#${link}`} onClick={() => func(false)}>
            {link}
          </a>
        </li>
      ))}
    </React.Fragment>
  );
};

export default NavLinks;
