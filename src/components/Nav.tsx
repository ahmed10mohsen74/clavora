import { PiEyedropperSampleFill } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";


import { useState } from "react";

const Nav = () => {
  const Navlinks = ["Home", "About", "Services", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full shadow-md fixed top-0 left-0 z-10 bg-white py-4">
        <div className="container m-auto px-4 py-2 flex justify-between items-center ">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <PiEyedropperSampleFill size={30} />
              <h2 className="text-2xl ">logo</h2>
              <h2 className="text-2xl ">logo</h2>
              <h2 className="text-2xl ">logo 3</h2>
            </div>

            {/*links in large scr een */}
            <div className="hidden md:flex gap-7 text-2xl">
              {Navlinks.map((item) => (
                <a href="#" className="hover:text-blue-500 duration-500 ">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex gap-3 items-center">
                <FaShoppingCart size={25} className="cursor-pointer" />
                <span>0</span>

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
                {Navlinks.map((item) => (
                  <a href="#" className="py-2 hover:text-blue-500 duration-500">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
