import User from '../models/userModel.js';
import Image from '../models/imageModel.js';
import base64Img from 'node-base64-image';

const uploadImage = async (req, res) => {
  const apiKey = req.headers['api-key'];
  console.log(apiKey);
  const user = await User.findOne({ apiKey });
  if (!user) {
    return res.status(401).json({ message: 'Invalid API key' });
  }

  const { file } = req.body;
  if (!file) {
    return res.status(400).json({ message: 'No file provided' });
  }

  try {
    const base64Data = file.replace(/^data:image\/\w+;base64,/, '');
    const image = new Image({ owner: user._id, base64: base64Data });
    await image.save();
    res.status(201).json({ message: 'Image uploaded successfully', image });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image', error });
  }
};

export { uploadImage };
