import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category, setShowLogin }) => {
  const { food_list } = useContext(StoreContext);
  console.log("Food Check:", food_list);

  return (
    <div className="mt-7">
      <h2 className="font-bold text-4xl mb-5 text-[#49557e]">
        Top Dishes For You
      </h2>
      <div
        className="grid lg:grid-cols-4 xs:grid-cols-2 mt-8 gap-7 mb-7 fade-in-bottom"

        // style={{
        //   display: "grid",
        //   gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
        //   marginTop: "30px",
        //   gap: "30px",
        //   rowGap: "50px",
        // }}
      >
        {food_list
          .filter((item) => category === "All" || category === item.category)
          .map((item, index) => {
            console.log(category, item.category);
            // if (category === "All" || category === item.category)
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
                delay={`${index * 0.1}s`}
                setShowLogin={setShowLogin}
              />
            );
          })}
      </div>
      <hr className="lg:mx-0 my-3 mt-16 h-1 rounded xs:w-[95%] lg:w-full xs:mx-auto bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default FoodDisplay;
