import React from 'react'
import { Carousel } from "flowbite-react";


const Headphones = () => {

  
let start = <svg
className="h-5 w-5 text-yellow-300"
fill="currentColor"
viewBox="0 0 20 20"
xmlns="http://www.w3.org/2000/svg"
>
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>

let data = [
  {
    image: "https://flowbite-react.com/images/products/apple-watch.png",
    iamgename: "Apple Watch Series 7 in colors pink, silver, and black",
    title: " Apple Watch Series 7 GPS, ort",
   
    ratint: [ start , start , start , start ,  start , ],
    
    ratingnum: "",
    price: "5,999",
  },

  {
    image: "https://flowbite-react.com/images/products/apple-watch.png",
    iamgename: "Apple Watch Series 7 in colors pink, silver, and black",
    title: " Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
   
    ratint: [ start , start , start , start ,  start , ],

    ratingnum: "",
    price: "5,999",
  },

  {
    image: "https://flowbite-react.com/images/products/apple-watch.png",
    iamgename: "Apple Watch Series 7 in colors pink, silver, and black",
    title: " Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
 
    ratint: [ start , start , start , start ,  start , ],

    ratingnum: "",
    price: "5,999",
  },

  {
    image: "https://flowbite-react.com/images/products/apple-watch.png",
    iamgename: "Apple Watch Series 7 in colors pink, silver, and black",
    title: " Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  
    ratint: [ start , start , start , start ,  start , ],

    ratingnum: "",
    price: "5,999",
  },
];


  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
    {data.map((item, index) => {
    return(
      <div key={index} className="p-2 border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 sm:h-56 xl:h-64 2xl:h-72 rounded-lg overflow-hidden">
        {/* Carousel for images */}
        <Carousel className="w-full h-full">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
            className="w-full h-full object-cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
            className="w-full h-full object-cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
            className="w-full h-full object-cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
            className="w-full h-full object-cover"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
            className="w-full h-full object-cover"
          />
        </Carousel>
      </div>

      <a href="#" className="block mt-3 p-2">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>
        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
      </a>

      <div className="mb-4 flex items-center mt-2 p-2">
        {item.ratint.map((ele, ind) => {
          return <div key={ind}>{ele}</div>;
        })}
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          5.0
        </span>
      </div>

      <div className="flex items-center justify-between mt-3 p-2">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          {item.price}
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </div>
    )
    })}
    </div>
  )
}

export default Headphones