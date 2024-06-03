import { generateApiKey } from '../services/userService.js';
import { generateOtp, storeOtp, validateOtp } from '../services/otpService.js';
import { sendOtpEmail } from '../services/emailService.js';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

// @desc Register User
// @route /api/auth/register
// @privacy Public
const register = asyncHandler(async (req, res) => {
  const { email } = req.body;
  // checkes if User Exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('User already exist');
  }
  // Register new User
  const user = await User.create({ email });
  res.status(200);
  res.json(user);
});


// @desc Send One time Password to User
// @route /api/auth/send-otp
// @privacy Public
const sendOtp = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();
  await storeOtp(email, otp);
  await sendOtpEmail(email, otp);
  res.status(200).json({ message: 'OTP sent to email' });
});

const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const isValid = await validateOtp(email, otp);
  if (isValid) {
    const apiKey = await generateApiKey(email);
    res.status(200).json({ message: 'OTP verified', apiKey });
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
};


export { register, sendOtp, verifyOtp };
