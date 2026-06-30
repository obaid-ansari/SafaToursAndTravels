const transporter = require("../utils/tranporter");
const { forexHtml } = require("../utils/formDetails");

const sendForexEmail = async (req, res) => {
  try {
    const { personalDetails, forexDetails, convertedPrice } = req.body;

    const html = forexHtml({ personalDetails, forexDetails, convertedPrice });

    const mailOptions = {
      from: `"Safa Tours And Travels" <${process.env.GOOGLE_USER_ID}>`,
      to: process.env.GOOGLE_USER_ID,
      replyTo: personalDetails.email,
      subject: `Forex Details from ${personalDetails.name}`,
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

module.exports = sendForexEmail;
