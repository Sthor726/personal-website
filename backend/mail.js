require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (to, subject, body) => {
  const msg = {
    to: to,
    from: 'no-reply@samuelthorson.com',  
    subject: subject,
    text: body,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent to ' + to);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};

module.exports = {
    sendEmail,
  };