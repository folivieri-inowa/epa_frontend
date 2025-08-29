import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validazione base dei campi
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      );
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      );
    }

    // Log della richiesta
    const contactData = {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString()
    };
    
    console.log('📧 Nuova richiesta di contatto:', contactData);

    // Configura Nodemailer per SMTP Aruba
    const transporter = nodemailer.createTransport({
      host: 'smtps.aruba.it',
      port: 465,
      secure: true, // SSL/TLS
      auth: {
        user: process.env.EMAIL_USER, // info@oracleprotectionagency.it
        pass: process.env.EMAIL_PASS, // Password email Aruba
      },
      // Opzioni aggiuntive per Aruba
      tls: {
        rejectUnauthorized: false // Per evitare problemi di certificato
      }
    });

    // Formatta l'email HTML
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #DAA520;">
          Nuova Richiesta di Contatto - Oracle Executive Protection
        </h2>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #DAA520; margin-top: 0;">Dati Cliente:</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone}</p>
          <p><strong>Oggetto:</strong> ${subject}</p>
        </div>

        <div style="background: white; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
          <h3 style="color: #333; margin-top: 0;">Messaggio:</h3>
          <p style="line-height: 1.6;">${message}</p>
        </div>

        <div style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 5px; font-size: 12px; color: #666;">
          <p><strong>Data ricezione:</strong> ${new Date().toLocaleString('it-IT')}</p>
          <p><strong>IP Cliente:</strong> ${request.headers.get('x-forwarded-for') || 'N/A'}</p>
          <p><strong>User Agent:</strong> ${request.headers.get('user-agent') || 'N/A'}</p>
        </div>
      </div>
    `;

    // Opzioni email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Mittente
      to: 'info@oracleprotection.it', // Destinatario
      replyTo: email, // Reply diretto al cliente
      subject: `Nuova Richiesta: ${subject}`,
      html: htmlContent,
      // Versione testuale alternativa
      text: `
NUOVA RICHIESTA DI CONTATTO

Nome: ${name}
Email: ${email}  
Telefono: ${phone}
Oggetto: ${subject}

Messaggio:
${message}

---
Data: ${new Date().toLocaleString('it-IT')}
IP: ${request.headers.get('x-forwarded-for') || 'N/A'}
      `
    };

    // Prova a inviare l'email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        await transporter.sendMail(mailOptions);
        console.log('✅ Email inviata con successo a:', 'info@oracleprotectionagency.it');
      } catch (emailError) {
        console.error('❌ Errore invio email:', emailError);
        // Continua comunque e logga i dati
      }
    } else {
      console.log('⚠️ Credenziali email non configurate, solo logging');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Messaggio ricevuto con successo! Ti contatteremo presto.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Errore nell\'API:', error);
    return NextResponse.json(
      { error: 'Errore interno del server. Riprova più tardi.' },
      { status: 500 }
    );
  }
}
