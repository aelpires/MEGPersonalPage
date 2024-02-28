// serverless function (e.g., sendEmail.js)

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
      }
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Your Name" <your-email@gmail.com>',
      to: 'recipient@example.com',
      subject: 'New message from your website',
      text: `${name} (${email}) says: ${message}`
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

module.exports = app;
