#!/usr/bin/env node

/**
 * Script di popolazione Oracle Executive Protection 
 * Basato sugli schemi reali di Strapi
 */

const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = '5a403a532069b3835d3f40009cb707dad2c3c7421a44f4fc7e1a8333eaf28a36358ffd961ae737a66c097de27f91f9235204bf1e40ceccdebeefc531bac7efbd852149085436c5e48958fc783f200ea755f074e284da42e94aa0ee5b94ddb8552f6baaf180714efbf0d562221e28eb3645514ab97524490003b0e1ad522c2a28';

// Contenuto per Pages (usando schema reale)
const PAGES_DATA = [
  {
    title: 'Oracle Executive Protection - Homepage',
    slug: 'home',
    description: 'Homepage di Oracle Executive Protection con servizi specializzati in sicurezza executive e protezione strategica.',
    meta_title: 'Oracle Executive Protection - Security & Protection Services',
    meta_description: 'Consulenza, analisi e formazione nel settore sicurezza, difesa e protezione fisica e tecnologica.',
    meta_keywords: 'executive protection, sicurezza, protezione, travel risk, consulenza sicurezza'
  },
  {
    title: 'Chi Siamo - Oracle Executive Protection',
    slug: 'chi-siamo',
    description: 'Scopri Oracle Executive Protection: il nostro team di esperti in sicurezza, consulenza e protezione executive.',
    meta_title: 'Chi Siamo - Oracle Executive Protection Team',
    meta_description: 'Esperti in sicurezza executive, consulenza e protezione con anni di esperienza nel settore.',
    meta_keywords: 'team, esperti sicurezza, consulenza, protezione executive, oracle executive protection'
  }
];

// Utility per API call
async function callAPI(endpoint, method = 'GET', data = null) {
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
  
  return { response, result };
}

// Test connessione
async function testConnection() {
  console.log('🔍 Test connessione Strapi...');
  
  const { response, result } = await callAPI('/pages?pagination[limit]=1');
  
  if (response.ok) {
    console.log('✅ Connessione Strapi OK');
    return true;
  }
  
  console.error('❌ Errore connessione:', result);
  return false;
}

// Crea le pagine
async function createPages() {
  console.log('\n📄 Creazione pagine...');
  
  let createdCount = 0;
  let existingCount = 0;
  
  for (let i = 0; i < PAGES_DATA.length; i++) {
    const pageData = PAGES_DATA[i];
    
    try {
      // Controlla se esiste
      const { response: checkResponse, result: checkResult } = await callAPI(`/pages?filters[slug][$eq]=${pageData.slug}`);
      
      if (checkResponse.ok && checkResult.data && checkResult.data.length > 0) {
        console.log(`  ⚠️  Pagina già esistente: ${pageData.slug}`);
        existingCount++;
        continue;
      }
      
      // Crea pagina
      const { response: createResponse, result: createResult } = await callAPI('/pages', 'POST', { 
        data: pageData 
      });
      
      if (createResponse.ok) {
        console.log(`  ✅ Pagina creata: ${pageData.slug}`);
        createdCount++;
      } else {
        console.error(`  ❌ Errore creazione ${pageData.slug}:`, createResult);
      }
      
    } catch (error) {
      console.error(`  ❌ Errore ${pageData.slug}:`, error.message);
    }
    
    // Breve pausa tra le richieste
    if (i < PAGES_DATA.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  }
  
  console.log(`📄 Risultato: ${createdCount} create, ${existingCount} esistenti`);
}

// Controlla gli endpoint disponibili
async function checkEndpoints() {
  console.log('\n🔍 Verifica endpoint disponibili:');
  
  const endpoints = ['/pages', '/page-contents', '/home-components'];
  
  for (let i = 0; i < endpoints.length; i++) {
    const endpoint = endpoints[i];
    const { response } = await callAPI(`${endpoint}?pagination[limit]=1`);
    
    const status = response.ok ? '✅' : '❌';
    console.log(`  ${status} ${endpoint}`);
  }
}

// Funzione principale
async function main() {
  console.log('🚀 Oracle Executive Protection - Popolazione Contenuti');
  console.log('===================================================\n');

  try {
    // Test connessione
    if (!(await testConnection())) {
      console.log('\n💡 Verifica che:');
      console.log('   - Strapi sia in esecuzione: npm run develop');
      console.log('   - L\'API token sia corretto');
      console.log('   - I Content Types siano configurati');
      return;
    }

    // Verifica endpoint
    await checkEndpoints();

    // Crea contenuti
    await createPages();

    console.log('\n🎉 Popolazione completata con successo!');
    console.log('\n📋 Verifica risultati:');
    console.log('   - Admin Panel: http://localhost:1337/admin');
    console.log('   - Content Manager → Pages');
    console.log('\n🔄 Prossimi step:');
    console.log('   - Crea Content Types mancanti se necessario');
    console.log('   - Aggiorna i componenti React per usare i nuovi contenuti');
    
  } catch (error) {
    console.error('\n❌ Errore durante l\'esecuzione:', error.message);
  }
}

// Esecuzione
main().catch(console.error);
