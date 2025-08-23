# Sistema di Internazionalizzazione (i18n) - Oracle Executive Protection

## Panoramica

Il sistema i18n è stato implementato utilizzando `i18next` e `react-i18next` per gestire le traduzioni in italiano e inglese. Il sistema utilizza il localStorage per persistere la lingua scelta dall'utente e non richiede routing dinamico.

## Struttura dei File

### File di Configurazione

- `/src/locales/config-lang.js` - Configurazione delle lingue disponibili
- `/src/locales/i18n.js` - Configurazione principale di i18next
- `/src/locales/use-translation-meta.js` - Hook personalizzato per traduzioni e metadati

### File delle Traduzioni

- `/src/locales/langs/it.json` - Traduzioni in italiano (lingua predefinita)
- `/src/locales/langs/en.json` - Traduzioni in inglese

### Componenti

- `/src/components/language-switcher/` - Selettore di lingua per l'header

## Come Utilizzare le Traduzioni

### 1. Nelle Componenti React

```javascript
import { useTranslationWithMeta } from 'src/locales/use-translation-meta';

export default function MyComponent() {
  const { t } = useTranslationWithMeta();

  return (
    <div>
      <h1>{t('home.hero.title')}</h1>
      <p>{t('home.hero.description')}</p>
    </div>
  );
}
```

### 2. Per i Metadati delle Pagine

```javascript
import { useTranslationWithMeta } from 'src/locales/use-translation-meta';

export default function HomePage() {
  const { getPageMeta } = useTranslationWithMeta();
  const meta = getPageMeta('home');

  // Usa meta.title, meta.description, meta.keywords
  
  return <HomeView />;
}
```

### 3. Cambiare Lingua Programmaticamente

```javascript
const { changeLanguage } = useTranslationWithMeta();

// Cambia lingua (si salva automaticamente nel localStorage)
changeLanguage('en'); // o 'it'
```

## Come Funziona il Sistema

Il sistema i18n utilizza:

1. **localStorage** per persistere la lingua scelta dall'utente
2. **i18next** per la gestione delle traduzioni
3. **Stato React** per aggiornare l'interfaccia in tempo reale
4. **Nessun routing dinamico** - tutte le pagine rimangono sugli stessi URL

## Struttura delle Traduzioni JSON

Le traduzioni sono organizzate in sezioni logiche:

```json
{
  "common": {
    "home": "Home",
    "about": "Chi Siamo",
    // ... elementi comuni
  },
  "navigation": {
    "home": "Home",
    "about": "Chi Siamo",
    // ... elementi di navigazione
  },
  "meta": {
    "home": {
      "title": "Titolo della pagina home",
      "description": "Descrizione SEO",
      "keywords": "parole chiave"
    }
    // ... metadati per altre pagine
  },
  "home": {
    "hero": {
      "title": "Titolo principale",
      "subtitle": "Sottotitolo",
      // ... contenuti della home
    }
  }
  // ... altre sezioni
}
```

## Aggiungere Nuove Traduzioni

### 1. Aggiungere una chiave di traduzione

Aggiungi la chiave in entrambi i file (`it.json` e `en.json`):

**it.json:**
```json
{
  "services": {
    "new_service": {
      "title": "Nuovo Servizio",
      "description": "Descrizione del nuovo servizio"
    }
  }
}
```

**en.json:**
```json
{
  "services": {
    "new_service": {
      "title": "New Service", 
      "description": "Description of the new service"
    }
  }
}
```

### 2. Utilizzare la nuova traduzione

```javascript
const { t } = useTranslationWithMeta();

return (
  <div>
    <h2>{t('services.new_service.title')}</h2>
    <p>{t('services.new_service.description')}</p>
  </div>
);
```

## Aggiungere una Nuova Lingua

### 1. Non è necessario aggiornare Next.js config

Il sistema non utilizza routing dinamico, quindi non servono modifiche a `next.config.js`.

### 2. Aggiungere la configurazione della lingua

In `src/locales/config-lang.js`, aggiungi la nuova lingua all'array `allLangs`:

```javascript
{
  label: 'Français',
  value: 'fr',
  systemValue: merge(frFRDate, frFRDataGrid, frFRCore),
  adapterLocale: frFRAdapter,
  icon: 'flagpack:fr',
}
```

### 3. Creare il file delle traduzioni

Crea `/src/locales/langs/fr.json` con tutte le traduzioni necessarie.

### 4. Aggiornare la configurazione i18n

In `src/locales/i18n.js`:

```javascript
import translationFr from './langs/fr.json';

// ...

resources: {
  it: { translations: translationIt },
  en: { translations: translationEn },
  fr: { translations: translationFr }, // Aggiungi qui
  // ...
},
```

## Aggiornare Pagine Esistenti

### Esempio di conversione di una pagina:

**Prima:**
```javascript
export const metadata = {
  title: 'Chi siamo | Oracle Executive Protection',
  description: 'Scopri Oracle Executive Protection...',
};

export default function ChiSiamoPage() {
  return (
    <div>
      <h1>Chi Siamo</h1>
      <p>Testo fisso in italiano</p>
    </div>
  );
}
```

**Dopo:**
```javascript
'use client';

import { useTranslationWithMeta } from 'src/locales/use-translation-meta';

export default function ChiSiamoPage() {
  const { t, getPageMeta } = useTranslationWithMeta();
  const meta = getPageMeta('about');

  return (
    <div>
      <h1>{t('about.hero.title')}</h1>
      <p>{t('about.hero.description')}</p>
    </div>
  );
}
```

## Best Practices

1. **Organizzazione delle Chiavi**: Usa una struttura gerarchica logica (es: `pagina.sezione.elemento`)

2. **Nomi Descrittivi**: Usa nomi chiari e descrittivi per le chiavi di traduzione

3. **Consistenza**: Mantieni la stessa struttura in tutti i file di traduzione

4. **Fallback**: Il sistema è configurato per utilizzare l'italiano come fallback

5. **Testi Lunghi**: Per testi molto lunghi, considera di spezzarli in paragrafi separati

## Testare le Traduzioni

1. Avvia il progetto: `npm run dev`
2. Naviga su `http://localhost:3032`
3. Usa il selettore di lingua nell'header per testare il cambio lingua
4. Verifica che tutti i testi si aggiornino correttamente

## Troubleshooting

### Problema: Traduzione non trovata
**Sintomo**: Viene mostrata la chiave invece del testo tradotto
**Soluzione**: Verifica che la chiave esista in entrambi i file di traduzione

### Problema: Cambio lingua non funziona
**Sintomo**: La lingua non cambia al click del selettore
**Soluzione**: Verifica che i18next sia configurato correttamente e che il localStorage sia accessibile

### Problema: Traduzioni non persistenti
**Sintomo**: La lingua torna all'italiano al refresh della pagina
**Soluzione**: Verifica che il localStorage funzioni correttamente e che la configurazione i18next includa il LanguageDetector

### Problema: Metadati non tradotti
**Sintomo**: I metadati delle pagine non cambiano lingua
**Soluzione**: Assicurati di utilizzare `getPageMeta()` e di aver aggiunto i metadati nel file JSON delle traduzioni
