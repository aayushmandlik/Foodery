import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { assets } from "../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="mt-40 lg:mt-32 ml-0">
      <h1 className="font-semibold text-2xl flex justify-center">My Orders</h1>
      <div
        className="lg:flex flex-col lg:gap-5 lg:mt-8 lg:bg-[#f5f5f5] lg:w-full lg:rounded-2xl lg:p-3 xs:hidden"
        style={{ boxShadow: "0px 0px 18px -12px black" }}
      >
        {data.map((order, index) => {
          return (
            <div>
              {/* <h3>Order {order.order_id}</h3>
              <p>Order Date: {order.order_date}</p>
              <p>Order Status: {order.order_status}</p> */}
              <hr className="my-3 h-[1px] border-none bg-[#e2e2e2]" />
              <div
                key={index}
                className="grid grid-cols-6 items-center gap-7 text-[14px] py-2 px-5 text-[#454545] bg-white w-full rounded-2xl p-3"
                style={{
                  gridTemplateColumns: "0.5fr 2fr 1fr 1fr 2fr 1fr",
                  boxShadow: "10px 10px 15px -12px black",
                }}
              >
                <img className="w-[50px]" src={assets.parcel_icon} alt="" />
                <p>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + "(" + item.quantity + ")";
                    } else {
                      return (
                        item.name + " x " + "(" + item.quantity + ")" + ", "
                      );
                    }
                  })}
                </p>
                <p>${order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p>
                  <span className="text-orange-500 mr-1">&#x25cf;</span>
                  <b className="font-medium text-[#454545]">{order.status}</b>
                </p>
                <button
                  onClick={fetchOrders}
                  className="border-none py-3 px-0 rounded-md bg-orange-200 cursor-pointer font-medium hover:bg-orange-300"
                >
                  Track Order
                </button>
              </div>
              <hr className="my-3 h-[1px] border-none bg-[#e2e2e2]" />
            </div>
          );
        })}
      </div>
      <div
        className="flex flex-col gap-5 mt-8 bg-[#f5f5f5] w-full rounded-2xl p-3 lg:hidden"
        style={{ boxShadow: "0px 0px 18px -12px black" }}
      >
        {data.map((order, index) => {
          return (
            <div>
              {/* <h3>Order {order.order_id}</h3>
              <p>Order Date: {order.order_date}</p>
              <p>Order Status: {order.order_status}</p> */}
              <hr className="my-3 h-[1px] border-none bg-[#e2e2e2]" />
              <div
                key={index}
                className="grid grid-cols-3 items-center gap-7 text-[12px] py-2 px-5 text-[#454545] bg-white w-full rounded-2xl p-3"
                style={{
                  gridTemplateColumns: "1fr 2.2fr 1fr",
                  boxShadow: "10px 10px 15px -12px black",
                }}
              >
                <img className="w-[50px]" src={assets.parcel_icon} alt="" />
                <p>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + "(" + item.quantity + ")";
                    } else {
                      return (
                        item.name + " x " + "(" + item.quantity + ")" + ", "
                      );
                    }
                  })}
                </p>
                <p className="ml-4">${order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p>
                  <span className="text-orange-500 mr-1">&#x25cf;</span>
                  <b className="font-medium text-[#454545]">{order.status}</b>
                </p>
                <button
                  onClick={fetchOrders}
                  className="text-[10px] border-none py-3 px-0 rounded-md bg-orange-200 cursor-pointer font-medium hover:bg-orange-300"
                >
                  Track Order
                </button>
              </div>
              <hr className="my-3 h-[1px] border-none bg-[#e2e2e2]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
