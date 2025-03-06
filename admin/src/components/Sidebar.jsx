import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[20%] min-h-[100vh] border-[1.5px] border-solid border-[#a9a9a9] border-t-0">
      <div className="pt-12 pl-[20%] flex flex-col gap-5">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 border-[1px] border-solid border-[#a9a9a9] border-r-0 px-2.5 py-2 rounded-l-md ${
              isActive ? "bg-[#e5c7c1] border-orange-500" : ""
            }`
          }
        >
          <img className="w-[45px]" src={assets.add_icon_white} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 border-[1px] border-solid border-[#a9a9a9] border-r-0 px-2.5 py-2 rounded-l-md ${
              isActive ? "bg-[#e5c7c1] border-orange-500" : ""
            }`
          }
        >
          <div className="w-[45px] flex justify-center">
            <img className="w-[25px]" src={assets.list} alt="" />
          </div>
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 border-[1px] border-solid border-[#a9a9a9] border-r-0 px-2.5 py-2 rounded-l-md ${
              isActive ? "bg-[#e5c7c1] border-orange-500" : ""
            }`
          }
        >
          <img className="w-[45px]" src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
