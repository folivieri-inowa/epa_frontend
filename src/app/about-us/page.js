import { AboutView } from 'src/sections/about/view';
import { endpoints } from '../../utils/axios';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Chi siamo',
};

export default function AboutPage() {
  const URL = endpoints.strapi.about_us

  return <AboutView URL={URL+"?populate=*"} />;
}
