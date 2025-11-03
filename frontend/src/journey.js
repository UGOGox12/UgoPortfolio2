// backend/index.js
import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import fs from 'fs';
import cors from 'cors';

// Debug info
console.log('CWD:', process.cwd());
console.log('Does .env exist?', fs.existsSync('./.env'));
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'SET' : 'NOT SET');

const app = express();

// ✅ Enable CORS so frontend at :5173 can call backend
app.use(cors({ origin: 'http://localhost:5173' }));

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Nodemailer setup (using Gmail + App Password)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // from .env
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

// API route to send email
app.post('/api/sendEmail', async (req, res) => {
  const fullName = req.body.fullName || req.body['Full Name'] || '';
  const phoneNumber = req.body.phoneNumber || req.body['Mobile No.'] || '';
  const email = req.body.email || req.body['Email Address'] || '';
  const subject = req.body.subject || req.body['Email Subject'] || '';
  const message = req.body.message || req.body["What's Your Message?"] || '';

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // all messages go to your inbox
    subject: `Contact Form: ${subject}`,
    text: `Name: ${fullName}
Phone: ${phoneNumber}
Email: ${email}
Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Message sent successfully');
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('❌ Error sending message:', error);
    res
      .status(500)
      .json({ success: false, message: 'Error sending message', error: error.message });
  }
});

// Start server
const PORT = 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
