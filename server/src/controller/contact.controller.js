const { contactHtml } = require("../utils/formDetails");
const transporter = require("../utils/tranporter");

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, countryCode, phone, service, umrahPackage, message } =
      req.body;

    const html = contactHtml({
      name,
      email,
      countryCode,
      phone,
      service,
      umrahPackage,
      message,
    });

    const mailOptions = {
      from: `"Safa Tours And Travels" <${process.env.GOOGLE_USER_ID}>`,
      to: process.env.GOOGLE_USER_ID,
      replyTo: email,
      subject: `Contact Details from ${name}`,
      html,
    };
    const info = await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ message: "Enquiry has been submitted successfully." });
  } catch (error) {
    console.error("========== ERROR ==========");
    console.error(error);
    console.error(error.message);
    console.error(error.code);
    console.error("===========================");

    res.status(500).json({
      message: "Error while sending email.",
      error: error.message,
    });
  }
};

module.exports = sendContactEmail;
