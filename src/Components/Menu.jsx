import React from 'react';

const Menu = () => {
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
    <div className="flex justify-center space-x-4">
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
  );
};

export default Menu;
