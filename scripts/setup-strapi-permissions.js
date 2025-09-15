#!/usr/bin/env node

/**
 * Script per configurazione automatica permessi Strapi
 * Abilita i permessi necessari per le API pubbliche
 */

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1338';

/**
 * Guida per configurazione manuale permessi
 */
function showPermissionsGuide() {
  console.log('🔑 GUIDA CONFIGURAZIONE PERMESSI STRAPI');
  console.log('=' .repeat(50));
  console.log('');
  console.log('Per abilitare le API pubbliche, segui questi passi:');
  console.log('');
  console.log('1. 🌐 Apri Strapi Admin:');
  console.log(`   ${STRAPI_URL}/admin`);
  console.log('');
  console.log('2. 🔐 Effettua il login (se richiesto)');
  console.log('');
  console.log('3. ⚙️  Vai a: Settings > Roles');
  console.log('');
  console.log('4. 👥 Clicca su "Public" role');
  console.log('');
  console.log('5. 📋 Nella sezione "Permissions":');
  console.log('   - Espandi "Global-setting"');
  console.log('   - ✅ Abilita: find (Read)');
  console.log('   - ✅ Abilita: findOne (Read)');
  console.log('');
  console.log('6. 🏠 Nella sezione "Home-component":');
  console.log('   - ✅ Abilita: find (Read)');
  console.log('   - ✅ Abilita: findOne (Read)');
  console.log('');
  console.log('7. 📄 Per altri Content Types (se necessario):');
  console.log('   - ✅ Abilita le permission di lettura');
  console.log('');
  console.log('8. 💾 Clicca "Save" in alto a destra');
  console.log('');
  console.log('9. 🧪 Testa le API:');
  console.log(`   curl ${STRAPI_URL}/api/global-setting`);
  console.log('');
  console.log('✅ Una volta configurato, potrai eseguire:');
  console.log('   node scripts/populate-oracle-epa-content.js');
  console.log('');
}

/**
 * Test connessione API
 */
async function testApiAccess() {
  console.log('🧪 Test accesso API...');
  
  try {
    const response = await fetch(`${STRAPI_URL}/api/global-setting`);
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ API Global Settings accessibile!');
      if (data.data) {
        console.log(`   📊 Trovati dati: ${data.data.length ? 'SI' : 'NO'}`);
      }
      return true;
    } else if (response.status === 403) {
      console.log('⚠️  API risponde ma richiede permessi (403)');
      return false;
    } else {
      console.log(`❌ Errore API: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Errore connessione: ${error.message}`);
    return false;
  }
}

/**
 * Controlla stato Strapi
 */
async function checkStrapiStatus() {
  console.log('🔍 Controllo stato Strapi...');
  
  try {
    const response = await fetch(`${STRAPI_URL}/admin/init`);
    if (response.ok) {
      console.log('✅ Strapi Admin attivo');
      return true;
    } else {
      console.log('⚠️  Strapi risponde ma potrebbe richiedere setup');
      return true;
    }
  } catch (error) {
    console.log('❌ Strapi non raggiungibile');
    console.log('🔧 Assicurati che Strapi sia in esecuzione:');
    console.log('   cd strapi_backend && npm run develop');
    return false;
  }
}

/**
 * Main function
 */
async function setupPermissions() {
  console.log('🎯 Oracle EPA - Strapi Permissions Setup');
  console.log('=' .repeat(50));
  
  // Controllo stato Strapi
  const strapiOk = await checkStrapiStatus();
  if (!strapiOk) {
    process.exit(1);
  }
  
  // Test accesso API
  const apiOk = await testApiAccess();
  
  if (apiOk) {
    console.log('');
    console.log('🎉 PERMESSI GIÀ CONFIGURATI!');
    console.log('');
    console.log('✅ Puoi procedere con il popolamento contenuti:');
    console.log('   node scripts/populate-oracle-epa-content.js');
    console.log('');
  } else {
    console.log('');
    showPermissionsGuide();
  }
}

// Esegui script
if (require.main === module) {
  setupPermissions();
}

module.exports = { setupPermissions, testApiAccess };
