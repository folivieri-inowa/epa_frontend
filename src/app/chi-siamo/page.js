import PageWithLoading from 'src/components/page-with-loading';
import ChiSiamoView from 'src/sections/chi-siamo/view/chi-siamo-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Chi siamo | Oracle Executive Protection',
  description: 'Scopri Oracle Executive Protection: oltre 30 anni di esperienza nella security management e protezione esecutiva. Protezione predittiva, preventiva, proattiva e multilivello.',
  keywords: 'chi siamo oracle Executive Protection, sicurezza globale, esperienza security management, protezione esecutiva storia',
};

export default function ChiSiamoPage() {
  return (
    <PageWithLoading>
      <ChiSiamoView />
    </PageWithLoading>
  );
}
