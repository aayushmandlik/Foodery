// import React, { useContext } from "react";
// import { StoreContext } from "../context/StoreContext";
// import { assets } from "../assets/assets";

// const Cart = () => {
//   const { cartItems, food_list, addToCart, removeFromCart, deleteFromCart } =
//     useContext(StoreContext);
//   return (
//     <div className="mt-40">
//       <div
//         className="bg-white w-full  rounded-2xl p-3"
//         style={{ boxShadow: "0px 0px 15px -12px black" }}
//       >
//         <div className="grid grid-cols-6 gap-36 items-center px-7 text-[#49557e] text-xl">
//           <p>Item</p>
//           <p>Menu</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         {/* <hr /> */}
//         {food_list.map((item, index) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div>
//                 <hr className="mt-3 h-[1px] border-none bg-[#e2e2e2]" />
//                 <div
//                   key={index}
//                   className=" mt-3 grid grid-cols-6 gap-20 items-center"
//                   style={{ gridTemplateColumns: "1fr 1.1fr 1fr 1fr 1fr 0.5fr" }}
//                 >
//                   <img className="w-20 ml-2" src={item.image} alt="" />
//                   <p className="text-start">{item.name}</p>
//                   <p>Rs{item.price}</p>
//                   <div className="flex gap-2 items-center border border-orange-600 w-min h-auto px-2 rounded-lg bg-orange-200">
//                     <p
//                       onClick={() => removeFromCart(item._id)}
//                       className="text-[20px] cursor-pointer"
//                     >
//                       -
//                     </p>
//                     <p>{cartItems[item._id]}</p>
//                     <p
//                       onClick={() => addToCart(item._id)}
//                       className="text-[20px] cursor-pointer"
//                     >
//                       +
//                     </p>
//                   </div>
//                   <p>Rs{cartItems[item._id] * item.price}</p>
//                   <img
//                     onClick={() => deleteFromCart(item._id)}
//                     className="w-5 h-5 cursor-pointer"
//                     src={assets.deleteicon}
//                     alt=""
//                   />
//                 </div>
//               </div>
//             );
//           }
//         })}
//       </div>
//       <div
//         className="mt-20 bg-white rounded-2xl p-3 w-[70%] mx-auto"
//         style={{ boxShadow: "0px 0px 15px -12px black" }}
//       >
//         <div className="flex flex-col flex-1 gap-5">
//           <h2>Bill Details</h2>
//           <div className="flex flex-col gap-4">
//             <div className="flex justify-between">
//               <p className="text-start">Item Total</p>
//               <p>{0}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>Delivery Fee</p>
//               <p>{2}</p>
//             </div>
//             <hr />
//             <div className="flex justify-between">
//               <p>Platform Fee</p>
//               <p>{0}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>GST and Restaurent Charges</p>
//               <p>{0}</p>
//             </div>
//             <hr />
//             <div className="flex justify-between">
//               <b>Total Paymeny</b>
//               <b>{0}</b>
//             </div>
//           </div>
//           <button
//             className="border-none text-white bg-orange-600 py-3 px-0 rounded-md cursor-pointer"
//             style={{ width: "max(15vw,200px)" }}
//           >
//             Proceed To Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// With Cart Is Empty Feature

import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    food_list,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCartAmount,
    url,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  // Check if the cart is empty
  const isCartEmpty = Object.values(cartItems).every(
    (quantity) => quantity === 0
  );

  return (
    <div className="mt-40">
      <div
        className="bg-white w-full rounded-2xl p-3"
        style={{ boxShadow: "0px 0px 15px -12px black" }}
      >
        {isCartEmpty ? (
          <div className="flex flex-col gap-3 items-center  text-center text-xl text-[#49557e]">
            <img className="w-64" src={assets.emptycart} alt="" />
            <p className="font-medium text-3xl">Your cart is empty.</p>
            <p>You can go to home page to view more Menu</p>
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/"
            >
              <button
                className="border-none text-white bg-orange-600 py-1 px-0 rounded-md cursor-pointer"
                style={{ width: "max(10vw,150px)" }}
              >
                Home
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <div
              className="lg:grid grid-cols-6 lg:gap-36 xs:gap-2 items-center xs:px-0 lg:px-7 text-[#49557e] text-xl xs:hidden"
              style={{
                gridTemplateColumns: "1fr 1.1fr 1fr 1fr 1fr 0.5fr",
              }}
            >
              <p>Item</p>
              <p>Menu</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <div
              className="grid grid-cols-5 xs:gap-2 items-center xs:px-0 lg:px-7 text-[#49557e] text-xl lg:hidden"
              style={{
                gridTemplateColumns: "1fr 1.1fr 1.2fr 1fr 1fr",
              }}
            >
              <p>Item</p>
              <p>Menu</p>
              <p>Price</p>
              <p>Qty</p>
              <p>Total</p>
            </div>
            <br />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={index}>
                    <hr className="mt-3 h-[1px] border-none bg-[#e2e2e2]" />
                    <div
                      className="lg:mt-3 lg:grid grid-cols-6 lg:gap-20 xs:gap-2 items-center xs:hidden"
                      style={{
                        gridTemplateColumns: "1fr 1.1fr 1fr 1fr 1fr 0.5fr",
                      }}
                    >
                      <img
                        className="w-20 lg:ml-2 xs:ml-0"
                        src={url + "/images/" + item.image}
                        alt=""
                      />
                      <p className="text-start">{item.name}</p>
                      <p>Rs{item.price}</p>
                      <div className="flex gap-2 items-center border border-orange-600 w-min h-auto px-2 rounded-lg bg-orange-200">
                        <p
                          onClick={() => removeFromCart(item._id)}
                          className="text-[20px] cursor-pointer"
                        >
                          -
                        </p>
                        <p>{cartItems[item._id]}</p>
                        <p
                          onClick={() => addToCart(item._id)}
                          className="text-[20px] cursor-pointer"
                        >
                          +
                        </p>
                      </div>
                      <p>Rs{cartItems[item._id] * item.price}</p>
                      <img
                        onClick={() => deleteFromCart(item._id)}
                        className="w-5 h-5 cursor-pointer"
                        src={assets.deleteicon}
                        alt=""
                      />
                    </div>
                    {/* For MObile Device */}
                    <div
                      className="mt-3 grid grid-cols-6 lg:gap-20 xs:gap-5 items-center lg:hidden"
                      style={{
                        gridTemplateColumns: "1fr 1.1fr 1fr 1.3fr 1fr",
                      }}
                    >
                      <img
                        className="w-20 lg:ml-2 xs:ml-0"
                        src={url + "/images/" + item.image}
                        alt=""
                      />
                      <p className="text-start">{item.name}</p>
                      <p>Rs{item.price}</p>
                      <div className="flex gap-2 items-center border border-orange-600 w-min h-auto px-1 rounded-lg bg-orange-200">
                        <p
                          onClick={() => removeFromCart(item._id)}
                          className="text-[20px] cursor-pointer"
                        >
                          -
                        </p>
                        <p>{cartItems[item._id]}</p>
                        <p
                          onClick={() => addToCart(item._id)}
                          className="text-[20px] cursor-pointer"
                        >
                          +
                        </p>
                      </div>
                      <p>Rs{cartItems[item._id] * item.price}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
      {!isCartEmpty && (
        <div
          className="lg:mt-20 xs:mt-16 bg-white rounded-2xl p-3 lg:w-[70%] xs:w-[90%] mx-auto"
          style={{ boxShadow: "0px 0px 15px -12px black" }}
        >
          <div className="flex flex-col flex-1 gap-5">
            <h2 className="font-medium text-xl">Bill Details:</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="text-start">Item Total</p>
                <p>Rs{getTotalCartAmount()}</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>Rs{20}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Platform Fee</p>
                <p>Rs{5}</p>
              </div>
              <div className="flex justify-between">
                <p>GST and Restaurant Charges</p>
                <p>Rs{10}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <b>Total Payment</b>
                <b>Rs{getTotalCartAmount() + 20 + 5 + 10}</b>
              </div>
            </div>
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                }),
                  navigate("/order");
              }}
              className="border-none text-white bg-orange-600 py-3 px-0 rounded-md cursor-pointer"
              style={{ width: "max(15vw,200px)" }}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
