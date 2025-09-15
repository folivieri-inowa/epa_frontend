#!/usr/bin/env node

/**
 * Script per popolamento automatico Global Settings Strapi
 * Popola tutti i campi con contenuti Oracle EPA reali
 */

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1338';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

// Contenuti Oracle EPA completi
const ORACLE_EPA_CONTENT = {
  // Informazioni base sito
  site_title: "Oracle Executive Protection",
  site_description: "Consulenza, analisi e formazione nel settore sicurezza, difesa e protezione fisica e tecnologica",
  
  // SEO Meta
  meta_title: "Oracle Executive Protection - Sicurezza d'Élite",
  meta_description: "Leader globale nella sicurezza esecutiva con oltre 30 anni di esperienza operativa d'élite. Protezione predittiva, preventiva, proattiva e multilivello.",
  meta_keywords: "sicurezza esecutiva, protezione VIP, security management, travel risk, luxury security, protezione strategica, Oracle EPA",
  
  // Navigation Menu
  navigation_items: [
    {
      label: "Home",
      url: "/",
      order: 1
    },
    {
      label: "Chi Siamo",
      url: "/chi-siamo",
      order: 2
    },
    {
      label: "Servizi",
      url: "#",
      order: 3,
      children: [
        {
          label: "Protezione Strategica",
          url: "/protezione-strategica",
          order: 1
        },
        {
          label: "Travel Risk Management",
          url: "/travel-risk-management",
          order: 2
        },
        {
          label: "Luxury Security",
          url: "/luxury-security",
          order: 3
        },
        {
          label: "Risk Travel",
          url: "/travel-risk",
          order: 4
        }
      ]
    },
    {
      label: "Il Team",
      url: "/il-team",
      order: 4
    },
    {
      label: "Eventi",
      url: "/eventi",
      order: 5
    },
    {
      label: "Eventi VIP",
      url: "/eventi-vip",
      order: 6
    },
    {
      label: "Contatti",
      url: "/contact-us",
      order: 7
    }
  ],

  // Footer
  footer_description: "Oracle Executive Protection rappresenta l'eccellenza nella sicurezza esecutiva. Con oltre tre decenni di esperienza operativa d'élite, forniamo soluzioni di protezione predittiva, preventiva, proattiva e multilivello per clienti che richiedono i più alti standard di sicurezza.",
  
  footer_sections: [
    {
      title: "Servizi",
      links: [
        { label: "Protezione Strategica", url: "/protezione-strategica" },
        { label: "Travel Risk Management", url: "/travel-risk-management" },
        { label: "Luxury Security", url: "/luxury-security" },
        { label: "Risk Travel", url: "/travel-risk" }
      ]
    },
    {
      title: "Azienda", 
      links: [
        { label: "Chi Siamo", url: "/chi-siamo" },
        { label: "Il Team", url: "/il-team" },
        { label: "Certificazioni", url: "/chi-siamo#certificazioni" }
      ]
    },
    {
      title: "Eventi",
      links: [
        { label: "Eventi Corporate", url: "/eventi" },
        { label: "Eventi VIP", url: "/eventi-vip" },
        { label: "Formazione", url: "/chi-siamo#formazione" }
      ]
    }
  ],

  // Informazioni contatto
  contact_email: "info@oracleprotection.it",
  contact_phone: "+39 02 1234 5678",
  contact_address: "Via della Sicurezza, 1\n20100 Milano, Italia",
  
  // Social media
  social_links: [
    {
      platform: "linkedin",
      url: "https://linkedin.com/company/oracle-epa",
      label: "LinkedIn"
    },
    {
      platform: "instagram", 
      url: "https://instagram.com/oracle_epa",
      label: "Instagram"
    },
    {
      platform: "youtube",
      url: "https://youtube.com/@oracle-epa",
      label: "YouTube"
    }
  ],

  // Informazioni legali
  company_name: "Oracle Executive Protection Agency S.r.l.",
  vat_number: "IT12345678901",
  fiscal_code: "12345678901",
  legal_address: "Via della Sicurezza, 1 - 20100 Milano (MI)",
  
  // Cookie e privacy
  privacy_policy_url: "/privacy-policy",
  cookie_policy_url: "/privacy-policy#cookies",
  terms_url: "/privacy-policy#terms",

  // Configurazioni tema
  theme_color: "#FFD700",
  primary_color: "#000000",
  secondary_color: "#FFD700",

  // Certificazioni
  certifications: [
    "ISO 27001 - Information Security Management",
    "ISO 28000 - Security Management Systems",
    "Certificazione Europea EN 15602",
    "Licenza Prefettura per Servizi di Sicurezza"
  ],

  // Homepage Hero Content
  hero_title: "ORACLE EXECUTIVE PROTECTION",
  hero_subtitle: "Sicurezza d'élite per un mondo complesso. Protezione predittiva, preventiva, proattiva e multilivello.",
  hero_description: "Leader globale nella sicurezza esecutiva con oltre 30 anni di esperienza operativa d'élite.",
  hero_cta_text: "Scopri i nostri servizi",
  hero_cta_link: "/chi-siamo",

  // About section
  about_title: "Chi Siamo",
  about_description: "Oracle Executive Protection rappresenta l'eccellenza nella sicurezza esecutiva. Fondata da professionisti con esperienza ultra-trentennale nei settori militare, intelligence e protezione civile, la nostra agenzia si distingue per l'approccio scientifico e tecnologicamente avanzato alla sicurezza.",
  
  // Services overview
  services_title: "I Nostri Servizi",
  services_description: "Offriamo soluzioni complete di sicurezza personalizzate per ogni esigenza, dalla protezione individuale alla gestione dei rischi aziendali.",

  // Contact form
  contact_form_title: "Contattaci",
  contact_form_description: "Richiedi una consulenza personalizzata per le tue esigenze di sicurezza. Il nostro team di esperti è pronto a fornirti soluzioni su misura.",

  // Newsletter
  newsletter_title: "Rimani Aggiornato",
  newsletter_description: "Iscriviti alla nostra newsletter per ricevere aggiornamenti su sicurezza, formazione e eventi esclusivi."
};

/**
 * Funzione per effettuare richieste API a Strapi
 */
async function strapiRequest(endpoint, options = {}) {
  const url = `${STRAPI_URL}/api${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(API_TOKEN && { 'Authorization': `Bearer ${API_TOKEN}` }),
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`❌ Errore API ${endpoint}:`, error.message);
    throw error;
  }
}

/**
 * Controlla se Global Settings esiste già
 */
async function checkExistingGlobalSettings() {
  try {
    const response = await strapiRequest('/global-setting');
    return response.data;
  } catch (error) {
    console.log('ℹ️  Global Settings non trovato, verrà creato nuovo');
    return null;
  }
}

/**
 * Crea nuovo Global Settings
 */
async function createGlobalSettings() {
  console.log('🚀 Creazione nuovo Global Settings...');
  
  const data = {
    data: ORACLE_EPA_CONTENT
  };

  try {
    const response = await strapiRequest('/global-setting', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    
    console.log('✅ Global Settings creato con successo!');
    return response.data;
  } catch (error) {
    console.error('❌ Errore nella creazione:', error.message);
    throw error;
  }
}

/**
 * Aggiorna Global Settings esistente
 */
async function updateGlobalSettings(id) {
  console.log(`🔄 Aggiornamento Global Settings (ID: ${id})...`);
  
  const data = {
    data: ORACLE_EPA_CONTENT
  };

  try {
    const response = await strapiRequest(`/global-setting/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
    
    console.log('✅ Global Settings aggiornato con successo!');
    return response.data;
  } catch (error) {
    console.error('❌ Errore nell\'aggiornamento:', error.message);
    throw error;
  }
}

/**
 * Verifica connessione Strapi
 */
async function checkStrapiConnection() {
  try {
    const response = await fetch(`${STRAPI_URL}/admin/init`);
    if (response.ok) {
      console.log('✅ Connessione Strapi verificata');
      return true;
    } else {
      console.log('⚠️  Strapi risponde ma potrebbe richiedere setup');
      return true; // Continuiamo comunque
    }
  } catch (error) {
    console.error('❌ Impossibile connettersi a Strapi:', error.message);
    console.log('🔧 Assicurati che Strapi sia in esecuzione su:', STRAPI_URL);
    return false;
  }
}

/**
 * Main function
 */
async function populateGlobalSettings() {
  console.log('🎯 Oracle EPA - Content Population Script');
  console.log('=' .repeat(50));
  
  // Verifica connessione
  console.log('🔍 Verifica connessione Strapi...');
  const isConnected = await checkStrapiConnection();
  if (!isConnected) {
    process.exit(1);
  }

  try {
    // Controlla se esiste già
    console.log('🔍 Controllo Global Settings esistenti...');
    const existing = await checkExistingGlobalSettings();
    
    let result;
    if (existing && existing.id) {
      // Aggiorna esistente
      result = await updateGlobalSettings(existing.id);
    } else {
      // Crea nuovo
      result = await createGlobalSettings();
    }

    console.log('🎉 Popolamento completato!');
    console.log('📋 Riepilogo:');
    console.log(`   - Site Title: ${result.attributes?.site_title || 'Non impostato'}`);
    console.log(`   - Contact Email: ${result.attributes?.contact_email || 'Non impostato'}`);
    console.log(`   - Navigation Items: ${result.attributes?.navigation_items?.length || 0} elementi`);
    console.log(`   - Footer Sections: ${result.attributes?.footer_sections?.length || 0} sezioni`);
    console.log(`   - Social Links: ${result.attributes?.social_links?.length || 0} piattaforme`);
    
    console.log('\n🌐 Accesso Strapi Admin:');
    console.log(`   ${STRAPI_URL.replace(':1338', ':1338/admin')}`);
    
    console.log('\n📝 Prossimi passi:');
    console.log('   1. Accedi al pannello admin Strapi');
    console.log('   2. Vai a Content Manager > Global Setting'); 
    console.log('   3. Carica le immagini nei campi media');
    console.log('   4. Pubblica il contenuto');
    console.log('   5. Testa il frontend');

  } catch (error) {
    console.error('💥 Errore durante il popolamento:', error.message);
    
    if (error.message.includes('403')) {
      console.log('\n🔑 Errore permessi! Soluzioni:');
      console.log('   1. Vai su Strapi Admin > Settings > Roles');
      console.log('   2. Seleziona "Public" role');
      console.log('   3. Abilita permissions per Global-setting: Create, Read, Update');
      console.log('   4. Riavvia questo script');
    }
    
    process.exit(1);
  }
}

// Esegui script
if (require.main === module) {
  populateGlobalSettings();
}

module.exports = {
  populateGlobalSettings,
  ORACLE_EPA_CONTENT
};
