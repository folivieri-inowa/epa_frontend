#!/usr/bin/env node

/**
 * Script per esplorare gli endpoint Strapi disponibili
 */

const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = '5a403a532069b3835d3f40009cb707dad2c3c7421a44f4fc7e1a8333eaf28a36358ffd961ae737a66c097de27f91f9235204bf1e40ceccdebeefc531bac7efbd852149085436c5e48958fc783f200ea755f074e284da42e94aa0ee5b94ddb8552f6baaf180714efbf0d562221e28eb3645514ab97524490003b0e1ad522c2a28';

// Possibili endpoints da testare
const ENDPOINTS = [
  '/pages',
  '/page-contents',
  '/home-components',
  '/components',
  '/articles',
  '/posts'
];

async function testEndpoint(endpoint) {
  const url = `${STRAPI_URL}/api${endpoint}?pagination[limit]=1`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    const result = await response.json();
    
    if (response.ok) {
      console.log(`✅ ${endpoint}: Disponibile`);
      if (result.data && result.data.length > 0) {
        console.log(`   📋 Schema campi:`, Object.keys(result.data[0].attributes || result.data[0]));
      }
      return true;
    } else {
      console.log(`❌ ${endpoint}: ${result.error?.message || 'Non disponibile'}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ ${endpoint}: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🔍 Esplorazione endpoints Strapi...\n');
  
  console.log('📡 Test connessione base...');
  try {
    const response = await fetch(`${STRAPI_URL}/api`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
      }
    });
    console.log(`Status: ${response.status}`);
  } catch (error) {
    console.error('❌ Errore connessione:', error.message);
  }
  
  console.log('\n🔍 Test endpoints specifici:');
  for (const endpoint of ENDPOINTS) {
    await testEndpoint(endpoint);
  }
  
  console.log('\n💡 Se non vedi endpoints disponibili, probabilmente i Content Types');
  console.log('   non sono ancora stati creati nell\'Admin Panel di Strapi.');
  console.log('\n🌐 Verifica su: http://localhost:1337/admin/content-type-builder');
}

main().catch(console.error);
