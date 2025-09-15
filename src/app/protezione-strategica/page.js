import DynamicPageView from 'src/components/dynamic-page-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Protezione Strategica | Oracle Executive Protection',
  description: 'Soluzioni avanzate di sicurezza Antiterrorismo e Anti crimine per istituzioni, aziende, corporate, infrastrutture pubbliche e private. Protezione strategica contro le minacce globali.',
  keywords: 'protezione strategica, antiterrorismo, anti crimine, sicurezza istituzionale, counter terrorism, protezione infrastrutture, sicurezza aziendale',
};

export default function ProtezioneStrategicaPage() {
  return (
    <DynamicPageView
      slug="protezione-strategica"
      fallbackTitle="Protezione Strategica"
      fallbackDescription="Soluzioni avanzate di sicurezza Antiterrorismo e Anti crimine per istituzioni, aziende, corporate."
      heroImage="/assets/images/protection-hero.jpg"
    />
  );
}
