import { ContactView } from '../../sections/contact/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Contattaci | Oracle Executive Protection',
  description: 'Contatta Oracle Executive Protection per soluzioni di sicurezza personalizzate. Consulenza specializzata, protezione esecutiva e security management globale.',
  keywords: 'contatti oracle Executive Protection, consulenza sicurezza, richiesta informazioni security management, protezione esecutiva preventivo',
};

export default function ContactPage() {
  // Non passiamo più dati statici, i componenti useranno le traduzioni direttamente
  return <ContactView />;
}
