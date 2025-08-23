import { ContactView } from '../../sections/contact/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Contattaci | Oracle Executive Protection',
  description: 'Contatta Oracle Executive Protection per soluzioni di sicurezza personalizzate. Consulenza specializzata, protezione esecutiva e security management globale.',
  keywords: 'contatti oracle Executive Protection, consulenza sicurezza, richiesta informazioni security management, protezione esecutiva preventivo',
};

export default function ContactPage() {
  const staticData = {
    title: 'Come',
    subtitle: 'Contattarci',
    contact_title: 'Richiedi Informazioni',
    form: { 
      name: 'Nome e Cognome', 
      email: 'Email', 
      phone: 'Telefono',
      subject: 'Oggetto',
      message: 'Messaggio',
      submit: 'Invia Richiesta'
    },
  };

  return <ContactView data={staticData} />;
}
