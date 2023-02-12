import React from "react";
import Logo from "../logo.png";

const Navbar = () => {
  return (
    <div className="border flex items-center space-x-8 pl-12 py-4">
      <img src={Logo} alt="logo" />
      <h1 className="font-bold text-xl text-blue-400">Movies</h1>
      <h1 className="font-bold text-xl text-blue-400">Favourites</h1>
    </div>
  );
};

export default Navbar;
