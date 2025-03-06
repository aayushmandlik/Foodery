import userModel from "../models/userModel.js";

// add items to the user cart
const addToCart = async (req, res) => {
  try {
    // let userData = await userModel.findOne({ _id: req.body.userId });
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId]++;
    }
    // userData.cartData = cartData;
    // await userData.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Item added to cart successfully" });
  } catch (error) {
    res.json({ success: false, message: "Error adding item to cart" });
  }
};

// remove items from the user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId]--;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Item removed from cart successfully" });
  } catch (error) {
    res.json({ success: false, message: "Error removing item from cart" });
  }
};

// fetch user cart
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    res.json({ success: false, message: "Error fetching cart" });
  }
};

export { addToCart, removeFromCart, getCart };
