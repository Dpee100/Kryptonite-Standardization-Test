import User from '../models/userModel.js';
import { v4 } from 'uuid';



const generateApiKey = async (email) => {
  const user = await User.findOne({ email });
  if (user) {
    user.apiKey = v4();
    await user.save();
    return user.apiKey;
  }
  return null;
};

const invalidateApiKey = async (email) => {
  const user = await User.findOne({ email });
  if (user) {
    user.apiKey = null;
    await user.save();
    return true;
  }
  return false;
};

export {  generateApiKey, invalidateApiKey };
