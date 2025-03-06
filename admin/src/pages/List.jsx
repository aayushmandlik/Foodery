import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { assets } from "../../../frontend/src/assets/assets";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="lg:p-5 p-4 w-[90%]">
      <h1 className="font-semibold text-2xl flex justify-center">
        RESTAURENT MENU LIST
      </h1>
      <div className="border rounded-md lg:p-10 p-2">
        <div
          className="lg:grid grid-cols-5 lg:gap-36 xs:gap-2 items-center xs:px-0 lg:px-7 text-[#49557e] text-xl hidden"
          style={{
            gridTemplateColumns: "0.6fr 0.8fr 2.2fr 1.6fr 0.6fr",
            // gridTemplateColumns: "1fr 1.2fr 1fr 1fr 1fr",
          }}
        >
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        <div
          className="grid grid-cols-5 gap-5 items-center xs:px-0 lg:px-7 text-[#49557e] text-xl lg:hidden"
          style={{
            gridTemplateColumns: "2fr 2fr 2fr 1fr 1.2fr",
          }}
        >
          <p>Img</p>
          <p>Item</p>
          <p>Ctgry</p>
          <p>Price</p>
          <p>Del</p>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <hr className="mt-3 h-[1px] border-none bg-[#e2e2e2]" />
              <div
                className="lg:mt-3 lg:grid grid-cols-5 lg:gap-34 xs:gap-2 items-center hidden"
                style={{
                  gridTemplateColumns: "1.2fr 1.2fr 1.2fr 1.2fr 0.7fr",
                  // gridTemplateColumns: "1fr 1fr 1fr 1fr 0.6fr",
                }}
              >
                <img
                  className="w-20 lg:ml-2 xs:ml-0"
                  src={`${url}/images/` + item.image}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <img
                  onClick={() => removeFood(item._id)}
                  className="w-5 h-5 cursor-pointer"
                  src={assets.deleteicon}
                  alt=""
                />
              </div>
              <div
                className="mt-3 grid grid-cols-6 lg:gap-20 gap-6 items-center lg:hidden"
                style={{
                  gridTemplateColumns: "1.2fr 1.2fr 1.2fr 1fr 1fr",
                }}
              >
                <img
                  className="w-20 lg:ml-2 xs:ml-0"
                  src={`${url}/images/` + item.image}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <img
                  onClick={() => removeFood(item._id)}
                  className="w-4 h-4 cursor-pointer"
                  src={assets.deleteicon}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
