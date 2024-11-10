import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faLaptop, faTabletButton, faClock, faGamepad, faHeadset, faTv, faCameraRetro, faHouseChimney } from "@fortawesome/free-solid-svg-icons";

const CricleProductUi = () => {
  const ProducteIcon = [
    {
      icone: <FontAwesomeIcon icon={faMobile} />,
      name: 'Mobile'
    },
    {
      icone: <FontAwesomeIcon icon={faLaptop} />,
      name: 'Laptop'
    },
    {
      icone: <FontAwesomeIcon icon={faTabletButton} />,
      name: 'Tablets'
    },
    {
      icone: <FontAwesomeIcon icon={faClock} />,
      name: 'Watch'
    },
    {
      icone: <FontAwesomeIcon icon={faGamepad} />,
      name: 'Gaming '
    },
    {
      icone: <FontAwesomeIcon icon={faHeadset} />,
      name: 'Headset'
    },
    {
      icone: <FontAwesomeIcon icon={faTv} />,
      name: 'Smart TVs'
    },
    {
      icone: <FontAwesomeIcon icon={faCameraRetro} />,
      name: 'Camera'
    },
    {
      icone: <FontAwesomeIcon icon={faHouseChimney} />,
      name: 'Smart Home '
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
      {ProducteIcon.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-200 border-2 border-gray-300 mb-2 p-3 transition-transform transform hover:scale-110 hover:shadow-lg">
            {item.icone}
          </div>
          <div className="text-center text-sm font-semibold text-gray-800">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default CricleProductUi;
