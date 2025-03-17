const nodemailer = require("nodemailer");

const sendHotesEmail = async (req, res) => {
  const {
    name,
    email,
    phone,
    location,
    hotelStar,
    checkInDate,
    checkOutDate,
    rooms,
    guests,
  } = req.body;

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
    subject: "Hotel Booking Form",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nRating: ${hotelStar}\nCheck In Date: ${checkInDate}\nCheck Out Date: ${checkOutDate}\nRooms: ${rooms}\nGuest: ${guests}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = { sendHotesEmail };
