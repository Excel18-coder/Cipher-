import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, company, phone, service, message } = req.body;

  if (!name || !email || !company || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  // Configure transporter (use your SMTP or service credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL_USER,
      pass: process.env.CONTACT_EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: 'excel6737@gmail.com',
    subject: `Business Inquiry from ${name} - ${service || 'General'} Service`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone || 'Not provided'}\nService: ${service || 'General Inquiry'}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: '✅ Your message has been sent successfully! We will respond within 24 hours.' });
  } catch (error) {
    res.status(500).json({ success: false, message: '❌ Unable to send email at this moment. Please contact us directly at excel6737@gmail.com or call +254 111 748 7554.' });
  }
}
