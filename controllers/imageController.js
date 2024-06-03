import Image from '../models/imageModel.js';

const getAllImages = async (req, res) => {
  const images = await Image.find();
  res.status(200).json(images);
};

const getImageById = async (req, res) => {
  const { id } = req.params;
  const image = await Image.findById(id);
  if (!image) {
    return res.status(404).json({ message: 'Image not found' });
  }
  res.status(200).json(image);
};

export { getAllImages, getImageById };
