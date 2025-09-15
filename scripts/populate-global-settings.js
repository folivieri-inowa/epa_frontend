#!/usr/bin/env node

/**
 * Script per popolare Global Settings Oracle Executive Protection
 * Configura tutti i contenuti globali del sito (header, footer, contatti, etc.)
 */

// Configurazione
const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = null; // Useremo chiamate senza autenticazione per Global Settings

// Utility per chiamate API
async function apiCall(endpoint, method = 'GET', data = null, useAuth = true) {
  const url = `${STRAPI_URL}/api${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
  };

  if (useAuth && API_TOKEN) {
    headers['Authorization'] = `Bearer ${API_TOKEN}`;
  }

  const config = {
    method,
    headers,
  };

  if (data && (method === 'POST' || method === 'PUT')) {
    config.body = JSON.stringify(data);
  }

  try {
    console.log(`📡 ${method} ${url}`);
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ API Error (${response.status}):`, errorText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`❌ Request Error:`, error.message);
    return null;
  }
}

async function populateGlobalSettings() {
  console.log('\n🌐 Popolando Global Settings...');

  const globalData = {
    site_title: 'Oracle Executive Protection',
    site_description: 'Consulenza, analisi e formazione nel settore sicurezza. Protezione esecutiva e security management con oltre 30 anni di esperienza.',
    contact_email: 'info@oracleprotection.it',
    contact_phone: '+39 392 926 4907',
    contact_whatsapp: '+39 392 926 4907',
    contact_signal: '+39 392 926 4907',
    company_address: 'Italia',
    footer_description: 'Oracle Executive Protection offre servizi di consulenza specializzati nel settore della sicurezza e protezione esecutiva. Con oltre 30 anni di esperienza, forniamo soluzioni personalizzate per la gestione dei rischi e la protezione di persone e assets.',
    footer_copyright: '© 2025 Oracle Executive Protection. Tutti i diritti riservati.',
    navigation_menu_text: 'Menu',
    navigation_contact_text: 'Contatti',
    navigation_contact_button_text: 'Contattaci',
    business_hours: 'Disponibili 24/7 per emergenze',
    privacy_policy_url: '/privacy-policy',
    
    social_links: [
      {
        title: 'LinkedIn',
        url: 'https://linkedin.com/company/oracle-executive-protection',
        target: '_blank',
        icon: 'logos:linkedin-icon',
        order_position: 1,
        is_active: true
      },
      {
        title: 'Facebook',
        url: 'https://facebook.com/oracleexecutiveprotection',
        target: '_blank',
        icon: 'logos:facebook',
        order_position: 2,
        is_active: true
      },
      {
        title: 'Instagram',
        url: 'https://instagram.com/oracle_executive_protection',
        target: '_blank',
        icon: 'logos:instagram-icon',
        order_position: 3,
        is_active: true
      }
    ],

    footer_links: [
      {
        title: 'Privacy Policy',
        url: '/privacy-policy',
        target: '_self',
        order_position: 1,
        is_active: true
      },
      {
        title: 'Cookie Policy',
        url: '/cookie-policy',
        target: '_self',
        order_position: 2,
        is_active: true
      },
      {
        title: 'Termini e Condizioni',
        url: '/terms-conditions',
        target: '_self',
        order_position: 3,
        is_active: true
      }
    ],

    contact_info_cards: [
      {
        title: 'WhatsApp',
        value: '+39 392 926 4907',
        icon: 'logos:whatsapp-icon',
        href: 'https://wa.me/393929264907',
        color: '#25D366',
        order_position: 1
      },
      {
        title: 'Signal',
        value: '+39 392 926 4907',
        icon: 'simple-icons:signal',
        href: 'https://signal.me/#p/+393929264907',
        color: '#3A76F0',
        order_position: 2
      },
      {
        title: 'Email',
        value: 'info@oracleprotection.it',
        icon: 'solar:letter-bold',
        href: 'mailto:info@oracleprotection.it',
        color: '#1976d2',
        order_position: 3
      },
      {
        title: 'Orari',
        value: 'Disponibili 24/7 per emergenze',
        icon: 'solar:clock-circle-bold',
        color: '#ed6c02',
        order_position: 4
      }
    ]
  };

  // Verifica se esiste già
  const existing = await apiCall('/global-setting', 'GET', null, false);
  
  if (existing?.data) {
    console.log('⚠️  Global Settings già esistente, aggiorno...');
    const result = await apiCall('/global-setting', 'PUT', {
      data: globalData
    }, false);
    
    if (result) {
      console.log('✅ Global Settings aggiornato con successo');
    } else {
      console.log('❌ Errore aggiornando Global Settings');
    }
  } else {
    console.log('📝 Creando nuovo Global Settings...');
    const result = await apiCall('/global-setting', 'POST', {
      data: globalData
    }, false);
    
    if (result) {
      console.log('✅ Global Settings creato con successo');
    } else {
      console.log('❌ Errore creando Global Settings');
    }
  }
}

// Funzione principale
async function main() {
  console.log('🚀 Oracle Executive Protection - Setup Global Settings');
  console.log('================================================');

  try {
    // Verifica connessione
    console.log('\n🔍 Verificando connessione Strapi...');
    const healthCheck = await apiCall('/home-components?pagination[limit]=1', 'GET', null, false);
    
    if (!healthCheck) {
      console.error('❌ Impossibile connettersi a Strapi. Assicurati che sia in esecuzione.');
      process.exit(1);
    }
    
    console.log('✅ Connessione Strapi verificata con successo!');
    console.log('================================================');

    await populateGlobalSettings();

    console.log('\n🎉 Setup completato con successo!');
    console.log('================================================');
    console.log('🌐 Strapi Admin: http://localhost:1337/admin');
    console.log('📧 Email: f.olivieri@inowa.it');
    console.log('🔑 Password: Boban1988!');
    console.log('\n✨ Ora tutti i contenuti globali sono modificabili da Strapi!');

  } catch (error) {
    console.error('❌ Errore durante il setup:', error.message);
    process.exit(1);
  }
}

main();
