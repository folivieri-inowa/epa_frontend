#!/usr/bin/env node

/**
 * Script semplificato per popolare contenuti Oracle Executive Protection
 * Usa fetch nativo Node.js 18+
 */

const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = '5a403a532069b3835d3f40009cb707dad2c3c7421a44f4fc7e1a8333eaf28a36358ffd961ae737a66c097de27f91f9235204bf1e40ceccdebeefc531bac7efbd852149085436c5e48958fc783f200ea755f074e284da42e94aa0ee5b94ddb8552f6baaf180714efbf0d562221e28eb3645514ab97524490003b0e1ad522c2a28';

// Contenuti da creare
const PAGES = [
  {
    slug: 'home',
    title: 'Oracle Executive Protection - Homepage',
    metaDescription: 'Consulenza, analisi e formazione nel settore sicurezza',
    content: 'Homepage Oracle Executive Protection con servizi di sicurezza executive.',
    isPublished: true,
  },
  {
    slug: 'chi-siamo',
    title: 'Chi Siamo - Oracle Executive Protection',
    metaDescription: 'Il nostro team di esperti in sicurezza e protezione',
    content: 'Oracle Executive Protection è specializzata in consulenza per la sicurezza executive.',
    isPublished: true,
  }
];

const COMPONENTS = [
  {
    componentType: 'hero',
    title: 'Oracle Executive Protection',
    subtitle: 'Consulenza nel settore sicurezza',
    description: 'Soluzioni personalizzate per la sicurezza executive.',
    buttonText: 'Scopri i Servizi',
    buttonUrl: '/chi-siamo',
    isVisible: true,
    displayOrder: 1,
  }
];

// Utility per richieste API
async function apiRequest(endpoint, method = 'GET', data = null) {
  const url = `${STRAPI_URL}/api${endpoint}`;
  
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  const result = await response.json();
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${JSON.stringify(result)}`);
  }
  
  return result;
}

// Test connessione
async function testConnection() {
  console.log('🔍 Test connessione Strapi...');
  
  try {
    await apiRequest('/page-contents?pagination[limit]=1');
    console.log('✅ Connessione OK');
    return true;
  } catch (error) {
    console.error('❌ Connessione fallita:', error.message);
    return false;
  }
}

// Popola pagine
async function createPages() {
  console.log('📄 Creazione pagine...');
  
  for (const page of PAGES) {
    try {
      // Controlla se esiste
      const existing = await apiRequest(`/page-contents?filters[slug][$eq]=${page.slug}`);
      
      if (existing.data && existing.data.length > 0) {
        console.log(`  ⚠️  Già esistente: ${page.slug}`);
        continue;
      }
      
      // Crea pagina
      await apiRequest('/page-contents', 'POST', { data: page });
      console.log(`  ✅ Creata: ${page.slug}`);
      
    } catch (error) {
      console.error(`  ❌ Errore ${page.slug}:`, error.message);
    }
  }
}

// Popola componenti
async function createComponents() {
  console.log('🏠 Creazione componenti...');
  
  for (const component of COMPONENTS) {
    try {
      // Controlla se esiste
      const existing = await apiRequest(`/home-components?filters[componentType][$eq]=${component.componentType}`);
      
      if (existing.data && existing.data.length > 0) {
        console.log(`  ⚠️  Già esistente: ${component.componentType}`);
        continue;
      }
      
      // Crea componente
      await apiRequest('/home-components', 'POST', { data: component });
      console.log(`  ✅ Creato: ${component.componentType}`);
      
    } catch (error) {
      console.error(`  ❌ Errore ${component.componentType}:`, error.message);
    }
  }
}

// Funzione principale
async function main() {
  console.log('🚀 Oracle Executive Protection - Popolazione Contenuti\n');

  try {
    // Test connessione
    if (!(await testConnection())) {
      console.log('\n💡 Verifica che Strapi sia in esecuzione: npm run develop');
      return;
    }

    console.log('');

    // Crea contenuti
    await createPages();
    console.log('');
    await createComponents();

    console.log('\n🎉 Popolazione completata!');
    console.log('\n📋 Verifica su: http://localhost:1337/admin');
    
  } catch (error) {
    console.error('\n❌ Errore:', error.message);
  }
}

// Esegui
main().catch(console.error);
