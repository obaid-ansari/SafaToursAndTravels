const nodemailer = require("nodemailer");

const sendVisaEmail = async (req, res) => {
  const {
    name,
    email,
    phone,
    journeyType,
    departureDate,
    returnDate,
    PurposeOfVisa,
    VisaType,
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
    subject: "Visa Assistance Form",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nJourney Type: ${journeyType}\nDeparture Date: ${departureDate}\nReturn Date: ${returnDate}\nPurpose of Visit: ${PurposeOfVisa}\nVisa Type: ${VisaType}\n`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = { sendVisaEmail };
