# Project Title

Node.js Express Application with Redis Integration

## Description

This is a Node.js application built using Express, integrated with Redis for caching and data storage. The application includes authentication, file handling, and image management functionalities. 

## Features

- User Authentication
- File Management
- Image Management
- Redis Integration for caching and data storage
- Custom error handling

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   REDIS_HOST=<your-redis-host>
   REDIS_PORT=<your-redis-port>
   REDIS_PASSWORD=<your-redis-password>
   ```

4. **Connect to MongoDB:**

   Update the `MONGODB_URI` in the `.env` file with your MongoDB connection string.

5. **Start the application:**
   ```bash
   npm start
   ```

## Usage

- **Authentication Routes:**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login a user

- **File Routes:**
  - `POST /api/files/upload` - Upload a file
  - `GET /api/files/:id` - Retrieve a file

- **Image Routes:**
  - `POST /api/images/upload` - Upload an image
  - `GET /api/images/:id` - Retrieve an image

## Middleware

- **Error Handling:**
  Custom error handling middleware is used to catch and handle errors.
  
- **Not Found:**
  Middleware to handle 404 Not Found errors.

## Redis Configuration

The Redis client is configured using the following environment variables:
- `REDIS_HOST`: Hostname for the Redis server
- `REDIS_PORT`: Port number for the Redis server
- `REDIS_PASSWORD`: Password for the Redis server (if applicable)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
