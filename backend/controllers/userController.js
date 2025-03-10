import userModel from "../models/userModel.js";
import validater from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import "dotenv/config";
// const otpStore = {}; // Temporary store for OTPs

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

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generate OTP function
const generateOTP = () => String(Math.floor(100000 + Math.random() * 900000));

// 1. Send Reset OTP
const sendResetOTP = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.json({ success: false, message: "Email is Required" });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const otp = generateOTP();
    user.resetOtp = otp;
    user.resetOtpExpireAt = Date.now() + 15 * 60 * 60 * 1000;

    await user.save();

    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is: ${otp}. It expires in 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ success: true, message: "OTP sent to your email" });

    // Remove OTP after 10 minutes
    // setTimeout(() => delete otpStore[email], 600000);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error sending OTP" });
  }
};

// 2. Verify OTP & Reset Password
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.json({
      success: false,
      message: "Email, OTP and New Password are Required",
    });
  }
  // if (!otpStore[email] || otpStore[email] !== parseInt(otp)) {
  //   return res
  //     .status(400)
  //     .json({ success: false, message: "Invalid or expired OTP" });
  // }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (user.resetOtp === "" || user.resetOtp !== otp) {
      return res.status(401).json({ success: false, message: "Invalid OTP" });
    }

    if (user.resetOtpExpireAt < Date.now()) {
      return res.status(401).json({ success: false, message: "OTP expired" });
    }
    return res
      .status(200)
      .json({ success: true, message: "OTP verified successfully" });
  } catch {
    return res
      .status(500)
      .json({ success: false, message: "Error verifying OTP" });
  }
};

const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  if (!email || !newPassword) {
    return res.json({
      success: false,
      message: "Email, OTP and New Password are Required",
    });
  }
  // Hash new password
  try {
    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Ensure OTP was verified before allowing password reset
    if (!user.resetOtp || user.resetOtpExpireAt < Date.now()) {
      return res
        .status(401)
        .json({ success: false, message: "OTP expired or invalid" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    user.resetOtp = "";
    user.resetOtpExpireAt = null;
    await user.save();

    // delete otpStore[email]; // Remove OTP after successful reset

    res
      .status(200)
      .json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error resetting password" });
  }
};

export { loginUser, registerUser, sendResetOTP, verifyOTP, resetPassword };
