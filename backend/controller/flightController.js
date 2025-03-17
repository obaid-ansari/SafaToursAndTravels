const nodemailer = require("nodemailer");

const sendFlightEmail = async (req, res) => {
  const {
    name,
    email,
    phone,
    from,
    to,
    journeyType,
    departureDate,
    returnDate,
    adults,
    children,
    infants,
    classType,
    fareType,
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
    subject: "Flight Tickets Form",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nFrom: ${from}\nTo: ${to}\nJourney Type: ${journeyType}\nDeparture Date: ${departureDate}\nRetrun Date: ${returnDate}\nAdults: ${adults}\nChildren: ${children}\nInfants: ${infants}\nClass Type: ${classType}\nFare Type: ${fareType}\n`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = { sendFlightEmail };
