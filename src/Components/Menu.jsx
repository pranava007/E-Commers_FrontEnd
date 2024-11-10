import React from 'react';

const Menu = () => {
  const menu = [
    { name: 'Mobile' },
    { name: 'Laptop' },
    { name: 'Tablets' },
    { name: 'S-watches' },
    { name: 'Headphone' },
    { name: 'TVs' },
    { name: 'Camera' },
    { name: 'Smart Home' },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {menu.map((item, index) => (
        <div
          key={index}
          className="px-4 py-2 text-gray-700 font-semibold rounded-md border border-gray-300 transition duration-200 ease-in-out transform hover:bg-gray-200 hover:border-gray-400 hover:shadow-lg hover:scale-105"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Menu;
