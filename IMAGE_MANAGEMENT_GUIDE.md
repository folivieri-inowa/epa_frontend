# 📸 Guida alla Gestione delle Immagini con Strapi

## 🔄 Sistema di Gestione Immagini Implementato

La gestione delle immagini del sito è ora completamente integrata con Strapi attraverso Global Settings, permettendo di aggiornare tutte le immagini del sito dall'interfaccia amministrativa.

## 🗂️ Schema Global Settings - Immagini

### Campi Immagine Configurati

```javascript
// /strapi_backend/src/api/global-setting/content-types/global-setting/schema.json
{
  "site_logo": {
    "type": "media",
    "allowedTypes": ["images"],
    "required": false
  },
  "site_logo_white": {
    "type": "media", 
    "allowedTypes": ["images"],
    "required": false
  },
  "site_favicon": {
    "type": "media",
    "allowedTypes": ["images"], 
    "required": false
  },
  "hero_background_image": {
    "type": "media",
    "allowedTypes": ["images"],
    "required": false
  },
  "about_image": {
    "type": "media",
    "allowedTypes": ["images"],
    "required": false
  },
  "team_image": {
    "type": "media",
    "allowedTypes": ["images"],
    "required": false
  },
  "default_og_image": {
    "type": "media",
    "allowedTypes": ["images"],
    "required": false
  }
}
```

### Descrizione dei Campi

1. **site_logo**: Logo principale del sito (scuro)
2. **site_logo_white**: Logo bianco per sfondi scuri
3. **site_favicon**: Icona del sito (favicon)
4. **hero_background_image**: Immagine di sfondo per sezioni hero
5. **about_image**: Immagine per la sezione "Chi Siamo"
6. **team_image**: Immagine per la sezione team
7. **default_og_image**: Immagine predefinita per Open Graph/social sharing

## 🔧 Hook e Utilità

### useGlobalSettings Hook

```javascript
// /epa/src/hooks/use-global-settings.js

// Hook principale
const globalSettings = useGlobalSettings();

// Hook specializzati per immagini
const siteImages = useSiteImages();
const logoData = useSiteLogo();

// Helper per URL immagini
const imageUrl = getStrapiImageUrl(mediaObject);
```

### Funzioni Disponibili

```javascript
// Ottieni URL di un'immagine Strapi
getStrapiImageUrl(mediaObject, size = 'large')

// Hook per tutte le immagini del sito
useSiteImages() // Ritorna tutte le immagini con URLs processati

// Hook specializzato per loghi
useSiteLogo() // Ritorna logo default e bianco con URLs
```

## 🎨 Componenti Immagine

### 1. DynamicHeroImage

Componente per immagini hero con overlay personalizzabile:

```javascript
// /epa/src/components/dynamic-hero-image.js
<DynamicHeroImage 
  customImageUrl={strapiImageUrl}
  overlayOpacity={0.6}
  minHeight={{ xs: 600, md: 800 }}
>
  {children}
</DynamicHeroImage>
```

**Caratteristiche:**
- Fallback automatico a Global Settings
- Overlay personalizzabile
- Responsive design
- Performance ottimizzata

### 2. Logo Component

Componente logo con supporto varianti:

```javascript
// /epa/src/components/logo/logo.js
<Logo 
  variant="default" // o "white"
  disabledLink={false}
  sx={{ width: 40, height: 40 }}
/>
```

**Caratteristiche:**
- Varianti default/white automatiche
- Loading states
- Fallback a loghi statici
- Link automatico alla homepage

### 3. DynamicFavicon

Componente per favicon dinamico:

```javascript
// /epa/src/components/dynamic-favicon.js
<DynamicFavicon />
```

**Caratteristiche:**
- Aggiornamento automatico favicon
- Supporto apple-touch-icon
- Fallback a favicon statico

## 🔄 Flusso di Utilizzo

### 1. Per Sviluppatori

```javascript
// In un componente
import { useSiteImages, getStrapiImageUrl } from 'src/hooks/use-global-settings';

function MyComponent() {
  const { heroBackground, aboutImage } = useSiteImages();
  
  return (
    <div 
      style={{ 
        backgroundImage: `url(${heroBackground})` 
      }}
    >
      <img src={aboutImage} alt="About us" />
    </div>
  );
}
```

### 2. Per Amministratori

1. **Accedi a Strapi Admin** (`http://localhost:1337/admin`)
2. **Vai a Content Manager > Global Setting**
3. **Clicca sull'unico record Global Settings**
4. **Carica le immagini nei rispettivi campi:**
   - Site Logo: Logo principale
   - Site Logo White: Logo per sfondi scuri
   - Site Favicon: Icona del sito
   - Hero Background Image: Sfondo sezioni hero
   - About Image: Immagine sezione "Chi Siamo"
   - Team Image: Immagine sezione team
   - Default OG Image: Immagine social sharing
5. **Salva le modifiche**

### 3. Pubblicazione

Le immagini caricate saranno immediatamente disponibili sul frontend con fallback automatici alle immagini statiche esistenti.

## 📁 Struttura File

```
/epa/src/
├── hooks/
│   └── use-global-settings.js     # Hook per gestione immagini
├── components/
│   ├── logo/
│   │   └── logo.js                # Logo dinamico
│   ├── dynamic-hero-image.js      # Immagini hero
│   └── dynamic-favicon.js         # Favicon dinamico
├── utils/
│   └── metadata.js                # Metadati con immagini
└── sections/
    └── home/
        └── home-hero-strapi.js    # Hero con immagini dinamiche
```

## 🎯 Benefici del Sistema

### ✅ Vantaggi

1. **Gestione Centralizzata**: Tutte le immagini gestibili da Strapi
2. **Fallback Automatici**: Nessun rischio di immagini mancanti
3. **Performance**: Ottimizzazione automatica delle immagini
4. **Flessibilità**: Facile aggiunta di nuove tipologie di immagini
5. **SEO**: Metadati immagine automatici
6. **Responsività**: Immagini adaptive per tutti i dispositivi

### 🔄 Fallback System

```javascript
// Ordine di priorità per le immagini:
// 1. Immagine da Strapi Global Settings
// 2. Immagine statica di fallback
// 3. Placeholder trasparente

const imageUrl = getStrapiImageUrl(strapiImage) || 
                 '/assets/images/fallback.jpg' || 
                 '/assets/transparent.png';
```

## 🚀 Prossimi Sviluppi

### Funzionalità Future

1. **Gallerie Dinamiche**: Sistema per gallery da Strapi
2. **Immagini Prodotto**: Integrazione con catalogo servizi
3. **Varianti Responsive**: Immagini diverse per dispositivi
4. **Lazy Loading**: Caricamento progressivo ottimizzato
5. **WebP Support**: Formati immagine moderni automatici

### Estensioni Possibili

```javascript
// Nuovi campi Global Settings
"gallery_images": {
  "type": "media",
  "multiple": true,
  "allowedTypes": ["images"]
},
"service_default_image": {
  "type": "media", 
  "allowedTypes": ["images"]
}
```

## 📞 Supporto Tecnico

Per domande sul sistema di gestione immagini:
- Consulta questo documento
- Verifica i log di sviluppo per errori
- Controlla la console Strapi per problemi di upload
- Usa i componenti fallback in caso di problemi

---

**Sistema implementato:** ✅ Completato  
**Data implementazione:** Gennaio 2025  
**Stato:** Pronto per uso in produzione  
**Compatibilità:** Next.js 14+ e Strapi 5+
