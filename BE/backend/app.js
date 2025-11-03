const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// reusable sendMail function
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your Gmail
      pass: process.env.EMAIL_PASS, // your Gmail App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  return transporter.sendMail(mailOptions);
};

// API route 
app.post('/api/sendEmail', async (req, res) => {
  const fullName = req.body.fullName || req.body['Full Name'] || '';
  const phoneNumber = req.body.phoneNumber || req.body['Mobile No.'] || '';
  const email = req.body.email || req.body['Email Address'] || '';
  const subject = req.body.subject || req.body['Email Subject'] || '';
  const message = req.body.message || req.body["What's Your Message?"] || '';

  try {
    await sendEmail({
      email: email,
      subject: subject,
      text: message,
      html: `
        <div>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
