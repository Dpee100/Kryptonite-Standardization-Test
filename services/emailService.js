import nodemailer from 'nodemailer';
// import asyncHandler from 'express-async-handler';

const sendOtpEmail = async (email, otp, subject) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: process.env.GMAILEMAIL,
        pass: process.env.GMAILPASSWORD,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const mailOptions = {
      from: {
        name: 'Kryptonite',
        address: 'admin@kryptonite.org'
      },
      to: email,
      subject: subject,
      text: `here is your otp ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    return true; // Indicate successful email sending
  } catch (error) {
    console.error(error);
    throw new Error('Email could not be sent.');
  }
};

export { sendOtpEmail };
