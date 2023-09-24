import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "@Images/senyo_logo.png";

export default function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(""); // State to track the active icon

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleLogoClick = () => {
    setActiveIcon(""); // Clear the active icon when the logo is clicked
  };

  return (
    <nav className="bg-gray-600 text-white flex flex-col hidden md:flex w-24">
      <div>
        <Link to="/" onClick={handleLogoClick}>
          <img src={logo} alt="logo" className="w-50 h-50 mb-24" />
        </Link>
      </div>
      <div className="flex flex-col h-full justify-normal items-center">
        <Link to="/" className="flex items-center mb-6">
          <FontAwesomeIcon
            icon={faHome}
            className={`mr-2 text-xl p-2 rounded-md ${
              activeIcon === "home"
                ? "text-gray-600 bg-white"
                : "hover:text-gray-600 hover:bg-white"
            }`}
            title="Home"
            onClick={() => handleIconClick("home")}
          />
        </Link>
        <Link to="/about" className="flex items-center mb-6">
          <FontAwesomeIcon
            icon={faUser}
            className={`mr-2 text-xl p-2 rounded-md ${
              activeIcon === "about"
                ? "text-gray-600 bg-white"
                : "hover:text-gray-600 hover:bg-white"
            }`}
            title="About"
            onClick={() => handleIconClick("about")}
          />
        </Link>
        <Link to="/contact" className="flex items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`mr-2 text-xl p-2 rounded-md ${
              activeIcon === "contact"
                ? "text-gray-600 bg-white"
                : "hover:text-gray-600 hover:bg-white"
            }`}
            title="Contact"
            onClick={() => handleIconClick("contact")}
          />
        </Link>
      </div>
    </nav>
  );
}
