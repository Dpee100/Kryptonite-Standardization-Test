import express from 'express';
import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import imageRoutes from './routes/imageRoute.js';
import fileRoutes from './routes/fileRoute.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

connectDB();
const client = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);
app.use('/api', imageRoutes);

app.use(errorHandler);
app.use(notFound);
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started no ${port}`));
