// import { useState, useEffect, useRef, useContext } from "react";
// import React from "react";
// import { assets } from "../assets/assets";
// import { StoreContext } from "../context/StoreContext";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = ({ setShowLogin }) => {
//   const { url, token, setToken } = useContext(StoreContext);
//   const [currentState, setCurrentState] = useState("Log In");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   //   To close popup by clicking anywhere on the page
//   const modalRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       setShowLogin(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     // console.log(name, value);
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     let newUrl = url;
//     if (currentState === "Log In") {
//       newUrl = newUrl + "/api/user/login";
//     } else {
//       newUrl = newUrl + "/api/user/register";
//     }
//     // const response = await axios.post(newUrl, data);
//     // console.log("Response:", response.data);

//     // if (response.data.success) {
//     //   setToken(response.data.token);
//     //   localStorage.setItem("token", response.data.token);
//     //   setShowLogin(false);
//     //   toast.success(response.data.message);
//     // } else {
//     //   alert(response.data.message);
//     // }

//     try {
//       const response = await axios.post(newUrl, data);
//       console.log("Response:", response.data.message);

//       if (response.data.success) {
//         toast.success(response.data.message, { autoClose: 5000 });

//         setToken(response.data.token);
//         localStorage.setItem("token", response.data.token);

//         // Delay modal closing slightly
//         setTimeout(() => {
//           setShowLogin(false);
//         }, 1500); // 100ms delay ensures toast renders first
//       } else {
//         toast.error(response.data.message, { autoClose: 5000 });
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       toast.error(error.response?.data?.message || "Something went wrong.", {
//         autoClose: 5000,
//       });
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000090]">
//         <form
//           onSubmit={onLogin}
//           ref={modalRef}
//           className="place-self-center bg-white text-[#49557e] flex flex-col gap-6 py-6 px-7 rounded-lg text-[20px] animate-fade-in-bottom xs:max-w-[370px] lg:max-w-[400px]"
//           style={{ width: "max(25vw,400px)" }}
//         >
//           <div className="flex justify-between items-center text-black">
//             <h2 className="font-bold text-3xl text-orange-500">
//               {currentState}
//             </h2>
//             <img
//               onClick={() => setShowLogin(false)}
//               className="w-4 cursor-pointer"
//               src={assets.cross_icon}
//               alt=""
//             />
//           </div>
//           <div className="flex flex-col gap-5">
//             {currentState === "Log In" ? (
//               <></>
//             ) : (
//               <input
//                 name="name"
//                 onChange={onChangeHandler}
//                 value={data.name}
//                 className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
//                 type="text"
//                 placeholder="Your Name"
//                 required
//               />
//             )}
//             <input
//               name="email"
//               onChange={onChangeHandler}
//               value={data.email}
//               className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
//               type="email"
//               placeholder="Your Email"
//               required
//             />
//             <input
//               name="password"
//               onChange={onChangeHandler}
//               value={data.password}
//               className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
//               type="password"
//               placeholder="Your Password"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="border-none p-3 rounded-md text-white bg-orange-500 text-[20px] cursor-pointer "
//           >
//             {currentState === "Sign Up" ? "Create Account" : "Log In"}
//           </button>
//           <div className="flex items-start gap-2 -mt-4">
//             <input className="mt-2" type="checkbox" required />
//             <p>By Continuing, I Agree to the Terms and Privacy Policy.</p>
//           </div>
//           {currentState === "Log In" ? (
//             <p>
//               Create a New Account?{" "}
//               <span
//                 className="text-orange-500 font-medium cursor-pointer"
//                 onClick={() => setCurrentState("Sign Up")}
//               >
//                 Click Here
//               </span>
//             </p>
//           ) : (
//             <p>
//               Already have an account?{" "}
//               <span
//                 className="text-orange-500 font-medium cursor-pointer"
//                 onClick={() => setCurrentState("Log In")}
//               >
//                 Log In
//               </span>
//             </p>
//           )}
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;

// forgot pass
// import { useState, useEffect, useRef, useContext } from "react";
// import React from "react";
// import { assets } from "../assets/assets";
// import { StoreContext } from "../context/StoreContext";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Login = ({ setShowLogin }) => {
//   const { url, token, setToken } = useContext(StoreContext);
//   const [currentState, setCurrentState] = useState("Log In");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [emailForReset, setEmailForReset] = useState("");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const modalRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       setShowLogin(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     let newUrl = url;
//     if (currentState === "Log In") {
//       newUrl = newUrl + "/api/user/login";
//     } else {
//       newUrl = newUrl + "/api/user/register";
//     }

//     try {
//       const response = await axios.post(newUrl, data);
//       console.log("Response:", response.data.message);

//       if (response.data.success) {
//         toast.success(response.data.message, { autoClose: 5000 });

//         setToken(response.data.token);
//         localStorage.setItem("token", response.data.token);

//         setTimeout(() => {
//           setShowLogin(false);
//         }, 1500);
//       } else {
//         toast.error(response.data.message, { autoClose: 5000 });
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       toast.error(error.response?.data?.message || "Something went wrong.", {
//         autoClose: 5000,
//       });
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!emailForReset) {
//       toast.error("Please enter your email", { autoClose: 5000 });
//       return;
//     }

//     try {
//       const response = await axios.post(`${url}/api/user/forgot-password`, {
//         email: emailForReset,
//       });

//       if (response.data.success) {
//         toast.success(response.data.message, { autoClose: 5000 });
//       } else {
//         toast.error(response.data.message, { autoClose: 5000 });
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.", {
//         autoClose: 5000,
//       });
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000090]">
//         <form
//           onSubmit={onLogin}
//           ref={modalRef}
//           className="place-self-center bg-white text-[#49557e] flex flex-col gap-6 py-6 px-7 rounded-lg text-[20px] animate-fade-in-bottom xs:max-w-[370px] lg:max-w-[400px]"
//           style={{ width: "max(25vw,400px)" }}
//         >
//           <div className="flex justify-between items-center text-black">
//             <h2 className="font-bold text-3xl text-orange-500">
//               {currentState}
//             </h2>
//             <img
//               onClick={() => setShowLogin(false)}
//               className="w-4 cursor-pointer"
//               src={assets.cross_icon}
//               alt="Close"
//             />
//           </div>

//           {showForgotPassword ? (
//             <div>
//               <form className="flex flex-col gap-5">
//                 <p className="text-gray-600 text-center">
//                   Enter your email to receive password reset instructions.
//                 </p>
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   value={emailForReset}
//                   onChange={(e) => setEmailForReset(e.target.value)}
//                   className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={handleForgotPassword}
//                   className="border-none p-3 rounded-md text-white bg-orange-500 text-[20px] cursor-pointer "
//                 >
//                   Reset Password
//                 </button>
//                 <p
//                   className="text-orange-500 font-medium cursor-pointer text-center"
//                   onClick={() => setShowForgotPassword(false)}
//                 >
//                   Back to Login
//                 </p>
//               </form>
//             </div>
//           ) : (
//             <>
//               <div className="flex flex-col gap-5">
//                 {currentState === "Sign Up" && (
//                   <input
//                     name="name"
//                     onChange={onChangeHandler}
//                     value={data.name}
//                     className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
//                     type="text"
//                     placeholder="Your Name"
//                     required
//                   />
//                 )}
//                 <input
//                   name="email"
//                   onChange={onChangeHandler}
//                   value={data.email}
//                   className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
//                   type="email"
//                   placeholder="Your Email"
//                   required
//                 />
//                 <div className="relative">
//                   <input
//                     name="password"
//                     onChange={onChangeHandler}
//                     value={data.password}
//                     className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md w-full pr-10"
//                     type={passwordVisible ? "text" : "password"}
//                     placeholder="Your Password"
//                     required
//                   />
//                   <span
//                     className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//                   </span>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="border-none p-3 rounded-md text-white bg-orange-500 text-[20px] cursor-pointer "
//               >
//                 {currentState === "Sign Up" ? "Create Account" : "Log In"}
//               </button>
//               <div className="flex flex-col gap-5 text-[16px] -mt-2">
//                 {currentState === "Log In" && !showForgotPassword && (
//                   <p
//                     className="text-orange-500 font-medium cursor-pointer"
//                     onClick={() => setShowForgotPassword(true)}
//                   >
//                     Forgot Password?
//                   </p>
//                 )}
//                 <p className="text-xl font-medium">
//                   {currentState === "Log In" ? (
//                     <>
//                       Create a New Account?{" "}
//                       <span
//                         className="text-orange-500 font-medium cursor-pointer"
//                         onClick={() => setCurrentState("Sign Up")}
//                       >
//                         Click Here
//                       </span>
//                     </>
//                   ) : (
//                     <>
//                       Already have an account?{" "}
//                       <span
//                         className="text-orange-500 font-medium cursor-pointer"
//                         onClick={() => setCurrentState("Log In")}
//                       >
//                         Log In
//                       </span>
//                     </>
//                   )}
//                 </p>
//               </div>
//             </>
//           )}
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;

// import { useState, useEffect, useRef, useContext } from "react";
// import React from "react";
// import { assets } from "../assets/assets";
// import { StoreContext } from "../context/StoreContext";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Login = ({ setShowLogin }) => {
//   const { url } = useContext(StoreContext);
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [currentState, setCurrentState] = useState("Log In");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [emailForReset, setEmailForReset] = useState("");
//   const [showOtpInput, setShowOtpInput] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const modalRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       setShowLogin(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     let newUrl = url;
//     if (currentState === "Log In") {
//       newUrl = newUrl + "/api/user/login";
//     } else {
//       newUrl = newUrl + "/api/user/register";
//     }

//     try {
//       const response = await axios.post(newUrl, data);
//       console.log("Response:", response.data.message);

//       if (response.data.success) {
//         toast.success(response.data.message, { autoClose: 5000 });

//         setToken(response.data.token);
//         localStorage.setItem("token", response.data.token);

//         setTimeout(() => {
//           setShowLogin(false);
//         }, 1500);
//       } else {
//         toast.error(response.data.message, { autoClose: 5000 });
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       toast.error(error.response?.data?.message || "Something went wrong.", {
//         autoClose: 5000,
//       });
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!emailForReset) {
//       toast.error("Please enter your email");
//       return;
//     }

//     try {
//       const response = await axios.post(`${url}/api/user/send-reset-otp`, {
//         email: emailForReset,
//       });
//       if (response.data.success) {
//         toast.success(response.data.message);
//         setShowOtpInput(true);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.");
//     }
//   };

//   const handleVerifyOtp = async () => {
//     if (!otp) {
//       toast.error("Please enter the OTP");
//       return;
//     }

//     try {
//       const response = await axios.post(`${url}/api/user/reset-password`, {
//         email: emailForReset,
//         otp,
//       });
//       if (response.data.success) {
//         toast.success(response.data.message);
//         setShowOtpInput(false);
//         setShowNewPasswordForm(true);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Invalid OTP");
//     }
//   };

//   const handleResetPassword = async () => {
//     if (!newPassword) {
//       toast.error("Please enter a new password");
//       return;
//     }

//     try {
//       const response = await axios.post(`${url}/api/user/reset-password`, {
//         email: emailForReset,
//         newPassword,
//       });
//       if (response.data.success) {
//         toast.success(response.data.message);
//         setShowNewPasswordForm(false);
//         setShowForgotPassword(false);
//         setCurrentState("Log In");
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to reset password");
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000090]">
//         <form
//           onSubmit={onLogin}
//           ref={modalRef}
//           className="bg-white text-[#49557e] flex flex-col gap-6 py-6 px-7 rounded-lg text-[20px] xs:max-w-[370px] lg:max-w-[400px]"
//           style={{ width: "max(25vw,400px)" }}
//         >
//           <div className="flex justify-between items-center text-black">
//             <h2 className="font-bold text-3xl text-orange-500">
//               {currentState}
//             </h2>
//             <img
//               onClick={() => setShowLogin(false)}
//               className="w-4 cursor-pointer"
//               src={assets.cross_icon}
//               alt="Close"
//             />
//           </div>

//           {showForgotPassword ? (
//             <div>
//               {showNewPasswordForm ? (
//                 <div className="flex flex-col gap-5">
//                   <p className="text-gray-600 text-center">
//                     Enter your new password.
//                   </p>
//                   <input
//                     type="password"
//                     placeholder="New Password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     className="outline-orange-500 border-[2px] p-2 rounded-md"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={handleResetPassword}
//                     className="p-3 rounded-md text-white bg-orange-500 text-[20px]"
//                   >
//                     Reset Password
//                   </button>
//                 </div>
//               ) : showOtpInput ? (
//                 <div className="flex flex-col gap-5">
//                   <p className="text-gray-600 text-center">
//                     Enter the OTP sent to your email.
//                   </p>
//                   <input
//                     type="text"
//                     placeholder="Enter OTP"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     className="outline-orange-500 border-[2px] p-2 rounded-md"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={handleVerifyOtp}
//                     className="p-3 rounded-md text-white bg-orange-500 text-[20px]"
//                   >
//                     Verify OTP
//                   </button>
//                 </div>
//               ) : (
//                 <div className="flex flex-col gap-5">
//                   <p className="text-gray-600 text-center">
//                     Enter your email to receive a password reset OTP.
//                   </p>
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     value={emailForReset}
//                     onChange={(e) => setEmailForReset(e.target.value)}
//                     className="outline-orange-500 border-[2px] p-2 rounded-md"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={handleForgotPassword}
//                     className="p-3 rounded-md text-white bg-orange-500 text-[20px]"
//                   >
//                     Send OTP
//                   </button>
//                 </div>
//               )}
//               <p
//                 className="text-orange-500 font-medium cursor-pointer text-center"
//                 onClick={() => setShowForgotPassword(false)}
//               >
//                 Back to Login
//               </p>
//             </div>
//           ) : (
//             <>
//               <div className="flex flex-col gap-5">
//                 {currentState === "Sign Up" && (
//                   <input
//                     name="name"
//                     onChange={onChangeHandler}
//                     value={data.name}
//                     className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
//                     type="text"
//                     placeholder="Your Name"
//                     required
//                   />
//                 )}
//                 <input
//                   name="email"
//                   onChange={onChangeHandler}
//                   value={data.email}
//                   className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md"
//                   type="email"
//                   placeholder="Your Email"
//                   required
//                 />
//                 <div className="relative">
//                   <input
//                     name="password"
//                     onChange={onChangeHandler}
//                     value={data.password}
//                     className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md w-full pr-10"
//                     type={passwordVisible ? "text" : "password"}
//                     placeholder="Your Password"
//                     required
//                   />
//                   <span
//                     className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//                   </span>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="border-none p-3 rounded-md text-white bg-orange-500 text-[20px] cursor-pointer "
//               >
//                 {currentState === "Sign Up" ? "Create Account" : "Log In"}
//               </button>
//               <div className="flex flex-col gap-5 text-[16px] -mt-2">
//                 {currentState === "Log In" && !showForgotPassword && (
//                   <p
//                     className="text-orange-500 font-medium cursor-pointer"
//                     onClick={() => setShowForgotPassword(true)}
//                   >
//                     Forgot Password?
//                   </p>
//                 )}
//                 <p className="text-xl font-medium">
//                   {currentState === "Log In" ? (
//                     <>
//                       Create a New Account?{" "}
//                       <span
//                         className="text-orange-500 font-medium cursor-pointer"
//                         onClick={() => setCurrentState("Sign Up")}
//                       >
//                         Click Here
//                       </span>
//                     </>
//                   ) : (
//                     <>
//                       Already have an account?{" "}
//                       <span
//                         className="text-orange-500 font-medium cursor-pointer"
//                         onClick={() => setCurrentState("Log In")}
//                       >
//                         Log In
//                       </span>
//                     </>
//                   )}
//                 </p>
//               </div>
//             </>
//           )}
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;

import { useState, useEffect, useRef, useContext } from "react";
import React from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ setShowLogin }) => {
  const { url, token, setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [currentState, setCurrentState] = useState("Log In");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [emailForReset, setEmailForReset] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
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

    try {
      const response = await axios.post(newUrl, data);
      console.log("Response:", response.data.message);

      if (response.data.success) {
        toast.success(response.data.message, { autoClose: 5000 });

        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        setTimeout(() => {
          setShowLogin(false);
        }, 1500);
      } else {
        toast.error(response.data.message, { autoClose: 5000 });
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.response?.data?.message || "Something went wrong.", {
        autoClose: 5000,
      });
    }
  };

  const handleForgotPassword = async () => {
    if (!emailForReset) {
      toast.error("Please enter your email");
      return;
    }

    try {
      const response = await axios.post(`${url}/api/user/send-reset-otp`, {
        email: emailForReset,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setShowOtpInput(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }
    console.log("Sending OTP:", otp); // Debugging

    try {
      const response = await axios.post(`${url}/api/user/verify-otp`, {
        email: emailForReset,
        otp,
      });

      console.log("OTP Response:", response.data); // Debugging
      if (response.data.success) {
        toast.success(response.data.message);
        setShowOtpInput(false);
        setShowNewPasswordForm(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP");
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword) {
      toast.error("Please enter a new password");
      return;
    }

    try {
      const response = await axios.post(`${url}/api/user/reset-password`, {
        email: emailForReset,
        newPassword,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setShowNewPasswordForm(false);
        setShowForgotPassword(false);
        setCurrentState("Log In");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to reset password");
    }
  };

  const handleChange = (e, index) => {
    const { value } = e.target;

    // Ensure input is a number and only 1 digit
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp.join(""));

    // Move to the next input box if a digit is entered
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000090]">
        <form
          onSubmit={onLogin}
          ref={modalRef}
          className="bg-white text-[#49557e] flex flex-col gap-6 py-6 px-7 rounded-lg text-[20px] xs:max-w-[370px] lg:max-w-[400px]"
          style={{ width: "max(25vw,400px)" }}
        >
          <div className="flex justify-between items-center text-black">
            <h2 className="font-bold text-3xl text-orange-500">
              {currentState}
            </h2>
            <img
              onClick={() => setShowLogin(false)}
              className="w-4 cursor-pointer"
              src={assets.cross_icon}
              alt="Close"
            />
          </div>

          {showForgotPassword ? (
            <div>
              {showNewPasswordForm ? (
                <div className="flex flex-col gap-5">
                  <p className="text-gray-600 text-center">
                    Enter your new password.
                  </p>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="outline-orange-500 border-[2px] p-2 w-full rounded-md"
                      required
                    />
                    <span
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetPassword}
                    className="p-3 rounded-md text-white bg-orange-500 text-[20px]"
                  >
                    Reset Password
                  </button>
                </div>
              ) : showOtpInput ? (
                <div className="flex flex-col gap-5">
                  <p className="text-gray-600 text-center">
                    Enter the OTP sent to your email.
                  </p>
                  <div className="flex justify-center gap-2">
                    {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        value={otp[index] || ""}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-12 h-12 text-center border-2 border-gray-300 rounded-md outline-orange-500 text-lg font-semibold"
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    className="p-3 rounded-md text-white bg-orange-500 text-[20px]"
                  >
                    Verify OTP
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <p className="text-gray-600 text-center">
                    Enter your email to receive a password reset OTP.
                  </p>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={emailForReset}
                    onChange={(e) => setEmailForReset(e.target.value)}
                    className="outline-orange-500 border-[2px] p-2 rounded-md"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="p-3 rounded-md text-white bg-orange-500 text-[20px]"
                  >
                    Send OTP
                  </button>
                </div>
              )}
              <p
                className="text-orange-500 font-medium cursor-pointer text-center mt-5"
                onClick={() => setShowForgotPassword(false)}
              >
                Back to Login
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-5">
                {currentState === "Sign Up" && (
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
                <div className="relative">
                  <input
                    name="password"
                    onChange={onChangeHandler}
                    value={data.password}
                    className="outline-orange-500 border-solid border-[2px] border-[#c9c9c9] p-2 rounded-md w-full pr-10"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Your Password"
                    required
                  />
                  <span
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="border-none p-3 rounded-md text-white bg-orange-500 text-[20px] cursor-pointer "
              >
                {currentState === "Sign Up" ? "Create Account" : "Log In"}
              </button>
              <div className="flex flex-col gap-5 text-[16px] -mt-2">
                {currentState === "Log In" && !showForgotPassword && (
                  <p
                    className="text-orange-500 font-medium cursor-pointer"
                    onClick={() => setShowForgotPassword(true)}
                  >
                    Forgot Password?
                  </p>
                )}
                <p className="text-xl font-medium">
                  {currentState === "Log In" ? (
                    <>
                      Create a New Account?{" "}
                      <span
                        className="text-orange-500 font-medium cursor-pointer"
                        onClick={() => setCurrentState("Sign Up")}
                      >
                        Click Here
                      </span>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <span
                        className="text-orange-500 font-medium cursor-pointer"
                        onClick={() => setCurrentState("Log In")}
                      >
                        Log In
                      </span>
                    </>
                  )}
                </p>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
