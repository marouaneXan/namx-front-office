import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import namx from "../../assets/logo-namx.svg";

const Navbar = () => {
  const location: any = useLocation();
  const [nav, setNav] = useState<boolean>(false);
  const [logo, setLogo] = useState<boolean>(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <>
      {location.pathname === "/register" ||
      location.pathname === "/login" ||
      location.pathname === "/results_availabilities" ? (
        ""
      ) : (
        <div className="flex w-full justify-between items-center h-20 px-8 absolute z-10 text-white">
          <Link to="/" className="w-[110px]">
            <img src={namx} alt="namX" />
          </Link>
          <ul className="hidden md:flex">
            <Link to="/">
              <li className="p-4">Home</li>
            </Link>
            <Link to="/">
              <li className="p-4">Contact</li>
            </Link>
            <Link to="/">
              <li className="p-4">Services</li>
            </Link>
          </ul>
          {/* {!connected ? (
            <>
              <Link
                to="/register"
                className="hidden md:flex lg:flex bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-[12px]"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex">
              <Link
                to="/reservations"
                className="hidden md:flex lg:flex bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                reservations
              </Link>
              <button onClick={()=> {logout()}} className="hidden md:flex lg:flex font-bold uppercase text-sm px-6 py-3 mr-1 mb-1">
                Log out
              </button>
            </div>
          )} */}

          {/* Hamburger */}
          <div onClick={handleNav} className="md:hidden z-10">
            {nav ? (
              <AiOutlineClose className="text-black" size={20} />
            ) : (
              <HiOutlineMenuAlt4 size={20} />
            )}
          </div>

          {/* Mobile menu dropdown */}
          <div
            onClick={handleNav}
            className={
              nav
                ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
                : "absolute left-[-100%]"
            }
          >
            <ul>
              <img src={namx} className="w-[100px]" alt="merkob.ma" />
              <Link to="/register" className="border-b">
                <li className="p-4">Home</li>
              </Link>
              <Link to="/register" className="border-b">
                <li className="p-4">Contact</li>
              </Link>
              <Link to="/register" className="border-b">
                <li className="p-4">Services</li>
              </Link>
              {/* {!connected ? (
                <>
                  <Link to="/register" className="border-b">
                    <li className="p-4">Register</li>
                  </Link>
                  <Link to="/register" className="border-b">
                    <li className="p-4">Login</li>
                  </Link>
                </>
              ) : (
                <Link
                  to="/reservations"
                  className="bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  reservations
                </Link>
              )} */}
              <div className="flex justify-between my-6">
                <FaFacebook className="text-2xl cursor-pointer" />
                <FaTwitter className="text-2xl cursor-pointer" />
                <FaYoutube className="text-2xl cursor-pointer" />
                <FaPinterest className="text-2xl cursor-pointer" />
                <FaInstagram className="text-2xl cursor-pointer" />
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
