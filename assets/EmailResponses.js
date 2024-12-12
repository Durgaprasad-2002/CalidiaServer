function ContactOwnerForm({ firstName, lastName, email, phoneNo, msg }) {
  return `<!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f9f9f9;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #ffffff;
                        border: 1px solid #dddddd;
                        border-radius: 8px;
                        overflow: hidden;
                    }
                    .email-header {
                        background-color:rgb(18, 81, 21);
                        color: #ffffff;
                        padding: 15px 20px;
                        text-align: center;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .email-body {
                        padding: 20px;
                    }
                    .email-body h2 {
                        color: #333333;
                        margin-top: 0;
                    }
                    .email-body p {
                        margin: 5px 0;
                        line-height: 1.6;
                    }
                    .email-body .field {
                        margin-bottom: 10px;
                    }
                    .email-body .field span {
                        font-weight: bold;
                        color: #555555;
                    }
                    .email-footer {
                        background-color: #f1f1f1;
                        text-align: center;
                        padding: 10px 20px;
                        font-size: 12px;
                        color: #666666;
                    }
                    .email-header img {
                        max-width: 100px;
                    }
                    .company-description {
                        margin: 20px 0;
                        font-style: italic;
                        color: #444444;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="email-header">
                        <p>New Message Received</p>
                    </div>
                    <div class="email-body">
                        <h2>Hello,</h2>
                        <p>You have received a new message. Here are the details:</p>
                        <div class="field">
                            <span>Name:</span> ${firstName} ${lastName}
                        </div>
                        <div class="field">
                            <span>Email:</span> ${email}
                        </div>
                        <div class="field">
                            <span>Mobile No:</span> ${phoneNo}
                        </div>
                    
                        <div class="field">
                            <span>Message:</span>
                            <p>${msg}</p>
                        </div>
                        
                    </div>
                    <div class="email-footer">
                        © 2024 CaliDia Foods. All rights reserved.
                    </div>
                </div>
            </body>
            </html>
`;
}

function ContactUserForm({ firstName, lastName }) {
  return `<!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f9f9f9;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #ffffff;
                        border: 1px solid #dddddd;
                        border-radius: 8px;
                        overflow: hidden;
                    }
                    .email-header {
                        background-color:rgb(18, 81, 21);
                        color: #ffffff;
                        padding: 15px 20px;
                        text-align: center;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .email-body {
                        padding: 20px;
                    }
                    .email-body h2 {
                        color: #333333;
                        margin-top: 0;
                    }
                    .email-body p {
                        margin: 5px 0;
                        line-height: 1.6;
                    }
                    .email-body .field {
                        margin-bottom: 10px;
                    }
                    .email-body .field span {
                        font-weight: bold;
                        color: #555555;
                    }
                    .email-footer {
                        background-color: #f1f1f1;
                        text-align: center;
                        padding: 10px 20px;
                        font-size: 12px;
                        color: #666666;
                    }
                    .email-body a {
                        color: #007bff;
                        text-decoration: none;
                    }
                    .email-body a:hover {
                        text-decoration: underline;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="email-header">
                        <p>Thank You for Contacting Us</p>
                    </div>
                    <div class="email-body">
                        <h2>Hello ${firstName} ${lastName},</h2>
                        <Calidia>Thank you for reaching out to CaliDia Foods. We have received your message and will get back to you shortly. Calidia is your Trusted Source for Authentic Indian Food Products in Ireland, delivering premium Indian food products to retailers across Ireland with a commitment to quality and affordability.</p>
                        <p>If you need further assistance, feel free to reply to this email or visit our <a href="https://calidiafoods.com">website</a>.</p>
                    </div>
                    <div class="email-footer">
                        © 2024 CaliDia Foods. All rights reserved.
                    </div>
                </div>
            </body>
            </html>
`;
}

module.exports = {
  ContactOwnerForm,
  ContactUserForm,
};
