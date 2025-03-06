import userModel from "../models/userModel.js";
import validater from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// generating token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY);
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Doesn't Exists" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }
    const token = createToken(user._id);
    res.status(201).json({
      success: true,
      message: "User found successfully",
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // checking whether user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    // validating email format and strong password
    /*const validate = validater.validate(
      {
        email: email,
        password: password,
      },
      {
        email: {
          required: true,
          isEmail: true,
        },
        password: {
          required: true,
          isStrongPassword: true,
        },
      }
    );
    if (!validate) {
      return res.status(400).json({ message: "Invalid email or password" });
    }*/

    if (!validater.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email, Please Enter a Valid Email",
      });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // Hashing User Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    // saving user to database
    const savedUser = await newUser.save();
    // generating token by calling function
    const token = createToken(savedUser._id);
    // sending response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

export { loginUser, registerUser };
