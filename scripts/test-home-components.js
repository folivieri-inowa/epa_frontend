#!/usr/bin/env node

/**
 * Script per popolare i componenti home di Oracle Executive Protection
 */

const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = '5a403a532069b3835d3f40009cb707dad2c3c7421a44f4fc7e1a8333eaf28a36358ffd961ae737a66c097de27f91f9235204bf1e40ceccdebeefc531bac7efbd852149085436c5e48958fc783f200ea755f074e284da42e94aa0ee5b94ddb8552f6baaf180714efbf0d562221e28eb3645514ab97524490003b0e1ad522c2a28';

// Prima controllo lo schema di home-components
async function exploreHomeComponents() {
  console.log('🔍 Esplorazione schema home-components...');
  
  const response = await fetch(`${STRAPI_URL}/api/home-components`, {
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  
  const result = await response.json();
  console.log('📋 Risposta API home-components:');
  console.log(JSON.stringify(result, null, 2));
  
  return response.ok;
}

// Test di creazione componente semplice
async function testCreateComponent() {
  console.log('\n🧪 Test creazione componente semplice...');
  
  const testComponent = {
    name: 'Test Hero',
    type: 'hero',
    title: 'Oracle Executive Protection',
    subtitle: 'Test componente',
    description: 'Componente di test per verificare lo schema.',
    isActive: true,
    order: 1
  };
  
  try {
    const response = await fetch(`${STRAPI_URL}/api/home-components`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: testComponent })
    });
    
    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Componente test creato con successo!');
      console.log('📋 Componente creato:', JSON.stringify(result, null, 2));
    } else {
      console.log('❌ Errore creazione componente:');
      console.log(JSON.stringify(result, null, 2));
    }
    
  } catch (error) {
    console.error('❌ Errore:', error.message);
  }
}

// Funzione principale
async function main() {
  console.log('🚀 Esplorazione Home Components Schema');
  console.log('=====================================\n');

  // Prima esplora lo schema
  await exploreHomeComponents();
  
  // Poi testa una creazione
  await testCreateComponent();
}

main().catch(console.error);
