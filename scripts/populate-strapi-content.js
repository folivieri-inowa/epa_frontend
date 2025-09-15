#!/usr/bin/env node

/**
 * Script per popolare contenuti iniziali Oracle Executive Protection
 * Usa fetch nativo (Node.js 18+) per evitare dipendenze esterne
 */

// Verifica versione Node.js
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 18) {
  console.error('❌ Questo script richiede Node.js 18+ per usare fetch nativo');
  console.error(`Versione corrente: ${nodeVersion}`);
  process.exit(1);
}

// Configurazione
const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = '5a403a532069b3835d3f40009cb707dad2c3c7421a44f4fc7e1a8333eaf28a36358ffd961ae737a66c097de27f91f9235204bf1e40ceccdebeefc531bac7efbd852149085436c5e48958fc783f200ea755f074e284da42e94aa0ee5b94ddb8552f6baaf180714efbf0d562221e28eb3645514ab97524490003b0e1ad522c2a28';

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
    console.error(`❌ Network Error:`, error.message);
    return null;
  }
}

// Verifica connessione Strapi
async function checkStrapiConnection() {
  console.log('🔍 Verificando connessione Strapi...');
  
  // Test connessione base
  try {
    const response = await fetch(`${STRAPI_URL}/admin`);
    if (response.ok) {
      console.log('✅ Strapi Admin raggiungibile');
    } else {
      throw new Error(`Admin non raggiungibile: ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Errore connessione Strapi:', error.message);
    return false;
  }

  // Test API Token
  if (!API_TOKEN) {
    console.error('❌ API Token non configurato in .env.local');
    return false;
  }

  const testResponse = await apiCall('/pages');
  if (testResponse === null) {
    console.error('❌ API Token non valido o errore API');
    return false;
  }

  console.log('✅ API Token valido e funzionante');
  return true;
}

// Contenuti iniziali per le pagine
const INITIAL_PAGES = {
  home: {
    slug: 'home',
    title: 'Oracle Executive Protection - Homepage',
    metaTitle: 'Oracle Executive Protection - Sicurezza e Protezione Esecutiva',
    metaDescription: 'Consulenza, analisi e formazione nel settore sicurezza, difesa e protezione fisica e tecnologica. Servizi professionali per executive protection.',
    content: {
      hero: {
        title: 'Oracle Executive Protection',
        subtitle: 'Consulenza, analisi e formazione nel settore sicurezza, difesa e protezione fisica e tecnologica',
        backgroundImage: '/assets/images/hero-bg.jpg',
        ctaText: 'Scopri i nostri servizi',
        ctaLink: '#services'
      },
      services: [
        {
          title: 'Travel Risk Assessment',
          description: 'Analisi e valutazione dei rischi per viaggi di business e personali',
          icon: '✈️',
          link: '/travel-risk'
        },
        {
          title: 'Protezione Strategica',
          description: 'Servizi di protezione per dirigenti e figure di alto profilo',
          icon: '🛡️',
          link: '/protezione-strategica'
        },
        {
          title: 'Luxury Security',
          description: 'Sicurezza per eventi esclusivi e clientela VIP',
          icon: '💎',
          link: '/luxury-security'
        }
      ]
    },
    publishedAt: new Date().toISOString(),
  },

  'chi-siamo': {
    slug: 'chi-siamo',
    title: 'Chi Siamo - Oracle Executive Protection',
    metaTitle: 'Chi Siamo - Oracle Executive Protection',
    metaDescription: 'Scopri la storia e i valori di Oracle Executive Protection, leader nel settore della sicurezza e protezione esecutiva.',
    content: {
      hero: {
        title: 'Chi Siamo',
        subtitle: 'Esperienza, professionalità e innovazione al servizio della vostra sicurezza',
        backgroundImage: '/assets/images/about-hero.jpg'
      },
      about: {
        mission: 'Oracle Executive Protection è un\'azienda specializzata in consulenza, analisi e formazione nel settore sicurezza, difesa e protezione fisica e tecnologica.',
        vision: 'Essere il partner di riferimento per la sicurezza di persone e aziende attraverso soluzioni innovative e personalizzate.',
        values: [
          'Professionalità e competenza',
          'Riservatezza assoluta',
          'Innovazione tecnologica',
          'Approccio personalizzato'
        ]
      }
    },
    publishedAt: new Date().toISOString(),
  },

  'travel-risk': {
    slug: 'travel-risk',
    title: 'Travel Risk Assessment - Oracle Executive Protection',
    metaTitle: 'Travel Risk Assessment - Valutazione Rischi di Viaggio',
    metaDescription: 'Servizi professionali di valutazione e gestione dei rischi per viaggi di business. Analisi dettagliata e supporto operativo.',
    content: {
      hero: {
        title: 'Travel Risk Assessment',
        subtitle: 'Analisi completa dei rischi per i vostri viaggi di business',
        backgroundImage: '/assets/images/travel-hero.jpg'
      },
      services: [
        'Analisi geopolitica delle destinazioni',
        'Valutazione rischi sicurezza locale',
        'Briefing pre-viaggio personalizzati',
        'Supporto operativo 24/7',
        'Protocolli di emergenza'
      ]
    },
    publishedAt: new Date().toISOString(),
  },

  'protezione-strategica': {
    slug: 'protezione-strategica',
    title: 'Protezione Strategica - Oracle Executive Protection',
    metaTitle: 'Protezione Strategica per Dirigenti ed Esecutivi',
    metaDescription: 'Servizi di protezione personalizzati per dirigenti, CEO e figure di alto profilo. Sicurezza discreta e professionale.',
    content: {
      hero: {
        title: 'Protezione Strategica',
        subtitle: 'Sicurezza discreta e professionale per dirigenti ed esecutivi',
        backgroundImage: '/assets/images/strategic-hero.jpg'
      },
      services: [
        'Executive Protection personalizzato',
        'Valutazione rischi aziendali',
        'Sicurezza residenziale',
        'Protezione eventi corporate',
        'Formazione security awareness'
      ]
    },
    publishedAt: new Date().toISOString(),
  },

  eventi: {
    slug: 'eventi',
    title: 'Eventi - Oracle Executive Protection',
    metaTitle: 'Sicurezza per Eventi Corporate e Istituzionali',
    metaDescription: 'Servizi di sicurezza per eventi aziendali, conferenze, meeting e manifestazioni. Pianificazione e gestione professionale.',
    content: {
      hero: {
        title: 'Sicurezza Eventi',
        subtitle: 'Gestione professionale della sicurezza per ogni tipo di evento',
        backgroundImage: '/assets/images/events-hero.jpg'
      },
      services: [
        'Pianificazione sicurezza eventi',
        'Gestione accessi e controlli',
        'Coordinamento forze dell\'ordine',
        'Sicurezza VIP e ospiti speciali',
        'Protocolli di emergenza'
      ]
    },
    publishedAt: new Date().toISOString(),
  },

  'luxury-security': {
    slug: 'luxury-security',
    title: 'Luxury Security - Oracle Executive Protection',
    metaTitle: 'Luxury Security - Sicurezza VIP e Servizi Esclusivi',
    metaDescription: 'Servizi di sicurezza esclusivi per clientela VIP, eventi luxury e protezione di alto livello. Discrezione e professionalità.',
    content: {
      hero: {
        title: 'Luxury Security',
        subtitle: 'Servizi esclusivi per una clientela selezionata',
        backgroundImage: '/assets/images/luxury-hero.jpg'
      },
      services: [
        'Protezione VIP discreta',
        'Sicurezza yacht e residenze luxury',
        'Eventi esclusivi e gala',
        'Scorte personalizzate',
        'Consulenza privacy e sicurezza'
      ]
    },
    publishedAt: new Date().toISOString(),
  },

  contatti: {
    slug: 'contatti',
    title: 'Contatti - Oracle Executive Protection',
    metaTitle: 'Contatti - Oracle Executive Protection',
    metaDescription: 'Contattaci per richiedere informazioni sui nostri servizi di sicurezza e protezione. Consulenza gratuita e preventivi personalizzati.',
    content: {
      hero: {
        title: 'Contattaci',
        subtitle: 'Siamo qui per rispondere alle tue esigenze di sicurezza',
        backgroundImage: '/assets/images/contact-hero.jpg'
      },
      contact: {
        email: 'info@oracleprotection.it',
        phone: '+39 02 1234567',
        address: 'Via Roma 123, 20121 Milano, Italia',
        hours: 'Lunedì - Venerdì: 9:00 - 18:00\nEmergenze: 24/7'
      }
    },
    publishedAt: new Date().toISOString(),
  }
};

// Popola le pagine
async function populatePages() {
  console.log('📄 Popolando le pagine...');
  
  for (const [pageKey, pageData] of Object.entries(INITIAL_PAGES)) {
    console.log(`\n📝 Creando pagina: ${pageKey}`);
    
    // Mappa i dati secondo lo schema di Strapi
    const strapiData = {
      title: pageData.title,
      slug: pageData.slug,
      description: pageData.description || pageData.content?.about?.mission || 'Descrizione della pagina',
      meta_title: pageData.metaTitle,
      meta_description: pageData.metaDescription,
      meta_keywords: pageData.metaKeywords
    };
    
    // Verifica se la pagina esiste già
    const existingPages = await apiCall(`/pages?filters[slug][$eq]=${pageData.slug}`);
    
    if (existingPages && existingPages.data && existingPages.data.length > 0) {
      console.log(`⚠️  Pagina ${pageKey} già esistente, aggiorno...`);
      const pageId = existingPages.data[0].id;
      
      const updateResult = await apiCall(`/pages/${pageId}`, 'PUT', {
        data: strapiData
      });
      
      if (updateResult) {
        console.log(`✅ Pagina ${pageKey} aggiornata con successo`);
      } else {
        console.log(`❌ Errore aggiornando pagina ${pageKey}`);
      }
    } else {
      console.log(`➕ Creando nuova pagina ${pageKey}...`);
      
      const createResult = await apiCall('/pages', 'POST', {
        data: strapiData
      });
      
      if (createResult) {
        console.log(`✅ Pagina ${pageKey} creata con successo`);
      } else {
        console.log(`❌ Errore creando pagina ${pageKey}`);
      }
    }
    
    // Piccola pausa tra le richieste
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

// Popola gli home components
async function populateHomeComponents() {
  console.log('\n🏠 Popolando componenti homepage...');
  
  const homeComponents = [
    {
      component_type: 'home_hero',
      title: 'Oracle Executive Protection',
      subtitle: 'Consulenza, analisi e formazione nel settore sicurezza',
      cta_text: 'Scopri di più',
      cta_link: '#about',
      order_position: 1,
      is_visible: true
    },
    {
      component_type: 'home_about',
      title: 'I Nostri Servizi',
      description: 'Oracle Executive Protection offre servizi specializzati nel settore della sicurezza e protezione esecutiva.',
      order_position: 2,
      is_visible: true
    },
    {
      component_type: 'home_pillars',
      title: 'I Nostri Valori',
      description: 'Scopri i pilastri che guidano il nostro approccio alla sicurezza',
      pillars: [
        {
          title: 'Professionalità',
          description: 'Approccio metodico e competenze certificate nel settore sicurezza',
          icon: 'shield-check',
          order_position: 1
        },
        {
          title: 'Discrezione',
          description: 'Massima riservatezza in ogni intervento e consulenza',
          icon: 'eye-slash',
          order_position: 2
        },
        {
          title: 'Affidabilità',
          description: 'Partner di fiducia per la vostra protezione e sicurezza',
          icon: 'handshake',
          order_position: 3
        },
        {
          title: 'Innovazione',
          description: 'Utilizzo delle più moderne tecnologie e metodologie',
          icon: 'lightbulb',
          order_position: 4
        }
      ],
      order_position: 3,
      is_visible: true
    },
    {
      component_type: 'home_split_section',
      title: 'Consulenza Specializzata',
      subtitle: 'Esperienza e competenza al vostro servizio',
      description: 'Oracle Executive Protection fornisce consulenza strategica nel settore della sicurezza, combinando esperienza operativa e conoscenze tecniche avanzate per offrire soluzioni personalizzate.',
      features: [
        {
          title: 'Analisi dei rischi personalizzata',
          description: 'Valutazione completa delle minacce specifiche',
          icon: 'search'
        },
        {
          title: 'Formazione specializzata',
          description: 'Corsi di formazione per il personale di sicurezza',
          icon: 'graduation-cap'
        },
        {
          title: 'Consulenza strategica',
          description: 'Pianificazione e sviluppo di strategie di sicurezza',
          icon: 'strategy'
        },
        {
          title: 'Supporto operativo',
          description: 'Assistenza continua nelle operazioni di sicurezza',
          icon: 'support'
        }
      ],
      cta_text: 'Richiedi Consulenza',
      cta_link: '/contact-us',
      order_position: 4,
      is_visible: true
    },
    {
      component_type: 'home_separator_banner',
      title: 'Certificazioni e Conformità',
      description: 'Oracle Executive Protection è certificata secondo gli standard internazionali più rigorosi',
      order_position: 5,
      is_visible: true
    },
    {
      component_type: 'home_contact',
      title: 'Contattaci',
      description: 'Siamo qui per rispondere alle vostre domande e fornire consulenza personalizzata',
      cta_text: 'Invia Messaggio',
      cta_link: '/contact-us',
      order_position: 6,
      is_visible: true
    },
    {
      component_type: 'home_standards',
      title: 'Standard e Certificazioni',
      description: 'Operiamo secondo i più elevati standard di sicurezza internazionali',
      standards: [
        {
          title: 'ISO 27001',
          description: 'Gestione della sicurezza delle informazioni',
          organization: 'International Organization for Standardization',
          certification_code: 'ISO/IEC 27001:2013',
          icon: 'certificate'
        },
        {
          title: 'ISO 28000',
          description: 'Standard per la gestione della sicurezza nella supply chain',
          organization: 'International Organization for Standardization',
          certification_code: 'ISO 28000:2007',
          icon: 'shield'
        },
        {
          title: 'Certificazione 31000',
          description: 'Gestione del rischio secondo standard internazionali',
          organization: 'International Organization for Standardization',
          certification_code: 'ISO 31000:2018',
          icon: 'risk-management'
        }
      ],
      order_position: 7,
      is_visible: true
    }
  ];

  for (const component of homeComponents) {
    console.log(`🧩 Creando componente: ${component.component_type}`);
    
    const result = await apiCall('/home-components', 'POST', {
      data: component
    });
    
    if (result) {
      console.log(`✅ Componente ${component.component_type} creato con successo`);
    } else {
      console.log(`❌ Errore creando componente ${component.component_type}`);
    }
    
    await new Promise(resolve => setTimeout(resolve, 300));
  }
}

// Funzione principale
async function main() {
  console.log('🚀 Oracle Executive Protection - Setup Contenuti Strapi');
  console.log('================================================\n');
  
  // 1. Verifica connessione
  const isConnected = await checkStrapiConnection();
  if (!isConnected) {
    console.log('\n❌ Setup interrotto a causa di errori di connessione');
    process.exit(1);
  }
  
  console.log('\n✅ Connessione Strapi verificata con successo!');
  console.log('================================================\n');
  
  // 2. Popola le pagine
  await populatePages();
  
  // 3. Popola i componenti home
  await populateHomeComponents();
  
  console.log('\n🎉 Setup completato con successo!');
  console.log('================================================');
  console.log('📊 Riepilogo:');
  console.log(`📄 Pagine create/aggiornate: ${Object.keys(INITIAL_PAGES).length}`);
  console.log('🧩 Componenti homepage: 2');
  console.log('\n🌐 Strapi Admin: http://localhost:1337/admin');
  console.log('📧 Email: f.olivieri@inowa.it');
  console.log('🔑 Password: Boban1988!');
  console.log('\n✨ Ora puoi utilizzare i contenuti nel frontend!');
}

// Gestione errori
process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

// Esegui solo se chiamato direttamente
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  checkStrapiConnection,
  populatePages,
  populateHomeComponents,
  INITIAL_PAGES,
};
