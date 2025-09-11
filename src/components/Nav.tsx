import { PiEyedropperSampleFill } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";


import { useState } from "react";
import { useCart } from "../context/CartContext";

const Nav = () => {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full shadow-md fixed top-0 left-0 z-10 bg-white py-4">
        <div className="container m-auto px-4 py-2 flex justify-between items-center ">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <PiEyedropperSampleFill size={30} color="gray" />
              <h2 className="text-2xl ">logo</h2>
              
            </div>

            {/*links in large scr een */}
            <div className="hidden md:flex gap-9 text-2xl">
              <Link to="/" className="hover:text-blue-500 duration-500">Home</Link>
              <Link to="/about" className="hover:text-blue-500 duration-500">About</Link>
              <Link to="/services" className="hover:text-blue-500 duration-500">Services</Link>
              <Link to="/contact" className="hover:text-blue-500 duration-500">Contact</Link>
            </div>
            <div className="flex gap-3 items-center">
                <Link to="/cart">
                  <FaShoppingCart size={25} className="cursor-pointer" />
                  <span className="font-semibold">{cartItems.length}</span>
                </Link>
            </div>
            {/*  icon for mobile */}
            <div className="flex md:hidden gap-5">
              {!isOpen ? (
                <IoIosMenu
                  size={30}
                  className={`cursor-pointer  `}
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <MdOutlineClose
                  size={30}
                  className={`cursor-pointer`}
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
            </div>

            {/* Mobile menu */}
            <div
              className={`absolute top-16 left-0 right-0 text-2xl bg-white shadow-lg md:hidden overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="flex flex-col items-center py-4">
                <Link to="/" className="py-2 hover:text-blue-500 duration-500" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" className="py-2 hover:text-blue-500 duration-500" onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/services" className="py-2 hover:text-blue-500 duration-500" onClick={() => setIsOpen(false)}>Services</Link>
                <Link to="/contact" className="py-2 hover:text-blue-500 duration-500" onClick={() => setIsOpen(false)}>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
