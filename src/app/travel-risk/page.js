import DynamicPageView from 'src/components/dynamic-page-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Travel Risk Assessment | Oracle Executive Protection',
  description: 'Servizi professionali di valutazione e gestione dei rischi per viaggi di business. Analisi dettagliata e supporto operativo.',
  keywords: 'travel risk assessment, valutazione rischi viaggio, gestione rischi business travel',
};

export default function TravelRiskPage() {
  return (
    <DynamicPageView
      slug="travel-risk"
      fallbackTitle="Travel Risk Assessment"
      fallbackDescription="Servizi professionali di valutazione e gestione dei rischi per viaggi di business."
      heroImage="/assets/images/travel-risk-hero.jpg"
    />
  );
}
