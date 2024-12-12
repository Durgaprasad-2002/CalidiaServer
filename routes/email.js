const { Router } = require("express");
require("dotenv").config();

const { sendEmail } = require("../assets/EmailTranspoterConfig");
const {
  ContactUserForm,
  ContactOwnerForm,
} = require("../assets/EmailResponses");

// Router
const router = Router();

// Contact form handler
router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNo, msg } = req.body;

    const HTMLDataOwner = ContactOwnerForm({
      firstName,
      lastName,
      email,
      phoneNo,
      msg,
    });

    const HTMLDataUser = ContactUserForm({
      firstName,
      lastName,
    });

    // Email options for the owner
    const mailOptionsOwner = {
      from: "Calidia",
      to: process.env.RECEIVER_EMAIL,
      subject: "New Message Through Contact Form",
      html: HTMLDataOwner,
    };

    const mailOptionsUser = {
      from: "Calidia",
      to: email, // Send to the user's email
      subject: "Thank you for Contacting Us :)",
      html: HTMLDataUser,
    };

    await Promise.all([
      sendEmail(mailOptionsOwner),
      sendEmail(mailOptionsUser),
    ]);

    return res.status(200).json({
      message: "Thank you for contacting us, Our team will reach you soon!",
    });
  } catch (error) {
    console.error("Error in sending emails:", error);
    const message = error?.message || "Failed to send emails";
    return res.status(500).json({ message: message });
  }
});

module.exports = router;
