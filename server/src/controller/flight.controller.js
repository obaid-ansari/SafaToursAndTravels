const { flightHtml } = require("../utils/formDetails");
const transporter = require("../utils/tranporter");

const sendFlightEmail = async (req, res) => {
  try {
    const { personalDetails, flightDetails, passengers } = req.body;

    const html = flightHtml({ personalDetails, flightDetails, passengers });

    const mailOptions = {
      from: `"Safa Tours And Travels" <${process.env.GOOGLE_USER_ID}>`,
      to: process.env.GOOGLE_USER_ID,
      replyTo: personalDetails.email,
      subject: `Flight Details from ${personalDetails.name}`,
      html,
    };
    const info = await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ message: "Enquiry has been submitted successfully." });
  } catch (error) {
    res.status(500).json({
      message: "Error while sending email, Please try again later.",
      error: error.message,
    });
  }
};

module.exports = sendFlightEmail;
