import React, { useState } from 'react';
import { Button, Navbar } from "flowbite-react";


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: 'Mobile', link: '/mobile' },
    { name: 'Laptop', link: '/laptop' },
    { name: 'Tablets', link: '/tablet' },
    { name: 'S-watches', link: '/swatch' },
    { name: 'Headphone', link: '/headphone' },
    { name: 'Gaming', link: '/gaming' },
    { name: 'TVs', link: '/tvs' },
    { name: 'Camera', link: '/cameras' },
    { name: 'Smart Home', link: '/homedivice' },
  ];

  return (
    <div className="relative">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden m-3 px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
      >
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Menu items */}
      <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0`}>
        {menu.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="px-4 py-2 text-gray-700 font-semibold rounded-md border border-gray-300 transition duration-200 ease-in-out transform hover:bg-gray-200 hover:border-gray-400 hover:shadow-lg hover:scale-105"
          >
            {item.name}
          </a>
        ))}
      </div>
      
    </div>
  );
};

export default Menu;
