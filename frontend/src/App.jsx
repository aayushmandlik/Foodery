import { React, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import "./index.css";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLogin]);
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <div className="xs:w-[95%] sm:w-[95%] md:w-[95%] lg:w-[90%] mx-auto relative z-0">
        <div className="bg-cover bg-no-repeat">
          <Navbar setShowLogin={setShowLogin} />
        </div>
        <Routes>
          <Route path="/" element={<Home setShowLogin={setShowLogin} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
