import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { l, Links } from "../../Constant/navLinks";

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

  const [myurl, setMyurl] = useState<string>("");
  useEffect(() => {
    setInterval(() => {
      if (typeof window !== "undefined") {
        setMyurl(window.location.href);
      }
    }, 1000);
  });

  const translate = (lang: string) => {
    if (typeof window !== "undefined") {
      if (myurl.includes("?")) {
        const url = myurl.substring(0, myurl.indexOf("="));
        return url + "=" + lang;
      } else {
        return myurl + "?lng=" + lang;
      }
    }
  };

  return (
    <div className="flex w-full justify-between md:justify-around items-center h-20 px-8 absolute z-10 text-white">
      <Link to="/" className="w-[90px]">
        <img
          src={namx}
          alt="namX"
          style={{
            fontWeight: "300",
            lineHeight: "19px",
            color: "rgb(0,0, 238)",
          }}
        />
      </Link>
      <ul className="hidden md:flex">
        {Links.map((link: l) => (
          <Link to={link.path}>
            <li
              className={`p-4 text-[15px]  hover:text-[#C5F267] ${
                location.pathname == link.path &&
                "text-[#C5F267] underline underline-offset-8"
              } decoration-2`}
              style={{
                fontWeight: "400",
                lineHeight: "19px",
                fontFamily: "Kanit, sans-serif",
              }}
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
      <ul className="hidden md:flex">
        <li
          className="p-2 text-[15px]"
          style={{
            fontWeight: "400",
            lineHeight: "19px",
            fontFamily: "Kanit, sans-serif",
          }}
        >
          <a href={translate("en")}>EN</a>
        </li>

        <li
          className="p-2 text-[15px]"
          style={{
            fontWeight: "400",
            lineHeight: "19px",
            fontFamily: "Kanit, sans-serif",
          }}
        >
          <a href={translate("fr")}>FR</a>
        </li>
      </ul>

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
          <Link to="/" className="border-b">
            <li className="p-4">Home</li>
          </Link>
          <Link to="/" className="border-b">
            <li className="p-4">Contact</li>
          </Link>
          <Link to="/" className="border-b">
            <li className="p-4">Services</li>
          </Link>
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
  );
};

export default Navbar;
