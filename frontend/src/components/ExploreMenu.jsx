import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="menu">
      <h1 className="font-bold text-4xl mt-10 text-[#49557e]">Explore Menu</h1>
      <p className="lg:text-2xl text-[#49557e] xs:text-xl">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div
        className="flex justify-between items-center gap-8 text-center my-5 mx-0 overflow-x-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {menu_list.map((item, index) => {
          return (
            <div
              className="fade-in-bottom"
              onClick={() => {
                window.scrollTo({
                  top: 950,
                  behavior: "smooth",
                });
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              }}
              key={index}
              data-delay={`${index * 0.3}s`}

              // style={{ animationDelay: `${index * 0.5}s` }}
            >
              <img
                src={item.menu_image}
                alt=""
                className={`${
                  category === item.menu_name
                    ? "border-[4px] border-solid border-orange-500 p-1 rounded-full"
                    : ""
                } w-[7.5vw] min-w-20 cursor-pointer rounded-[50%] transition ease-in-out hover:scale-110 duration-300`}
              />
              <p
                className="mt-2 text-[#747474] cursor-pointer"
                style={{ fontSize: "max(1.4vw,16px)" }}
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="lg:mx-0 my-3 h-1 rounded xs:w-[95%] lg:w-full xs:mx-auto bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
