import { Link } from "react-router-dom";
import logo from "../assets/asset 0.png";
import asset54 from "../assets/asset 54.svg";
const Footer = () => {
  return (
    <footer className="px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-10">
      <div className="rounded-lg border lg:border-none lg:bg-gray-50 bg-gray-50 flex flex-col lg:flex-row-reverse items-center px-8 py-12 gap-8">
        <Link href="#" className="font-light font-display">
          Documentation
        </Link>
        <div className="flex gap-8 text-lg">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <i className="fa-brands fa-github"></i>
          </Link>
        </div>
        <Link href="#" id="brand" className="flex gap-2 items-center flex-1">
          <img
            className="object-cover max-w-12 max-h-12"
            src={logo}
            alt="Logo"
          ></img>
          <span className="text-lg font-medium font-display">ToDesktop</span>
        </Link>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center my-12">
        <div className="flex gap-2 items-center ">
          <img className="w-4 h-4" src={asset54} alt="Y-combinator"></img>
          <p className="text-sm text-gray-600">Link Y Combinator company.</p>
        </div>
        <p className="text-sm text-gray-400">
          © 2024 ToDesktop, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
