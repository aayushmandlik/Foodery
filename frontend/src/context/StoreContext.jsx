import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  // const url = "http://192.168.0.106:4000";
  // const url = "http://localhost:4000";
  const url = "https://foodery-yg59.onrender.com";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    // if (cartItems[itemId] === 1) {
    //   delete cartItems[itemId];
    // } else {
    //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // }
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - prev[itemId],
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalAmount += iteminfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      if (response.data.success) {
        setFoodList(response.data.data);
      } else {
        console.error("Food list fetch failed", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        // await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    async function loadCart() {
      if (token) {
        // Fetch cart data again when user logs in
        await loadCartData(token);
      } else {
        // Clear cart data when logging out
        setCartItems({});
        localStorage.removeItem("cartItems");
      }
    }
    loadCart();
  }, [token]); // Run whenever `token` changes

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

// refresh cart uptodate
// import { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   // const url = "http://192.168.0.106:4000";
//   const url = "http://localhost:4000";
//   // const url = "https://foodery-yg59.onrender.com";
//   const [token, setToken] = useState(() => Cookies.get("token") || "");
//   const [food_list, setFoodList] = useState([]);

//   // ✅ Add to cart and save in cookies
//   const addToCart = async (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
//     Cookies.set(
//       "cartItems",
//       JSON.stringify({ ...cartItems, [itemId]: (cartItems[itemId] || 0) + 1 }),
//       { expires: 7 }
//     );

//     if (token) {
//       await axios.post(
//         url + "/api/cart/add",
//         { itemId },
//         { headers: { token } }
//       );
//     }
//   };

//   // ✅ Remove item from cart
//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const updatedCart = { ...prev };
//       if (updatedCart[itemId] > 1) {
//         updatedCart[itemId] -= 1;
//       } else {
//         delete updatedCart[itemId];
//       }
//       Cookies.set("cartItems", JSON.stringify(updatedCart), { expires: 7 });
//       return updatedCart;
//     });

//     if (token) {
//       await axios.post(
//         url + "/api/cart/remove",
//         { itemId },
//         { headers: { token } }
//       );
//     }
//   };

//   // ✅ Delete entire item from cart
//   const deleteFromCart = (itemId) => {
//     setCartItems((prev) => {
//       const updatedCart = { ...prev };
//       delete updatedCart[itemId];
//       Cookies.set("cartItems", JSON.stringify(updatedCart), { expires: 7 });
//       return updatedCart;
//     });
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(url + "/api/food/list");
//       if (response.data.success) {
//         setFoodList(response.data.data);
//       } else {
//         console.error("Food list fetch failed", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching food list:", error);
//     }
//   };

//   const loadCartData = async (token) => {
//     try {
//       const response = await axios.post(
//         url + "/api/cart/get",
//         {},
//         { headers: { token } }
//       );
//       setCartItems(response.data.cartData);
//       Cookies.set("cartItems", JSON.stringify(response.data.cartData), {
//         expires: 7,
//       });
//     } catch (error) {
//       console.error("Error loading cart:", error);
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       if (Cookies.get("token")) {
//         setToken(Cookies.get("token"));
//       }
//     }
//     loadData();
//   }, []);

//   useEffect(() => {
//     async function loadCart() {
//       if (token) {
//         await loadCartData(token);
//       } else {
//         setCartItems({});
//         Cookies.remove("cartItems");
//       }
//     }
//     loadCart();
//   }, [token]); // Reload cart when token changes

//   // ✅ Save token in cookies
//   useEffect(() => {
//     if (token) {
//       Cookies.set("token", token, {
//         expires: 7,
//         secure: true,
//         sameSite: "Strict",
//       });
//     } else {
//       Cookies.remove("token");
//     }
//   }, [token]);

//   // ✅ Load cart from cookies on refresh
//   useEffect(() => {
//     const savedCart = Cookies.get("cartItems");
//     if (savedCart) {
//       setCartItems(JSON.parse(savedCart));
//     }
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     deleteFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;

// import { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   // const url = "http://192.168.0.106:4000";
//   // const url = "http://localhost:4000";
//   const url = "https://foodery-yg59.onrender.com";
//   const [token, setToken] = useState(() => Cookies.get("token") || "");
//   const [food_list, setFoodList] = useState([]);

//   // ✅ Add to cart and save in cookies
//   const addToCart = async (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
//     Cookies.set(
//       "cartItems",
//       JSON.stringify({ ...cartItems, [itemId]: (cartItems[itemId] || 0) + 1 }),
//       { expires: 7 }
//     );

//     if (token) {
//       await axios.post(
//         url + "/api/cart/add",
//         { itemId },
//         { headers: { token } }
//       );
//     }
//   };

//   // ✅ Remove item from cart
//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const updatedCart = { ...prev };
//       if (updatedCart[itemId] > 1) {
//         updatedCart[itemId] -= 1;
//       } else {
//         delete updatedCart[itemId];
//       }
//       Cookies.set("cartItems", JSON.stringify(updatedCart), { expires: 7 });
//       return updatedCart;
//     });

//     if (token) {
//       await axios.post(
//         url + "/api/cart/remove",
//         { itemId },
//         { headers: { token } }
//       );
//     }
//   };

//   // ✅ Delete entire item from cart
//   const deleteFromCart = (itemId) => {
//     setCartItems((prev) => {
//       const updatedCart = { ...prev };
//       delete updatedCart[itemId];
//       Cookies.set("cartItems", JSON.stringify(updatedCart), { expires: 7 });
//       return updatedCart;
//     });
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   const loadCartData = async (token) => {
//     if (!token) return; // Ensure token exists
//     console.log("Fetching cart for token:", token);
//     try {
//       const response = await axios.post(
//         url + "/api/cart/get",
//         {},
//         { headers: { token } }
//       );
//       console.log("Cart Response:", response.data);

//       if (response.data.success && response.data.cartData) {
//         setCartItems(response.data.cartData);
//         Cookies.set("cartItems", JSON.stringify(response.data.cartData), {
//           expires: 7,
//         });
//       } else {
//         console.error("Cart fetch failed:", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error loading cart:", error);
//     }
//   };

//   // ✅ Fetch food list on mount
//   useEffect(() => {
//     const fetchFoodList = async () => {
//       try {
//         const response = await axios.get(url + "/api/food/list");
//         if (response.data.success) {
//           setFoodList(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching food list:", error);
//       }
//     };
//     fetchFoodList();
//   }, []);

//   // ✅ Load cart when token is set (delayed to ensure token is available)
//   useEffect(() => {
//     if (token) {
//       setTimeout(() => loadCartData(token), 500); // Delay to ensure token is available
//     } else {
//       setCartItems({});
//       Cookies.remove("cartItems");
//     }
//   }, [token]); // Load cart when user logs in or logs out

//   // ✅ Update token in cookies
//   useEffect(() => {
//     if (token) {
//       Cookies.set("token", token, {
//         expires: 7,
//         secure: true,
//         sameSite: "Strict",
//       });
//     } else {
//       Cookies.remove("token");
//     }
//   }, [token]);

//   // ✅ Load cart from cookies on refresh
//   useEffect(() => {
//     const savedCart = Cookies.get("cartItems");
//     if (savedCart) {
//       setCartItems(JSON.parse(savedCart));
//     }
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     deleteFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;
