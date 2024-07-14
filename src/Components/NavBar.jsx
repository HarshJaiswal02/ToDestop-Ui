import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "/pricing", text: "Pricing" },
  { href: "/docs", text: "Docs" },
  { href: "/changelog", text: "Changelog" },
  { href: "/blogs", text: "Blogs" },
  { href: "/login", text: "Login" },
];

import logo from "../assets/asset 0.png";
import electronDevelopersIcon from "../assets/asset 1.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-3 flex bg-white justify-between items-center top-0 left-0 right-0 z-20 shadow-md">
      <Link to="/" className="flex gap-2 items-center flex-1">
        <img className="object-cover max-w-12 max-h-12" src={logo} alt="Logo" />
        <span className="text-lg font-medium font-display">ToDesktop</span>
      </Link>

      <div id="nav-menu" className="hidden lg:flex gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.text}
            to={link.href}
            className="font-medium hover:text-primary"
          >
            {link.text}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex flex-1 justify-end">
        <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
          <img src={electronDevelopersIcon} alt="electronDevelopersIcon " />
          <span className="font-display font-medium">Electron Developers</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <button className="p-2 lg:hidden" onClick={handleMenuToggle}>
        <i className="fa-solid fa-bars text-gray-600"></i>
      </button>

      {isMenuOpen && (
        <div className="fixed z-10 md:hidden bg-white inset-0 p-3">
          <div className="flex justify-between">
            <Link to="/" id="brand" className="flex gap-2 items-center">
              <img
                className="object-cover max-w-12 max-h-12"
                src={logo}
                alt="Logo"
              />
              <span className="text-lg font-medium font-display">
                ToDesktop
              </span>
            </Link>
            <button className="p-2 lg:hidden" onClick={handleMenuToggle}>
              <i className="fa-solid fa-xmark text-gray-600"></i>
            </button>
          </div>

          <div className="mt-6">
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.text}
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="h-[1px] bg-gray-300"></div>
          <button className="mt-6 w-full flex gap-2 items-center px-6 py-4 rounded-lg hover:bg-gray-50">
            <img src={electronDevelopersIcon} alt="" />
            <span>Electron Developers</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
