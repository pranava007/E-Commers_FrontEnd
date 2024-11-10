import React, { useState } from "react";
import { Button, Modal, Dropdown } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import {
  faMobile,
  faLaptop,
  faTablet,
  faClock,
  faGamepad,
  faHeadphones,
  faTv,
  faCamera,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  const [openModal, setOpenModal] = useState(false); // Set default modal state to false
  const [price, setPrice] = useState(50000); // Set default price range value

  return (
    <>
      <button
        className="m-3 p-1 rounded border border-black outline outline-1 outline-white text-black hover:bg-gray-100"
        onClick={() => setOpenModal(!openModal)}
      >
        <FontAwesomeIcon icon={faFilter} /> {/* Filter Icon */}
        <span className="ml-1">Filter Products</span>
      </button>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Product Filter</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            {/* Product Dropdown */}
            <div className="mb-4">
              <Dropdown label="Products" inline>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faMobile} className="mr-2" />{" "}
                  Smartphone
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faLaptop} className="mr-2" /> Laptops
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faTablet} className="mr-2" /> Tablets
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faClock} className="mr-2" /> Smart
                  Watch
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faGamepad} className="mr-2" /> Gaming
                  Console
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faHeadphones} className="mr-2" />{" "}
                  Headphone
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faTv} className="mr-2" /> TVs
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faCamera} className="mr-2" /> Cameras
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faHome} className="mr-2" /> Smart Home
                  Devices
                </Dropdown.Item>
              </Dropdown>
            </div>

            {/* Brand Filter */}
            <div className="mb-4">
              <h1 className="text-2xl font-semibold mb-2">Brand</h1>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Apple",
                  "Samsung",
                  "Google",
                  "Xiaomi",
                  "Oppo",
                  "Vivo",
                  "Sony",
                  "Huawei",
                  "Motorola",
                ].map((brand) => (
                  <label key={brand} className="flex items-center space-x-2">
                    <input type="checkbox" id={brand} />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <h1 className="text-2xl font-semibold mb-2">Price Range</h1>
              <div className="flex items-center justify-between text-sm">
                <span>₹0</span>
                <span>₹{price}</span>
                <span>₹100,000</span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full mt-2"
              />
            </div>

            {/* Discount */}
            <div className="mb-4">
              <h1 className="text-2xl font-semibold mb-2">Discount %</h1>
              <input
                type="text"
                placeholder="Enter discount"
                className="w-full px-2 py-1 border rounded"
              />
            </div>

            {/* Pay on Delivery */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="Delivery" />
              <label htmlFor="Delivery">Pay on Delivery</label>
            </div>

            {/* Submit Button */}
            <div className="mt-4 text-right">
              <Button
                className="bg-blue-700 text-white"
                type="submit"
                color="primary"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Filter;
