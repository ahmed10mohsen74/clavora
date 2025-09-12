import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Nav = () => {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full shadow-md fixed top-0 left-0 z-10 bg-white py-4">
        <div className="container m-auto px-4 py-2 flex justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <Link to="/" className="flex gap-2 items-center hover:opacity-80 transition-opacity">
              <FaStore size={30} className="text-blue-600" />
              <h2 className="text-2xl font-semibold">ShopNow</h2>
            </Link>

            {/*links in large screen */}
            <div className="hidden md:flex gap-9 text-2xl">
              <Link to="/" className="relative group py-1">
                <span className="hover:text-blue-500 duration-300">Home</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link to="/about" className="relative group py-1">
                <span className="hover:text-blue-500 duration-300">About</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link to="/services" className="relative group py-1">
                <span className="hover:text-blue-500 duration-300">Services</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link to="/contact" className="relative group py-1">
                <span className="hover:text-blue-500 duration-300">Contact</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </div>
            
            <div className="flex gap-3 items-center">
              <Link to="/cart" className="relative">
                <motion.div whileTap={{ scale: 0.9 }}>
                  <FaShoppingCart size={25} className="cursor-pointer" />
                  <motion.span
                    key={cartItems.length}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                  >
                    {cartItems.length}
                  </motion.span>
                </motion.div>
              </Link>
            </div>

            {/*  icon for mobile */}
            <div className="flex md:hidden gap-5">
              {!isOpen ? (
                <IoIosMenu
                  size={30}
                  className="cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <MdOutlineClose
                  size={30}
                  className="cursor-pointer"
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
                <Link to="/" className="relative group py-2 w-full text-center" onClick={() => setIsOpen(false)}>
                  <span className="hover:text-blue-500 duration-300">Home</span>
                  <span className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
                <Link to="/about" className="relative group py-2 w-full text-center" onClick={() => setIsOpen(false)}>
                  <span className="hover:text-blue-500 duration-300">About</span>
                  <span className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
                <Link to="/services" className="relative group py-2 w-full text-center" onClick={() => setIsOpen(false)}>
                  <span className="hover:text-blue-500 duration-300">Services</span>
                  <span className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
                <Link to="/contact" className="relative group py-2 w-full text-center" onClick={() => setIsOpen(false)}>
                  <span className="hover:text-blue-500 duration-300">Contact</span>
                  <span className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
