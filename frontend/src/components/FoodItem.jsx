// import React, { useContext } from "react";
// import { assets } from "../assets/assets";
// import { StoreContext } from "../context/StoreContext";

// const FoodItem = ({ id, name, description, image, price, delay }) => {
//   const { cartItems, addToCart, removeFromCart, url } =
//     useContext(StoreContext);
//   return (
//     <div
//       className="w-full m-auto rounded-2xl fade-in-bottom shadow-xl"
//       data-delay={delay}
//       style={{ animationDelay: delay }}
//     >
//       <div className="relative">
//         <img
//           className="w-full rounded-t-2xl"
//           src={url + "/images/" + image}
//           alt=""
//         />
//         {/* {!cartItems[id] ? (
//           <img
//             className="absolute w-9 bottom-4 right-4 cursor-pointer rounded-[50%]"
//             onClick={() => addToCart(id)}
//             src={assets.add_icon_white}
//           />
//         ) : (
//           <div className="absolute flex bottom-4 right-4 items-center gap-2 p-1 rounded-[50px] bg-white">
//             <img
//               className="w-7"
//               onClick={() => removeFromCart(id)}
//               src={assets.remove_icon_red}
//               alt=""
//             />
//             <p>{cartItems[id]}</p>
//             <img
//               className="w-7"
//               onClick={() => addToCart(id)}
//               src={assets.add_icon_green}
//               alt=""
//             />
//           </div>
//         )} */}
//       </div>
//       <div className="p-5">
//         <div className="flex lg:flex-row justify-between items-center mb-2 xs: flex-col">
//           <p className="text-md font-medium">{name}</p>
//           <img className="w-20" src={assets.rating_starts} alt="" />
//         </div>
//         <div className="h-[30px] overflow-hidden text-ellipsis lg:text-start xs:text-center">
//           <p className="text-[#49557e] text-xs">{description}</p>
//         </div>
//         <div>
//           <p className="text-orange-600 font-medium text-xl mt-2">${price}</p>
//           {!cartItems[id] ? (
//             <img
//               className="absolute w-9 bottom-4 right-4 cursor-pointer rounded-[50%]"
//               onClick={() => addToCart(id)}
//               src={assets.add_icon_white}
//             />
//           ) : (
//             <div className="absolute flex bottom-4 right-4 items-center gap-2 p-1 rounded-[50px] bg-orange-300">
//               <img
//                 className="w-7 cursor-pointer"
//                 onClick={() => removeFromCart(id)}
//                 src={assets.remove_icon_red}
//                 alt=""
//               />
//               <p>{cartItems[id]}</p>
//               <img
//                 className="w-7 cursor-pointer"
//                 onClick={() => addToCart(id)}
//                 src={assets.add_icon_green}
//                 alt=""
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;

// Login first to add item to cart
// import React, { useContext } from "react";
// import { assets } from "../assets/assets";
// import { StoreContext } from "../context/StoreContext";

// const FoodItem = ({
//   id,
//   name,
//   description,
//   image,
//   price,
//   delay,
//   setShowLogin,
// }) => {
//   const { cartItems, addToCart, removeFromCart, url, token } =
//     useContext(StoreContext);

//   const handleAddToCart = () => {
//     if (!token) {
//       setShowLogin(true); // Open login modal
//       return;
//     }
//     addToCart(id);
//   };

//   return (
//     <div
//       className="w-full m-auto rounded-2xl fade-in-bottom shadow-xl"
//       data-delay={delay}
//       style={{ animationDelay: delay }}
//     >
//       <div className="relative">
//         <img
//           className="w-full rounded-t-2xl"
//           src={url + "/images/" + image}
//           alt=""
//         />
//       </div>
//       <div className="p-5">
//         <div className="flex lg:flex-row justify-between items-center mb-2 xs:flex-col">
//           <p className="text-md font-medium">{name}</p>
//           <img className="w-20" src={assets.rating_starts} alt="" />
//         </div>
//         <div className="h-[30px] overflow-hidden text-ellipsis lg:text-start xs:text-center">
//           <p className="text-[#49557e] text-xs">{description}</p>
//         </div>
//         <div>
//           <p className="text-orange-600 font-medium text-xl mt-2">${price}</p>
//           {!cartItems[id] ? (
//             <img
//               className="absolute w-9 bottom-4 right-4 cursor-pointer rounded-[50%]"
//               onClick={handleAddToCart} // Calls function to check for token
//               src={assets.add_icon_white}
//               alt="Add to Cart"
//             />
//           ) : (
//             <div className="absolute flex bottom-4 right-4 items-center gap-2 p-1 rounded-[50px] bg-orange-300">
//               <img
//                 className="w-7 cursor-pointer"
//                 onClick={() => removeFromCart(id)}
//                 src={assets.remove_icon_red}
//                 alt="Remove"
//               />
//               <p>{cartItems[id]}</p>
//               <img
//                 className="w-7 cursor-pointer"
//                 onClick={handleAddToCart} // Ensure only logged-in users add to cart
//                 src={assets.add_icon_green}
//                 alt="Add"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;

// Toast item added
import React, { useContext } from "react";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import styles
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({
  id,
  name,
  description,
  image,
  price,
  delay,
  setShowLogin,
}) => {
  const { cartItems, addToCart, removeFromCart, url, token } =
    useContext(StoreContext);
  const isInCart = cartItems[id] > 0;

  const handleAddToCart = () => {
    if (!token) {
      setShowLogin(true);
      return;
    }
    addToCart(id);
    toast.success(`${name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div
      className="w-full m-auto rounded-2xl fade-in-bottom shadow-xl relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative">
        <img
          className="w-full rounded-t-2xl"
          src={`${url.endsWith("/") ? url : url + "/"}images/${image}`}
          alt={`Image of ${name}`}
        />
      </div>
      <div className="p-5">
        <div className="flex lg:flex-row justify-between items-center mb-2 xs:flex-col">
          <p className="text-md font-medium">{name}</p>
          <img className="w-20" src={assets.rating_starts} alt="Rating Stars" />
        </div>
        <div className="h-[30px] overflow-hidden text-ellipsis lg:text-start xs:text-center">
          <p className="text-[#49557e] text-xs">{description}</p>
        </div>
        <div>
          <p className="text-orange-600 font-medium text-xl mt-2">Rs{price}</p>
          {!isInCart ? (
            <img
              className="absolute w-9 bottom-4 right-4 cursor-pointer rounded-full"
              onClick={handleAddToCart}
              src={assets.add_icon_white}
              alt="Add to Cart"
            />
          ) : (
            <div className="absolute flex bottom-4 right-4 items-center gap-2 p-1 rounded-[50px] bg-orange-300">
              <img
                className="w-7 cursor-pointer"
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt="Remove from Cart"
              />
              <p>{cartItems[id]}</p>
              <img
                className="w-7 cursor-pointer"
                onClick={handleAddToCart}
                src={assets.add_icon_green}
                alt="Add more to Cart"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
