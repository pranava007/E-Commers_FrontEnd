import React, { useState } from 'react'
import { Button, Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
// import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faTablet } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faHome, faLightbulb, faFan } from '@fortawesome/free-solid-svg-icons';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from "flowbite-react";
// import { Avatar } from "flowbite-react";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';





const Header = () => {

  const [currentUser,setCurrentUser] = useState(true)


  return (
    <Navbar fluid rounded>
    <Navbar.Brand href="https://flowbite-react.com">
      {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite React
      </span>
    </Navbar.Brand>
  

    
   
<Dropdown label='Products'  className='  ' inline >

  <Dropdown.Item>
    <FontAwesomeIcon icon={faMobile} className='mr-1 ml-0 outline-none' size="1.5x" color="black" />
    Smartphone
  </Dropdown.Item>
  <Dropdown.Item>
    <FontAwesomeIcon icon={faLaptop} className='mr-1 ml-0' size="1x" color="black" />
    Laptops
  </Dropdown.Item>
  <Dropdown.Item>
    <FontAwesomeIcon icon={faTablet} className='mr-1 ml-0' size="1x" color="black" />  
    Tablets
  </Dropdown.Item>
  <Dropdown.Item>
    <FontAwesomeIcon icon={faClock} className='mr-1 ml-0' size="1x" color="black" />
    Smart Watch
  </Dropdown.Item>
  <Dropdown.Item>
    <FontAwesomeIcon icon={faGamepad} className='mr-1 ml-0' size="1x" color="black" />
    Gaming Console
  </Dropdown.Item>
  <Dropdown.Item>
    <FontAwesomeIcon icon={faHeadphones} className='mr-1 ml-0' size="1x" color="black" />
    Headphone
  </Dropdown.Item>
  <Dropdown.Item>
    <FontAwesomeIcon icon={faTv} className='mr-1 ml-0' size="1x" color="black" />
    TVs
  </Dropdown.Item>
  <Dropdown.Item>
    <FontAwesomeIcon icon={faCamera} className='mr-1 ml-0' size="1x" color="black" />
    Cameras
  </Dropdown.Item>
  <Dropdown.Item>
    <FontAwesomeIcon icon={faHome} className='mr-1 ml-0' size="1x" color="black" />
    Smart Home Devices
  </Dropdown.Item>
</Dropdown>

  
    <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 md:hidden">
      <FontAwesomeIcon icon={faSearch} size="lg" />
      <span className="ml-2">Search</span>
    </button>


    {/* Search Bar */}
    <div className="relative hidden md:block w-80">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg border border-gray-300 p-2 pl-10 text-gray-700 focus:border-cyan-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-cyan-400"
        />
        <svg
          className="absolute left-2 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
        </svg>
      </div>
  
    <div className="flex md:order-2 items-center">
      
     

       {/* Location Icon */}
       <button className="p-2 ml-3 mr-3">
        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
        <span className="ml-2">Location</span>
      </button>
      
     

      <button className="p-2 ml-3 mr-3">
      <FontAwesomeIcon icon={faHeart} />
        <span className="ml-2">WatchList</span>
      </button>




  
      {/* Cart Icon */}
      <button className="p-2 ml-3 mr-3">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        <span className="ml-2">Cart</span>
      </button>
  
      {/* Profile Icon */}
      {currentUser === true ? (
        <div className="flex flex-wrap gap-2">
          {/* <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered /> */}
          <Avatar placeholderInitials='JJ' rounded bordered color="gray" />
        </div>
      ) : (
        <Button className="ml-4">Sign-In</Button>
      )}
  
     
  
      
    </div>
  </Navbar>
  

);
}
  


export default Header