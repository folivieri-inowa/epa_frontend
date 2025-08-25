import PageWithLoading from 'src/components/page-with-loading';
import LuxurySecurityView from 'src/sections/luxury-security/view';

export const metadata = {
  title: 'Luxury Security Management | Sicurezza per Hotel di Lusso e Dimore Private',
  description: 'Trasformiamo il vostro Hotel in un ambiente sicuro e protetto per clienti VIP. Servizi di sicurezza personalizzati per dimore private e strutture di lusso.',
  keywords: 'luxury hotel security, sicurezza hotel lusso, dimore private, protezione VIP, hospitality security, travel risk management',
};

export default function LuxurySecurityPage() {
  return (
    <PageWithLoading>
      <LuxurySecurityView />
    </PageWithLoading>
  );
}
