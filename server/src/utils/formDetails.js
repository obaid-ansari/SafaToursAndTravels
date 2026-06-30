const contactHtml = ({
  name,
  email,
  countryCode,
  phone,
  service,
  umrahPackage,
  message,
}) => {
  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Contact Inquiry</title>
    <style>
      body {
        font-family:
          system-ui,
          -apple-system,
          sans-serif;
        background-color: #f9f6f0;
      }
      .main {
        border-radius: 10px;
        background-color: #fff;
        line-height: 1.2;
        overflow: hidden;
        color: #0b1120;
        max-width: 550px;
        margin: 40px auto;
        border: 1px solid #2a374d60;
      }
      .header {
        background-color: #2a374d;
        padding: 20px;
      }
      h1 {
        font-size: 2rem;
        margin: 4px 0;
        color: #fff;
      }
      .subtitle {
        color: #fff;
        font-weight: 700;
        margin: 10px 0;
      }
      .content {
        padding: 20px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      td {
        padding: 10px 0;
        border-bottom: 1px solid #2a374d60;
        vertical-align: top;
        color: #0b1120;
      }
      td:first-child {
        font-weight: 600;
        width: 120px;
        color: #555;
      }
      .message-box {
        background: #f7faff;
        padding: 15px;
        border-radius: 4px;
        margin-top: 8px;
      }
      footer {
        font-size: 0.8rem;
        color: #888;
        text-align: center;
        border-top: 1px solid #2a374d60;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="main">
      <div class="header">
        <h1>Safa Tours &amp; Travels.</h1>
        <p class="subtitle">Contact Inquiry</p>
      </div>

      <div class="content">
        <p>Hello Team,</p>
        <p>You have received a new inquiry with the following details:</p>

        <table>
          <tr>
            <td>Name:</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>${email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>${countryCode} ${phone}</td>
          </tr>
          <tr>
            <td>Service:</td>
            <td>${service}</td>
          </tr>
          ${
            umrahPackage
              ? `
          <tr>
            <td>Package:</td>
            <td>${umrahPackage}</td>
          </tr>
          `
              : ""
          }
        </table>

        <strong>Message:</strong>
        <div class="message-box">
          ${message || "No additional message provided."}
        </div>
      </div>

      <footer>
        This is an automated notification from the Safa Tours &amp; Travels
        website.
      </footer>
    </div>
  </body>
</html>
`;
};

const flightHtml = ({ personalDetails, flightDetails, passengers }) => {
  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Flight Inquiry</title>

    <style>
      body {
        font-family:
          system-ui,
          -apple-system,
          sans-serif;
        background-color: #f9f6f0;
      }

      .main {
        border-radius: 10px;
        background-color: #fff;
        line-height: 1.2;
        overflow: hidden;
        color: #0b1120;
        max-width: 550px;
        margin: 40px auto;
        border: 1px solid #2a374d60;
      }

      .header {
        background-color: #2a374d;
        padding: 20px;
      }

      h1 {
        font-size: 2rem;
        margin: 4px 0;
        color: #fff;
      }

      .subtitle {
        color: #fff;
        font-weight: 700;
        margin: 10px 0;
      }

      .content {
        padding: 20px;
      }

      h3 {
        margin: 24px 0 12px;
        color: #2a374d;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 24px;
      }

      td {
        padding: 10px 0;
        border-bottom: 1px solid #2a374d60;
        vertical-align: top;
        color: #0b1120;
      }

      td:first-child {
        width: 150px;
        font-weight: 600;
        color: #555;
      }

      footer {
        font-size: 0.8rem;
        color: #888;
        text-align: center;
        border-top: 1px solid #2a374d60;
        padding: 20px;
      }
    </style>
  </head>

  <body>
    <div class="main">
      <div class="header">
        <h1>Safa Tours &amp; Travels.</h1>
        <p class="subtitle">Flight Inquiry</p>
      </div>

      <div class="content">
        <p>Hello Team,</p>
        <p>
          You have received a new flight inquiry with the following details:
        </p>

        <h3>Personal Details</h3>

        <table>
          <tr>
            <td>Name:</td>
            <td>${personalDetails.name}</td>
          </tr>

          <tr>
            <td>Email:</td>
            <td>${personalDetails.email}</td>
          </tr>

          <tr>
            <td>Phone:</td>
            <td>${personalDetails.countryCode} ${personalDetails.phone}</td>
          </tr>
        </table>

        <h3>Flight Details</h3>

        <table>
          <tr>
            <td>Trip Type:</td>
            <td>${flightDetails.tripType}</td>
          </tr>

          <tr>
            <td>From:</td>
            <td>${flightDetails.from}</td>
          </tr>

          <tr>
            <td>To:</td>
            <td>${flightDetails.to}</td>
          </tr>

          <tr>
            <td>Departure:</td>
            <td>${flightDetails.departureDate}</td>
          </tr>

          ${
            flightDetails.tripType === "round"
              ? `
          <tr>
            <td>Return:</td>
            <td>${flightDetails.returnDate}</td>
          </tr>
          `
              : ""
          }

          <tr>
            <td>Class:</td>
            <td>${flightDetails.flightClass}</td>
          </tr>

          <tr>
            <td>Fare Type:</td>
            <td>${flightDetails.fareType}</td>
          </tr>
        </table>

        <h3>Passenger Details</h3>

        <table>
          <tr>
            <td>Adults:</td>
            <td>${passengers.adults}</td>
          </tr>

          <tr>
            <td>Children:</td>
            <td>${passengers.children}</td>
          </tr>

          <tr>
            <td>Infants:</td>
            <td>${passengers.infants}</td>
          </tr>

          ${
            passengers.children > 0
              ? `
          <tr>
            <td>Child Ages:</td>
            <td>${passengers.childAges.join(", ")}</td>
          </tr>
          `
              : ""
          } ${
            passengers.infants > 0
              ? `
          <tr>
            <td>Infant Ages:</td>
            <td>${passengers.infantAges.join(", ")}</td>
          </tr>
          `
              : ""
          }
        </table>
      </div>

      <footer>
        This is an automated notification from the Safa Tours &amp; Travels
        website.
      </footer>
    </div>
  </body>
</html>

`;
};

const visaHtml = ({ personalDetails, visaDetails }) => {
  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Visa Inquiry</title>

    <style>
      body {
        font-family:
          system-ui,
          -apple-system,
          sans-serif;
        background-color: #f9f6f0;
      }

      .main {
        border-radius: 10px;
        background-color: #fff;
        line-height: 1.2;
        overflow: hidden;
        color: #0b1120;
        max-width: 550px;
        margin: 40px auto;
        border: 1px solid #2a374d60;
      }

      .header {
        background-color: #2a374d;
        padding: 20px;
      }

      h1 {
        font-size: 2rem;
        margin: 4px 0;
        color: #fff;
      }

      .subtitle {
        color: #fff;
        font-weight: 700;
        margin: 10px 0;
      }

      .content {
        padding: 20px;
      }

      h3 {
        margin: 24px 0 12px;
        color: #2a374d;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 24px;
      }

      td {
        padding: 10px 0;
        border-bottom: 1px solid #2a374d60;
        vertical-align: top;
        color: #0b1120;
      }

      td:first-child {
        width: 150px;
        font-weight: 600;
        color: #555;
      }

      footer {
        font-size: 0.8rem;
        color: #888;
        text-align: center;
        border-top: 1px solid #2a374d60;
        padding: 20px;
      }
    </style>
  </head>

  <body>
    <div class="main">
      <div class="header">
        <h1>Safa Tours &amp; Travels.</h1>
        <p class="subtitle">Visa Inquiry</p>
      </div>

      <div class="content">
        <p>Hello Team,</p>
        <p>You have received a new visa inquiry with the following details:</p>

        <h3>Personal Details</h3>

        <table>
          <tr>
            <td>Name:</td>
            <td>${personalDetails.name}</td>
          </tr>

          <tr>
            <td>Email:</td>
            <td>${personalDetails.email}</td>
          </tr>

          <tr>
            <td>Phone:</td>
            <td>${personalDetails.countryCode} ${personalDetails.phone}</td>
          </tr>
        </table>

        <h3>Visa Details</h3>

        <table>
          <tr>
            <td>Trip Type:</td>
            <td style="text-transform: capitalize">${visaDetails.tripType}</td>
          </tr>

          <tr>
            <td>Purpose:</td>
            <td>${visaDetails.purpose || "Not specified"}</td>
          </tr>

          <tr>
            <td>Visa Type:</td>
            <td>${visaDetails.visaType || "Not specified"}</td>
          </tr>

          <tr>
            <td>Departure Date:</td>
            <td>${visaDetails.departureDate}</td>
          </tr>

          ${
            visaDetails.returnDate
              ? `
          <tr>
            <td>Return Date:</td>
            <td>${visaDetails.returnDate}</td>
          </tr>
          `
              : ""
          }
        </table>
      </div>

      <footer>
        This is an automated notification from the Safa Tours &amp; Travels
        website.
      </footer>
    </div>
  </body>
</html>
`;
};

const hotelHtml = ({ personalDetails, hotelDetails }) => {
  return `
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hotel Inquiry</title>

    <style>
      body {
        font-family:
          system-ui,
          -apple-system,
          sans-serif;
        background-color: #f9f6f0;
      }

      .main {
        border-radius: 10px;
        background-color: #fff;
        line-height: 1.2;
        overflow: hidden;
        color: #0b1120;
        max-width: 550px;
        margin: 40px auto;
        border: 1px solid #2a374d60;
      }

      .header {
        background-color: #2a374d;
        padding: 20px;
      }

      h1 {
        font-size: 2rem;
        margin: 4px 0;
        color: #fff;
      }

      .subtitle {
        color: #fff;
        font-weight: 700;
        margin: 10px 0;
      }

      .content {
        padding: 20px;
      }

      h3 {
        margin: 24px 0 12px;
        color: #2a374d;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 24px;
      }

      td {
        padding: 10px 0;
        border-bottom: 1px solid #2a374d60;
        vertical-align: top;
        color: #0b1120;
      }

      td:first-child {
        width: 150px;
        font-weight: 600;
        color: #555;
      }

      .message-box {
        background: #f7faff;
        padding: 15px;
        border-radius: 4px;
        margin-top: 8px;
        white-space: pre-wrap;
      }

      footer {
        font-size: 0.8rem;
        color: #888;
        text-align: center;
        border-top: 1px solid #2a374d60;
        padding: 20px;
      }
    </style>
  </head>

  <body>
    <div class="main">
      <div class="header">
        <h1>Safa Tours &amp; Travels.</h1>
        <p class="subtitle">Hotel Inquiry</p>
      </div>

      <div class="content">
        <p>Hello Team,</p>
        <p>You have received a new hotel inquiry with the following details:</p>

        <h3>Personal Details</h3>

        <table>
          <tr>
            <td>Name:</td>
            <td>${personalDetails.name}</td>
          </tr>

          <tr>
            <td>Email:</td>
            <td>${personalDetails.email}</td>
          </tr>

          <tr>
            <td>Phone:</td>
            <td>${personalDetails.countryCode} ${personalDetails.phone}</td>
          </tr>
        </table>

        <h3>Hotel Details</h3>

        <table>
          <tr>
            <td>Destination:</td>
            <td>${hotelDetails.destination}</td>
          </tr>

          <tr>
            <td>Check-In:</td>
            <td>${hotelDetails.checkIn}</td>
          </tr>

          <tr>
            <td>Check-Out:</td>
            <td>${hotelDetails.checkOut}</td>
          </tr>

          <tr>
            <td>Rooms:</td>
            <td>${hotelDetails.rooms}</td>
          </tr>

          <tr>
            <td>Adults:</td>
            <td>${hotelDetails.adults}</td>
          </tr>

          <tr>
            <td>Children:</td>
            <td>${hotelDetails.children}</td>
          </tr>
        </table>

        <h3>Message</h3>

        <div class="message-box">
          ${hotelDetails.message || "No additional message provided."}
        </div>
      </div>

      <footer>
        This is an automated notification from the Safa Tours &amp; Travels
        website.
      </footer>
    </div>
  </body>
</html>
`;
};

const forexHtml = ({ personalDetails, forexDetails, convertedPrice }) => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Forex Inquiry</title>

    <style>
      body {
        font-family:
          system-ui,
          -apple-system,
          sans-serif;
        background-color: #f9f6f0;
      }

      .main {
        border-radius: 10px;
        background-color: #fff;
        line-height: 1.2;
        overflow: hidden;
        color: #0b1120;
        max-width: 550px;
        margin: 40px auto;
        border: 1px solid #2a374d60;
      }

      .header {
        background-color: #2a374d;
        padding: 20px;
      }

      h1 {
        font-size: 2rem;
        margin: 4px 0;
        color: #fff;
      }

      .subtitle {
        color: #fff;
        font-weight: 700;
        margin: 10px 0;
      }

      .content {
        padding: 20px;
      }

      h3 {
        margin: 24px 0 12px;
        color: #2a374d;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 24px;
      }

      td {
        padding: 10px 0;
        border-bottom: 1px solid #2a374d60;
        vertical-align: top;
        color: #0b1120;
      }

      td:first-child {
        width: 150px;
        font-weight: 600;
        color: #555;
      }

      footer {
        font-size: 0.8rem;
        color: #888;
        text-align: center;
        border-top: 1px solid #2a374d60;
        padding: 20px;
      }
    </style>
  </head>

  <body>
    <div class="main">
      <div class="header">
        <h1>Safa Tours &amp; Travels.</h1>
        <p class="subtitle">Forex Inquiry</p>
      </div>

      <div class="content">
        <p>Hello Team,</p>
        <p>You have received a new forex inquiry with the following details:</p>

        <h3>Personal Details</h3>

        <table>
          <tr>
            <td>Name:</td>
            <td>${personalDetails.name}</td>
          </tr>

          <tr>
            <td>Email:</td>
            <td>${personalDetails.email}</td>
          </tr>

          <tr>
            <td>Phone:</td>
            <td>${personalDetails.countryCode} ${personalDetails.phone}</td>
          </tr>

          <tr>
            <td>Location:</td>
            <td>${personalDetails.location}</td>
          </tr>
        </table>

        <h3>Forex Details</h3>

        <table>
          <tr>
            <td>Currency:</td>
            <td>${forexDetails.currency}</td>
          </tr>

          <tr>
            <td>Quantity:</td>
            <td>${forexDetails.quantity}</td>
          </tr>

          <tr>
            <td>Purpose:</td>
            <td>${forexDetails.purpose}</td>
          </tr>

          <tr>
            <td>Estimated Amount:</td>
            <td>₹ ${convertedPrice}</td>
          </tr>
        </table>
      </div>

      <footer>
        This is an automated notification from the Safa Tours &amp; Travels
        website.
      </footer>
    </div>
  </body>
</html>
`;
};

module.exports = { contactHtml, flightHtml, visaHtml, hotelHtml, forexHtml };
