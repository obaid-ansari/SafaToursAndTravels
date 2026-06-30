const transporter = require("../utils/tranporter");

const { hotelHtml } = require("../utils/formDetails");

const sendHotelEmail = async (req, res) => {
  try {
    const { personalDetails, hotelDetails } = req.body;

    const html = hotelHtml({ personalDetails, hotelDetails });

    const mailOptions = {
      from: `"Safa Tours And Travels" <${process.env.GOOGLE_USER_ID}>`,
      to: process.env.GOOGLE_USER_ID,
      replyTo: personalDetails.email,
      subject: `Hotel Details from ${personalDetails.name}`,
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

module.exports = sendHotelEmail;
