import React, { useState } from "react";
import { navLinks } from "../constants";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Header({ username }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const FirstLetter = username ? username.charAt(0).toUpperCase() : "";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-white text-2xl ml-3 font-bold">Pathshala</div>
        <div className="hidden lg:flex space-x-4 text-white">
          {navLinks.map((ele, index) => (
            <Link to={ele.url}>
              <span
                className="hover:text-gray-500 text-xl p-2 m-4 cursor-pointer   "
                key={index}
              >
                {ele.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="lg:hidden">
          <MenuIcon
            className="text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex items-center mr-3">
          {username ? (
            <Avatar sx={{ bgcolor: deepPurple[500] }}>{FirstLetter}</Avatar>
          ) : (
            <Avatar sx={{ bgcolor: deepPurple[500] }}>
              <AccountCircleIcon />
            </Avatar>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden rounded-lg shadow-md bg-gradient-to-br from-slate-800 to-gray-900 p-8 py-2">
          <hr />
          <div className="container mx-auto text-white text-center">
            {navLinks.map((ele, index) => (
              <Link to={ele.url}>
                <div
                  className="py-2 hover:text-gray-500 text-xl p-2 m-4 cursor-pointer"
                  key={index}
                >
                  {ele.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
