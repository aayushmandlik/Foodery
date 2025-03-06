import React from "react";
import { assets } from "../../../frontend/src/assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[4%]">
      <img className="w-[100px]" src={assets.logo} alt="" />
      <img className="w-[40px]" src={assets.usericon} alt="" />
    </div>
  );
};

export default Navbar;
