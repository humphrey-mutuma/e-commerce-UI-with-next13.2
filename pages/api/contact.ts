import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

const pmf_email = process.env.MESSAGE_EMAIL;
const pmf_email_password = process.env.MESSAGE_EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: pmf_email,
    pass: pmf_email_password,
  },
});

const pmf_recipients = process.env.MESSAGE_RECIPIENTS;

const mailOptions = {
  from: pmf_email,
  to: pmf_recipients, // add new pmf email
};

const generateEmailContent = (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  const htmlData = ` <section>
                      <h3>From: ${name} | Email Address: ${email}</h3>
                      <h4>Subject: ${subject}</h4>
                      <p>Message: ${message}</p>
                      <hr/>
                      <p>This message was sent from <a href='${process.env.NEXT_PUBLIC_ROOT_URL}/contact'>PMF website</a> contact form. </p>
                    </section>`;

  return {
    html: `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Patrick Muthuri Foundation</title>
          </head>
          <body>
          ${htmlData}
          </body>
          </html>`,
  };
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  // await database connection

  switch (method) {
    case "POST":
      try {
        // Get user based on POSTed email
        const { name, email, subject, message } = req.body;

        if (!email || !name || !subject || !message) {
          return res.status(400).json({ message: "Bad request" });
        }

        await transporter.sendMail({
          ...mailOptions,
          ...generateEmailContent(name, email, subject, message),
          subject: `You have a new message from PMF website: from ${name}, ${email}, ${subject}`,
        });
        return res.status(200).json({
          message: "Message successfully sent!",
        });
      } catch (error) {
        return res.status(500).json({
          message: "Error sending message! Please try again.",
        });
      }

    default:
      return res.status(400).json({ success: false });

      break;
  }
}
