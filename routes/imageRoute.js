import express from 'express';
import { getAllImages, getImageById } from '../controllers/imageController.js';
const router = express.Router();

router.get('/images', getAllImages);
router.get('/images/:id', getImageById);

export default router;
