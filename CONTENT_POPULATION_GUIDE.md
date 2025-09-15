# 📝 Content Population Guide - Oracle EPA

**Data:** 15 Settembre 2025  
**Obiettivo:** Popolamento completo contenuti Oracle EPA in Strapi  

## 🎯 **Panoramica**

Questa guida ti permette di completare il content population per trasformare il sito da contenuti statici a completamente dinamici gestiti da Strapi.

## 📋 **Prerequisiti**

### ✅ **Server in Esecuzione**
```bash
# Strapi Backend (Terminale 1)
cd strapi_backend
npm run develop
# Dovrebbe essere attivo su http://localhost:1338

# Next.js Frontend (Terminale 2) 
cd epa
npm run dev
# Dovrebbe essere attivo su http://localhost:3032
```

### ✅ **Branch Corretti**
- **Frontend:** `feature/strapi-cms-complete-integration`
- **Backend:** `feature/global-settings-image-management`

## 🚀 **Procedura Content Population**

### **Step 1: Configurazione Permessi Strapi**

Esegui lo script di setup permessi:

```bash
cd epa
node scripts/setup-strapi-permissions.js
```

**Se i permessi NON sono configurati**, segui la guida mostrata:

1. **Apri Strapi Admin:** http://localhost:1338/admin
2. **Login:** Usa le credenziali admin create durante il setup
3. **Vai a:** Settings > Roles
4. **Seleziona:** "Public" role
5. **Abilita Permissions:**
   - **Global-setting:** ✅ find, ✅ findOne
   - **Home-component:** ✅ find, ✅ findOne
6. **Salva** le modifiche

### **Step 2: Popolamento Automatico Contenuti**

Una volta configurati i permessi, esegui:

```bash
cd epa
node scripts/populate-oracle-epa-content.js
```

**Questo script popolerà automaticamente:**
- ✅ **Site Settings:** Titolo, descrizione, SEO
- ✅ **Navigation:** Menu principale con tutti i link
- ✅ **Footer:** Sezioni, link, informazioni legali
- ✅ **Contact Info:** Email, telefono, indirizzo
- ✅ **Social Links:** LinkedIn, Instagram, YouTube
- ✅ **Hero Content:** Titoli, sottotitoli, CTA
- ✅ **About Content:** Descrizioni, servizi
- ✅ **Legal Info:** Privacy, cookie policy, termini

### **Step 3: Upload Immagini**

Accedi a **Strapi Admin** > **Content Manager** > **Global Setting**:

#### 🖼️ **Immagini da Caricare:**

1. **Site Logo** (`site_logo`)
   - Logo Oracle EPA versione scura
   - Formato: PNG/SVG preferibili
   - Dimensioni: 200x60px circa

2. **Site Logo White** (`site_logo_white`)
   - Logo Oracle EPA versione bianca
   - Per sfondi scuri
   - Stesso formato del logo principale

3. **Site Favicon** (`site_favicon`)
   - Icona sito 32x32px o 64x64px
   - Formato: ICO, PNG
   - Versione piccola del logo

4. **Hero Background Image** (`hero_background_image`)
   - Immagine hero homepage
   - Dimensioni: 1920x1080px min
   - Tema: Sicurezza, protezione, eleganza

5. **About Image** (`about_image`)
   - Immagine sezione "Chi Siamo"
   - Dimensioni: 800x600px circa
   - Tema: Team, uffici, professionalità

6. **Team Image** (`team_image`)
   - Immagine pagina team
   - Dimensioni: 1200x800px circa
   - Foto di gruppo o ambiente di lavoro

7. **Default OG Image** (`default_og_image`)
   - Immagine social sharing
   - Dimensioni: 1200x630px (Facebook/LinkedIn)
   - Logo + tagline Oracle EPA

### **Step 4: Pubblicazione Contenuti**

1. **Verifica** tutti i campi compilati
2. **Salva** le modifiche
3. **Pubblica** il contenuto (se richiesto)

### **Step 5: Test Frontend**

Visita il frontend: http://localhost:3032

**Verifica che sia tutto dinamico:**
- ✅ **Header:** Logo e navigation da Strapi
- ✅ **Homepage:** Hero content da Strapi
- ✅ **Footer:** Link e informazioni da Strapi
- ✅ **Favicon:** Icona personalizzata
- ✅ **Metadati:** Titoli e descrizioni SEO

## 🧪 **Script di Test Disponibili**

### **Test Connessione API**
```bash
node scripts/setup-strapi-permissions.js
```

### **Test Specifici Componenti**
```bash
# Test homepage components
node scripts/test-home-components.js

# Test Global Settings
curl http://localhost:1338/api/global-setting
```

### **Re-populate Content (se necessario)**
```bash
# Ri-esegue il popolamento (aggiorna contenuti esistenti)
node scripts/populate-oracle-epa-content.js
```

## 📊 **Contenuti Inclusi nel Population**

### **📱 Navigation Menu**
```
- Home (/)
- Chi Siamo (/chi-siamo)
- Servizi
  └─ Protezione Strategica (/protezione-strategica)
  └─ Travel Risk Management (/travel-risk-management)  
  └─ Luxury Security (/luxury-security)
  └─ Risk Travel (/travel-risk)
- Il Team (/il-team)
- Eventi (/eventi)
- Eventi VIP (/eventi-vip)
- Contatti (/contact-us)
```

### **🦶 Footer Sections**
```
Servizi:
- Protezione Strategica
- Travel Risk Management
- Luxury Security  
- Risk Travel

Azienda:
- Chi Siamo
- Il Team
- Certificazioni

Eventi:
- Eventi Corporate
- Eventi VIP
- Formazione
```

### **📞 Contact Information**
```
Email: info@oracleprotection.it
Phone: +39 02 1234 5678
Address: Via della Sicurezza, 1
         20100 Milano, Italia
```

### **🌐 Social Links**
```
- LinkedIn: linkedin.com/company/oracle-epa
- Instagram: instagram.com/oracle_epa
- YouTube: youtube.com/@oracle-epa
```

## ⚠️ **Troubleshooting**

### **Errore 403 Forbidden**
- Verifica permessi Strapi Admin
- Ricontrolla configurazione Public role
- Riavvia Strapi se necessario

### **Errore Connessione**
- Verifica che Strapi sia su porta 1338
- Controlla che Next.js sia su porta 3032
- Verifica firewall/antivirus

### **Immagini non Caricate**
- Formati supportati: JPG, PNG, SVG, WebP
- Dimensioni massime rispettate
- Connessione stabile durante upload

### **Contenuti non Visibili**
- Controlla cache browser (Ctrl+F5)
- Verifica che contenuto sia "Pubblicato"
- Riavvia Next.js dev server

## 🎉 **Completamento**

Al termine del content population:

✅ **Sito Completamente Dinamico**
- Tutti i testi gestibili da Strapi
- Tutte le immagini caricabili dall'admin
- Navigation e footer completamente configurabili
- SEO e metadati dinamici

✅ **Pronto per Produzione**
- Sistema fallback robusto
- Performance ottimizzate
- Documentazione completa

---

**🚀 Con questa procedura, Oracle EPA passa da sito statico a CMS completo in ~30 minuti!**

**Support:** In caso di problemi, consulta `TEST_REPORT.md` o `IMAGE_MANAGEMENT_GUIDE.md`
