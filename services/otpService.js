// Create Redis client
import { createClient } from 'redis';

const client = createClient({
  password: 'oaSj1rYXSKKPonmXn1qg6it3E4AAHlWe',
  socket: {
    host: 'redis-13035.c275.us-east-1-4.ec2.redns.redis-cloud.com',
    port: 13035,
  },
});

client.on('error', (error) => {
  console.error('Redis client error:', error);
});

client.connect().catch(console.error);

// Generate a 6-digit OTP
const generateOtp = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// Store OTP with expiration time
const storeOtp = (email, otp, callback) => {
  client.SETEX(email, process.env.OTPEXPIRY, otp);
};

// const getEmail = await client.GET('jesseobinna7@gmail.com');
// console.log(getEmail);

// Validate OTP and delete if valid
const validateOtp = async (email, otp) => {
  const storedOtp = await client.GET(`${email}`);
  if (storedOtp === otp) {
    await client.DEL(`${email}`);
    return true;
  }
  return false;
};

// Handle connection events
client.on('error', (error) => {
  console.error('Redis client error:', error);
});

// Export functions
export { generateOtp, storeOtp, validateOtp };
