const nodemailer = require("nodemailer");

const sendForexEmail = async (req, res) => {
  const { name, email, phone, location, currency, quantity, purpose, amount } =
    req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Bypass SSL error
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Forex Exchange Form",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nCurrency: ${currency}\nQuantity: ${quantity}\nPurpose: ${purpose}\nAmount: ${amount}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully✅" });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = { sendForexEmail };
