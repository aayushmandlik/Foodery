import mongoose from "mongoose";

const orderScheme = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "Food Processing" },
  date: { type: Date, default: Date.now() },
  payment: { type: Boolean, default: false },
  paymentMethod: { type: String, required: true },
});

const orderModel =
  mongoose.models.order || mongoose.model("order", orderScheme);

export default orderModel;
