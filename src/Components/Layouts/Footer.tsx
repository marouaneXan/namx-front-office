import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <Link to="/" className="hover:underline">
          NAMX
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6 ">
            Voiture à Hydrogène
          </Link>
        </li>
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6">
            NAMX concept
          </Link>
        </li>
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
