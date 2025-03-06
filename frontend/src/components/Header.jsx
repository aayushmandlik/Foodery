import React from "react";
import { assets } from "../assets/assets";

const backgroundImage =
  window.innerWidth > 1024 ? assets.header_img : assets.header_img_mobile;

const Header = () => {
  return (
    <div
      className="lg:h-[38vw] lg:w-max mx-auto xs:w-full xs:h-[100vw] overflow-hidden xs:rounded-[10px] bg-no-repeat bg-contain fade-in-bottom"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="lg:flex flex-col absolute gap-[1.5vw] items-start max-w-[23%] bottom-[5%] left-[2vw] xs:hidden animate-fade-in-bottom">
        {/* <h2 className="font-bold text-xl text-white">
          Delicious Meals Delivered to Your Doorstep
        </h2> */}
        {/* <h2>Savor the Flavor, Skip the Hassle</h2> */}
        <p style={{ color: "white", fontSize: "1.2vw" }}>
          Discover a world of culinary delights with our food delivery service.
          Whether you're craving comfort food, healthy meals, or gourmet dishes,
          we've got you covered. Fresh ingredients, expertly prepared, and
          delivered hot and fresh right to your door.
        </p>
        <h3
          style={{
            fontSize: "1.3vw",
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 6px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Order Now and Enjoy Free Delivery on Your First Order!
        </h3>
        <a href="/#menu">
          <button
            className="border-none text-[#747474] font-medium bg-white rounded-[50px] shadow-2xl"
            style={{
              fontSize: "max(1vw,13px)",
              padding: "1vw 2.3vw",
            }}
          >
            View Menu
          </button>
        </a>
      </div>
      <div>
        <h2
          className="font-bold text-responsive text-white justify-center items-center animate-fade-in-bottom xs:w-[50%] xs:absolute lg:relative xs:bottom-40 sm:bottom-80 md:bottom-96 lg:bottom-0 sm:left-5 md:left-5 xs:left-2 lg:left-0 xs:lg:w-auto"
          style={{
            fontSize: "max(4.5vw,22px)",
            textShadow: "2px 6px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Delicious Meals Delivered To Your Doorstep
        </h2>
      </div>
      {/* <div className="xs:flex xs:flex-col xs:items-start xs:justify-center xs:gap-5 xs:absolute xs:bottom-40 xs:left-3 lg:hidden">
        <h2
          className="font-bold text-responsive text-white justify-center items-center animate-fade-in-bottom xs:w-[50%] xs: lg:w-auto"
          style={{
            fontSize: "max(4.5vw,22px)",
            textShadow: "2px 6px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Delicious Meals Delivered To Your Doorstep
        </h2>
      </div> */}
      <div className="xs:flex xs:flex-col xs:items-start xs:gap-5 xs:absolute xs:bottom-24 sm:bottom-52 md:bottom-60 sm:left-5 md:left-5 xs:left-3 xs:w-full lg:hidden">
        <a href="/#menu">
          <button
            className="border-none text-[#747474] font-medium bg-white rounded-[50px] shadow-2xl"
            style={{
              fontSize: "max(1vw,13px)",
              padding: "1vw 2.3vw",
            }}
          >
            View Menu
          </button>
        </a>
      </div>
      <h2
        className="lg:flex justify-end absolute bottom-[30%] right-[15px] mr-3 pt-52 font-bold animate-fade-in-bottom xs:hidden"
        style={{
          fontSize: "max(2vw,22px)",
          color: "white",
          textShadow: "2px 6px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Savor the Flavor,
      </h2>
      <h2
        className="lg:flex justify-end absolute bottom-[22%] right-[15px] mr-3 font-bold animate-fade-in-bottom xs:hidden"
        style={{
          fontSize: "max(2vw,22px)",
          color: "white",
          textShadow: "2px 6px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Skip the Hassle
      </h2>
    </div>
  );
};

export default Header;
