import { ContactView } from 'src/sections/contact/view';
import { endpoints } from '../../utils/axios';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Contattaci',
};

export default function ContactPage() {
  const URL = endpoints.strapi.contact_us

  return <ContactView URL={URL} />;
}
