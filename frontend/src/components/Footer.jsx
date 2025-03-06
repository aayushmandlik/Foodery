import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-[#49557e] text-white flex flex-col items-center gap-5 px-[8vw] py-5 pt-14 mt-24 rounded-2xl mb-2">
      <div className="w-full flex lg:flex-row lg:items-start xs:flex-col xs:items-center justify-between gap-20">
        <div className="hover:cursor-pointer">
          <img className="w-32 h-32 relative" src={assets.logo} alt="" />
          <div className="flex flex-col items-center font-semibold text-2xl text-gray-300 mb-5">
            <p>Foodery</p>
          </div>
          {/* <p>
            Discover a world of culinary delights with our food delivery
            service. Whether you're craving comfort food, healthy meals, or
            gourmet dishes, we've got you covered. Fresh ingredients, expertly
            prepared, and delivered hot and fresh right to your door.
          </p> */}
          <div className="flex w-10 justify-between gap-3">
            <img
              className="hover:bg-orange-300 transition delay-150 ease-in-out rounded-[50%]"
              src={assets.facebook_icon}
              alt=""
            />
            <img
              className="hover:bg-orange-300 transition delay-150 ease-in-out rounded-[50%]"
              src={assets.twitter_icon}
              alt=""
            />
            <img
              className="hover:bg-orange-300 transition delay-150 ease-in-out rounded-[50%]"
              src={assets.linkedin_icon}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start xs:items-center text-center mt-5">
          <h2 className="mb-4 font-semibold text-xl underline underline-offset-8 text-center">
            COMPANY
          </h2>
          <ul>
            <li className="hover:text-orange-300 hover:cursor-pointer">Home</li>
            <li className="hover:text-orange-300 hover:cursor-pointer">
              About Us
            </li>
            <li className="hover:text-orange-300 hover:cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-orange-300 hover:cursor-pointer">
              Delivery
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start xs:items-center text-center mt-5">
          <h2 className="mb-4 font-semibold text-xl underline underline-offset-8 text-center">
            GET IN TOUCH
          </h2>
          <ul>
            <li className="hover:text-orange-300 hover:cursor-pointer">
              +91 8291416582
            </li>
            <li className="hover:text-orange-300 hover:cursor-pointer">
              foodery@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <hr className="xs:w-full xs:h-1 lg:hidden" />
      <p className="xs:max-w-[80%]">
        Copyright 2024 © Aayush Mandlik. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
