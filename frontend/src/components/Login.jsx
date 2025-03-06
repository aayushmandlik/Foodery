// import { useState } from "react";
// import React from "react";
// import { assets } from "../assets/assets";

// const Login = ({ setShowLogin }) => {
//   const [currentState, setCurrentState] = useState("Log In");
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000090]">
//       <form
//         className="place-self-center bg-white text-[#49557e] flex flex-col gap-6 py-6 px-7 rounded-lg text-[20px] animate-fade-in-bottom"
//         style={{ width: "max(25vw,400px)" }}
//       >
//         <div className="flex justify-between items-center text-black">
//           <h2 className="font-bold text-3xl text-orange-500">{currentState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             className="w-4 cursor-pointer"
//             src={assets.cross_icon}
//             alt=""
//           />
//         </div>
//         <div className="flex flex-col gap-5">
//           {currentState === "Log In" ? (
//             <></>
//           ) : (
//             <input
//               className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
//               type="text"
//               placeholder="Your Name"
//               required
//             />
//           )}
//           <input
//             className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
//             type="email"
//             placeholder="Your Email"
//             required
//           />
//           <input
//             className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
//             type="password"
//             placeholder="Your Password"
//             required
//           />
//         </div>
//         <button className=" border-none p-3 rounded-md text-white bg-orange-500 text-[20px] cursor-pointer ">
//           {currentState === "Sign Up" ? "Create Account" : "Log In"}
//         </button>
//         <div className="flex items-start gap-2 -mt-4">
//           <input className="mt-2" type="checkbox" required />
//           <p>By Continuing, I Agree to the Terms and Privacy Policy.</p>
//         </div>
//         {currentState === "Log In" ? (
//           <p>
//             Create a New Account?{" "}
//             <span
//               className="text-orange-500 font-medium"
//               onClick={() => setCurrentState("Sign Up")}
//             >
//               Click Here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Already have an account?{" "}
//             <span
//               className="text-orange-500 font-medium"
//               onClick={() => setCurrentState("Log In")}
//             >
//               Log In
//             </span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useState, useEffect, useRef, useContext } from "react";
import React from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const Login = ({ setShowLogin }) => {
  const { url, token, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Log In");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   To close popup by clicking anywhere on the page
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowLogin(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value);
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === "Log In") {
      newUrl = newUrl + "/api/user/login";
    } else {
      newUrl = newUrl + "/api/user/register";
    }
    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000090]">
      <form
        onSubmit={onLogin}
        ref={modalRef}
        className="place-self-center bg-white text-[#49557e] flex flex-col gap-6 py-6 px-7 rounded-lg text-[20px] animate-fade-in-bottom xs:max-w-[370px] lg:max-w-[400px]"
        style={{ width: "max(25vw,400px)" }}
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="font-bold text-3xl text-orange-500">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            className="w-4 cursor-pointer"
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          {currentState === "Log In" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
            type="password"
            placeholder="Your Password"
            required
          />
        </div>
        <button
          type="submit"
          className="border-none p-3 rounded-md text-white bg-orange-500 text-[20px] cursor-pointer "
        >
          {currentState === "Sign Up" ? "Create Account" : "Log In"}
        </button>
        <div className="flex items-start gap-2 -mt-4">
          <input className="mt-2" type="checkbox" required />
          <p>By Continuing, I Agree to the Terms and Privacy Policy.</p>
        </div>
        {currentState === "Log In" ? (
          <p>
            Create a New Account?{" "}
            <span
              className="text-orange-500 font-medium cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="text-orange-500 font-medium cursor-pointer"
              onClick={() => setCurrentState("Log In")}
            >
              Log In
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
