import { ContactView } from '../../sections/contact/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Contattaci | EPA',
};

export default function ContactPage() {
  const staticData = {
    title: 'Come',
    subtitle: 'Contattarci',
    contact_title: 'Modulo di Contatto',
    form: { name: 'Nome', email: 'Email', message: 'Messaggio' },
  };

  return <ContactView data={staticData} />;
}
