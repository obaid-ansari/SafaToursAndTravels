const transporter = require("../utils/tranporter");
const { visaHtml } = require("../utils/formDetails");

const sendVisaEmail = async (req, res) => {
  try {
    const { personalDetails, visaDetails } = req.body;

    const html = visaHtml({ personalDetails, visaDetails });

    const mailOptions = {
      from: `"Safa Tours And Travels" <${process.env.GOOGLE_USER_ID}>`,
      to: process.env.GOOGLE_USER_ID,
      replyTo: personalDetails.email,
      subject: `Visa Details from ${personalDetails.name}`,
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

module.exports = sendVisaEmail;
