const nodemailer = require("nodemailer");

exports.sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "165865db9d9e86",
      pass: "914516114fafcd",
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    html: options.html,
  };
  await transporter.sendMail(mailOptions);
};
