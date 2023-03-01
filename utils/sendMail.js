import {createTransport} from "nodemailer";

export const sendMail = async (email, subject, text) => {
  const transport = createTransport({
    service: 'gmail',
    auth: {
      user: 'helloak2000@gmail.com',
      pass: 'kuebcedlqirykvdf'
    }
  });

  await transport.sendMail({
    from: 'helloak2000@gmail.com',
    to: email,
    subject,
    text,
  })
};