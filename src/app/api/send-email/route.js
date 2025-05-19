import nodemailer from 'nodemailer';

export async function POST(request) {
  const res = await request.json()
  const { name, email, phone, subject, message } = res;

  const transporter = nodemailer.createTransport({
    host: "smtps.aruba.it",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: "web@protectionagency.it",
      pass: "Inowa2024!",
    },
  });

  const mailOptions = {
    from: 'web@protectionagency.it',
    to: 'info@protectionagency.it',
    subject: subject,
    text: `Nuovo contatto dal sito:\n\n\nNome: ${name}\nEmail: ${email}\nTelefono: ${phone}\n\nMessaggio:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ message: 'Email inviata con successo' })
  } catch (error) {
    return Response.json({ message: 'Si è verificato un errore', error })
  }
}
