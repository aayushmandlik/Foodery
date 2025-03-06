// import React, { useContext } from "react";
// import { assets } from "../assets/assets";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { StoreContext } from "../context/StoreContext";

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount } = useContext(StoreContext);
//   return (
//     // <div className="flex justify-between items-center fixed top-0 z-10 bg-white w-full max-w-[90%]"> //fixed
//     <div className="fixed top-0 left-0 right-0 z-50 bg-white flex p-2 justify-around items-center xs:justify-between lg:w-full">
//       <Link
//         to="/"
//         // className="flex items-center gap-2"
//         onClick={() => {
//           window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//           });
//         }}
//       >
//         <img
//           src={assets.logo}
//           className="lg:w-28 lg:h-28 xs:w-32 xs:h-32 lg:ml-10 xl:ml-16"
//         />
//       </Link>
//       <ul className="lg:flex ml-5 gap-10 text-[18px] text-[#49557e] cursor-pointer sm:hidden md:hidden xs:hidden">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             window.scrollTo({
//               top: 0,
//               behavior: "smooth",
//             });
//           }}
//         >
//           <li
//             onClick={() => setMenu("home")}
//             className={menu === "home" ? "border-b-[2px] border-[#49557e]" : ""}
//           >
//             Home
//           </li>
//         </Link>

//         <a
//           href="#menu"
//           onClick={() => setMenu("Menu")}
//           className={menu === "Menu" ? "border-b-[2px] border-[#49557e]" : ""}
//         >
//           Menu
//         </a>

//         <a
//           href="#testimonials"
//           onClick={() => setMenu("Testomonials")}
//           className={
//             menu === "Testomonials" ? "border-b-[2px] border-[#49557e]" : ""
//           }
//         >
//           Testimonials
//         </a>
//         <li
//           onClick={() => setMenu("Contact Us")}
//           className={
//             menu === "Contact Us" ? "border-b-[2px] border-[#49557e]" : ""
//           }
//         >
//           Contact Us
//         </li>
//         <li
//           onClick={() => setMenu("About Us")}
//           className={
//             menu === "About Us" ? "border-b-[2px] border-[#49557e]" : ""
//           }
//         >
//           About Us
//         </li>
//       </ul>
//       <div className="flex items-center lg:gap-10 xs:gap-[20px] xs:mr-2 xl:mr-20 lg:mr-14">
//         <img className="w-[30px] lg:w-auto" src={assets.search_icon} alt="" />
//         <div className="relative">
//           <Link
//             onClick={() => {
//               window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//               });
//             }}
//             to="/cart"
//           >
//             <img
//               className="w-[30px] lg:w-auto"
//               src={assets.basket_icon}
//               alt=""
//             />
//           </Link>
//           <div
//             className={
//               getTotalCartAmount() === 0
//                 ? ""
//                 : "absolute min-w-2 min-h-2 bg-orange-500 rounded-[5px] top-[-5px] right-[-5px]"
//             }
//           ></div>
//         </div>
//         <button
//           onClick={() => {
//             window.scrollTo({
//               top: 0,
//               behavior: "smooth",
//             });
//             setShowLogin(true);
//           }}
//           className="bg-transparent text-xl text-[#49557e] border-solid border-2 border-orange-600 lg:px-7 lg:py-2 rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition delay-150 ease-in-out min-w-[100px] xs:py-1"
//         >
//           Sign In
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// With Toast Item Added To Cart
import React, { useContext, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, cartItems, token, setToken } =
    useContext(StoreContext);
  const prevCartItems = useRef(cartItems);

  // useEffect(() => {
  //   const prevTotalItems = Object.values(prevCartItems.current).reduce((a, b) => a + b, 0);
  //   const currentTotalItems = Object.values(cartItems).reduce((a, b) => a + b, 0);
  //   if (currentTotalItems > prevTotalItems) {
  //     toast.success('Item Added To Cart', {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  //   prevCartItems.current = cartItems;
  // }, [cartItems]);

  // useEffect(() => {
  //   Object.keys(cartItems).forEach((itemId) => {
  //     if (!prevCartItems.current[itemId] && cartItems[itemId] === 1) {
  //       toast.success("Item Added To Cart", {
  //         position: "top-right",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     }
  //   });
  //   prevCartItems.current = cartItems;
  // }, [cartItems]);

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white flex p-2 justify-around items-center xs:justify-between lg:w-full">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={assets.logo}
            className="lg:w-28 lg:h-28 xs:w-32 xs:h-32 lg:ml-10 xl:ml-16"
          />
        </Link>
        <ul className="lg:flex ml-5 gap-10 text-[18px] text-[#49557e] cursor-pointer sm:hidden md:hidden xs:hidden">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <li
              onClick={() => setMenu("home")}
              className={
                menu === "home" ? "border-b-[2px] border-[#49557e]" : ""
              }
            >
              Home
            </li>
          </Link>

          <a
            href="/#menu"
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "border-b-[2px] border-[#49557e]" : ""}
          >
            Menu
          </a>

          <a
            href="#testimonials"
            onClick={() => setMenu("Testomonials")}
            className={
              menu === "Testomonials" ? "border-b-[2px] border-[#49557e]" : ""
            }
          >
            Testimonials
          </a>
          <li
            onClick={() => setMenu("Contact Us")}
            className={
              menu === "Contact Us" ? "border-b-[2px] border-[#49557e]" : ""
            }
          >
            Contact Us
          </li>
          <a
            href="/#about"
            onClick={() => setMenu("About Us")}
            className={
              menu === "About Us" ? "border-b-[2px] border-[#49557e]" : ""
            }
          >
            About Us
          </a>
        </ul>
        <div className="flex items-center lg:gap-10 xs:gap-[20px] xs:mr-2 xl:mr-20 lg:mr-14">
          <img className="w-[30px] lg:w-[30px]" src={assets.search} alt="" />
          <div className="relative">
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/cart"
            >
              <img
                className="w-[40px] lg:w-[40px]"
                src={assets.shopbag}
                alt=""
              />
            </Link>
            <div
              className={
                getTotalCartAmount() === 0
                  ? ""
                  : "absolute min-w-2 min-h-2 bg-orange-500 rounded-[5px] top-[0px] right-[0px]"
              }
            ></div>
          </div>
          {!token ? (
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                setShowLogin(true);
              }}
              className="bg-transparent text-xl text-[#49557e] border-solid border-2 border-orange-600 lg:px-7 lg:py-2 rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition delay-150 ease-in-out min-w-[100px] xs:py-1"
            >
              Sign In
            </button>
          ) : (
            <div className="relative group w-[40px] lg:w-[40px]">
              {/* Profile Icon */}
              <img
                src={assets.usericon}
                alt="Profile"
                className="cursor-pointer"
              />

              {/* Dropdown Menu */}
              <ul className="absolute right-0 hidden min-w-40 flex-col gap-2 bg-[#fff2ef] p-3 border border-orange-600 rounded-md outline outline-2 outline-white list-none group-hover:flex z-10">
                <li
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate("/myorders");
                  }}
                  className="flex items-center gap-2 cursor-pointer pr-3 hover:text-orange-600"
                >
                  <img src={assets.bag_icon} alt="Orders" className="w-5" />
                  <p>Orders</p>
                </li>
                <hr className="border-gray-300" />
                <li
                  onClick={logoutHandler}
                  className="flex items-center gap-2 cursor-pointer pr-3 hover:text-orange-600"
                >
                  <img src={assets.logout_icon} alt="Logout" className="w-5" />
                  <p>LogOut</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
