import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2 + 2 + 5,
    };

    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });

    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  return (
    <div className="lg:mt-36 xs:mt-40">
      <form
        onSubmit={placeOrder}
        className="flex lg:flex-row xs:flex-col items-start justify-between gap-20"
      >
        <div
          className="lg:w-full lg:mx-0 xs:w-[95%] xs:mx-auto bg-white rounded-2xl p-2 flex flex-col"
          style={{
            maxWidth: "max(30%,600px)",
            boxShadow: "0px 0px 15px -12px black",
          }}
        >
          <p className="font-medium text-xl mb-2">Delivery Details:</p>
          <div className="flex gap-5">
            <input
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              className="mb-4 w-full outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-3 rounded-md"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              className="mb-4 w-full outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-3 rounded-md"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            className="mb-4 w-full outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-3 rounded-md"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            className="mb-4 w-full outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-3 rounded-md"
            type="text"
            placeholder="Apartment & Street"
            required
          />
          <div className="flex gap-5">
            <input
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              className="mb-4 w-full outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-3 rounded-md"
              type="text"
              placeholder="City"
              required
            />
            <input
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              className="mb-4 w-full outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-3 rounded-md"
              type="text"
              placeholder="State"
              required
            />
          </div>
          <div className="flex gap-5">
            <input
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              className="mb-4 w-full outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-3 rounded-md"
              type="number"
              placeholder="Zip Code"
              required
            />
            <input
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              className="mb-4 w-full outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-3 rounded-md"
              type="text"
              placeholder="Country"
              required
            />
          </div>
          <input
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            className="mb-4 w-full outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-3 rounded-md"
            type="number"
            placeholder="Phone Number"
            required
          />
        </div>
        <div
          className="bg-white rounded-2xl p-3 lg:w-[40%] xs:w-[90%] xs:mx-auto"
          style={{ boxShadow: "0px 0px 15px -12px black" }}
        >
          <div className="flex flex-col flex-1 gap-5">
            <h2 className="font-medium text-xl">Bill Details:</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="text-start">Item Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>${2}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Platform Fee</p>
                <p>${2}</p>
              </div>
              <div className="flex justify-between">
                <p>GST and Restaurant Charges</p>
                <p>${5}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <b>Total Payment</b>
                <b>${getTotalCartAmount() + 2 + 2 + 5}</b>
              </div>
            </div>
            <button
              type="submit"
              className="border-none text-white bg-orange-600 py-3 px-0 rounded-md cursor-pointer"
              style={{ width: "max(15vw,200px)" }}
            >
              Proceed To Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
