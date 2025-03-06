import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://aayushmandlik:Aayush%40123@cluster0.te7fr.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
