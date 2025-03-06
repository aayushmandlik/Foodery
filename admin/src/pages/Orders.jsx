import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="w-[90%]">
      <h1 className="font-semibold text-2xl flex justify-center">
        Orders Page
      </h1>
      <div
        className="lg:flex flex-col lg:gap-5 lg:mt-8 lg:bg-[#f5f5f5] lg:w-[95%] lg:rounded-2xl lg:p-3 hidden lg:mx-auto"
        style={{ boxShadow: "0px 0px 18px -12px black" }}
      >
        {orders.map((order, index) => {
          return (
            <div>
              <hr className="my-3 h-[1px] border-none bg-[#e2e2e2]" />
              <div
                key={index}
                className="grid grid-cols-5 items-center gap-7 text-[14px] py-2 px-5 text-[#454545] bg-white w-full rounded-2xl p-3"
                style={{
                  gridTemplateColumns: "0.5fr 5fr 1fr 1fr 1fr",
                  boxShadow: "10px 10px 15px -12px black",
                }}
              >
                <img className="w-[50px]" src={assets.parcel_icon} alt="" />
                {/* <h2>Order ID: {order.orderId}</h2>
            <h2>Customer Name: {order.customerName}</h2>
            <h2>Order Date: {order.orderDate}</h2> */}
                <div>
                  <p className="font-medium my-2 border-1 border-solid rounded-sm p-2">
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
                  <p className="font-semibold border-1 border-solid rounded-sm p-1 mb-2">
                    Customer Name:{" "}
                    {order.address.firstName + " " + order.address.lastName}
                  </p>
                  <div className="font-medium border-1 border-solid rounded-sm p-1">
                    <p>Address: {order.address.street + ","}</p>
                    <p>
                      {order.address.city +
                        ", " +
                        order.address.state +
                        ", " +
                        order.address.country +
                        ", " +
                        order.address.zipcode}
                    </p>
                  </div>
                  <p className="font-medium border-1 border-solid rounded-sm p-0.5 my-2">
                    Phone: {order.address.phone}
                  </p>
                </div>
                <p>Items: {order.items.length}</p>
                <p>Amount: ${order.amount}</p>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                  className="bg-orange-200 border-1 border-solid border-orange-500 rounded-sm outline-none p-2.5 w-[max(10vw,150px)]"
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
              <hr className="my-3 h-[1px] border-none bg-[#e2e2e2]" />
            </div>
          );
        })}
      </div>
      <div
        className="flex flex-col gap-5 mt-8 bg-[#f5f5f5] w-[98%] rounded-2xl p-3 mx-auto lg:hidden"
        style={{ boxShadow: "0px 0px 18px -12px black" }}
      >
        {orders.map((order, index) => {
          return (
            <div>
              <hr className="my-3 h-[1px] border-none bg-[#e2e2e2]" />
              <div
                key={index}
                className="grid grid-cols-3 items-center gap-7 text-[14px] py-2 px-5 text-[#454545] bg-white w-full rounded-2xl p-3"
                style={{
                  gridTemplateColumns: "0.5fr 2fr 1fr",
                  boxShadow: "10px 10px 15px -12px black",
                }}
              >
                <img className="w-[50px]" src={assets.parcel_icon} alt="" />
                {/* <h2>Order ID: {order.orderId}</h2>
            <h2>Customer Name: {order.customerName}</h2>
            <h2>Order Date: {order.orderDate}</h2> */}
                <div>
                  <p className="font-medium my-2 border-1 border-solid rounded-sm p-2">
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
                  <p className="font-semibold border-1 border-solid rounded-sm p-1 mb-2">
                    Customer Name:{" "}
                    {order.address.firstName + " " + order.address.lastName}
                  </p>
                  <div className="font-medium border-1 border-solid rounded-sm p-1">
                    <p>Address: {order.address.street + ","}</p>
                    <p>
                      {order.address.city +
                        ", " +
                        order.address.state +
                        ", " +
                        order.address.country +
                        ", " +
                        order.address.zipcode}
                    </p>
                  </div>
                  <p className="font-medium border-1 border-solid rounded-sm p-0.5 my-2">
                    Phone: {order.address.phone}
                  </p>
                </div>
                <p>Items: {order.items.length}</p>
                <p>Amount: ${order.amount}</p>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                  className="bg-orange-200 border-1 border-solid border-orange-500 rounded-sm outline-none p-2.5 w-[max(10vw,150px)]"
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
              <hr className="my-3 h-[1px] border-none bg-[#e2e2e2]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
