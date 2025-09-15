#!/usr/bin/env node

/**
 * Script per ottimizzare automaticamente le immagini del progetto
 * Usa sharp per comprimere e convertire le immagini in formati moderni
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// Configurazioni di ottimizzazione
const OPTIMIZATION_CONFIG = {
  // Formati di output
  formats: {
    webp: { quality: 80, effort: 4 },
    avif: { quality: 65, effort: 4 },
    jpg: { quality: 85, progressive: true },
    png: { quality: 90, compressionLevel: 9 },
  },
  
  // Breakpoints responsive
  breakpoints: [480, 768, 1024, 1440, 1920],
  
  // Tipi di immagine e loro configurazioni
  types: {
    hero: {
      maxWidth: 1920,
      quality: { webp: 85, avif: 70, jpg: 90 },
      formats: ['avif', 'webp', 'jpg'],
    },
    content: {
      maxWidth: 1200,
      quality: { webp: 75, avif: 60, jpg: 80 },
      formats: ['webp', 'jpg'],
    },
    thumbnail: {
      maxWidth: 400,
      quality: { webp: 60, avif: 50, jpg: 70 },
      formats: ['webp', 'jpg'],
    },
    logo: {
      maxWidth: 400,
      quality: { webp: 90, png: 95 },
      formats: ['webp', 'png'],
    },
  },
};

// Determina il tipo di immagine dal percorso
function getImageType(filePath) {
  const lowerPath = filePath.toLowerCase();
  
  if (lowerPath.includes('/logo/') || lowerPath.includes('/icons/')) {
    return 'logo';
  }
  if (lowerPath.includes('/thumb/') || lowerPath.includes('-thumb')) {
    return 'thumbnail';
  }
  if (lowerPath.includes('/hero/') || lowerPath.includes('-hero')) {
    return 'hero';
  }
  return 'content';
}

// Ottimizza una singola immagine
async function optimizeImage(inputPath, outputDir, type = 'content') {
  try {
    const config = OPTIMIZATION_CONFIG.types[type];
    const filename = path.basename(inputPath, path.extname(inputPath));
    const stats = await fs.stat(inputPath);
    
    console.log(`📸 Ottimizzando: ${inputPath} (${Math.round(stats.size / 1024)}KB)`);
    
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    let totalSaved = 0;
    const results = [];
    
    // Genera versioni ottimizzate per ogni formato
    for (const format of config.formats) {
      const quality = config.quality[format] || OPTIMIZATION_CONFIG.formats[format].quality;
      
      // Versione principale
      const outputPath = path.join(outputDir, `${filename}.${format}`);
      await generateOptimizedVersion(image, outputPath, format, quality, config.maxWidth);
      
      const outputStats = await fs.stat(outputPath);
      const saved = stats.size - outputStats.size;
      totalSaved += saved;
      
      results.push({
        format,
        size: outputStats.size,
        saved,
        path: outputPath,
      });
      
      // Versioni responsive (solo per formati web)
      if (['webp', 'avif', 'jpg'].includes(format)) {
        for (const width of OPTIMIZATION_CONFIG.breakpoints) {
          if (width < metadata.width && width <= config.maxWidth) {
            const responsivePath = path.join(outputDir, `${filename}-${width}w.${format}`);
            await generateOptimizedVersion(image, responsivePath, format, quality, width);
          }
        }
      }
    }
    
    console.log(`✅ Completato: ${filename}`);
    results.forEach(({ format, size, saved }) => {
      console.log(`   ${format}: ${Math.round(size / 1024)}KB (risparmiati ${Math.round(saved / 1024)}KB)`);
    });
    
    return { filename, totalSaved, results };
    
  } catch (error) {
    console.error(`❌ Errore ottimizzando ${inputPath}:`, error.message);
    return null;
  }
}

// Genera una versione ottimizzata
async function generateOptimizedVersion(image, outputPath, format, quality, maxWidth) {
  let pipeline = image.clone();
  
  // Ridimensiona se necessario
  if (maxWidth) {
    pipeline = pipeline.resize(maxWidth, null, {
      withoutEnlargement: true,
      fit: 'inside',
    });
  }
  
  // Applica il formato e la qualità
  switch (format) {
    case 'webp':
      pipeline = pipeline.webp({ 
        quality, 
        effort: OPTIMIZATION_CONFIG.formats.webp.effort 
      });
      break;
    case 'avif':
      pipeline = pipeline.avif({ 
        quality, 
        effort: OPTIMIZATION_CONFIG.formats.avif.effort 
      });
      break;
    case 'jpg':
    case 'jpeg':
      pipeline = pipeline.jpeg({ 
        quality, 
        progressive: OPTIMIZATION_CONFIG.formats.jpg.progressive 
      });
      break;
    case 'png':
      pipeline = pipeline.png({ 
        quality, 
        compressionLevel: OPTIMIZATION_CONFIG.formats.png.compressionLevel 
      });
      break;
  }
  
  await pipeline.toFile(outputPath);
}

// Scansiona una directory per immagini
async function scanDirectory(dir, extensions = ['.jpg', '.jpeg', '.png', '.webp']) {
  const images = [];
  
  try {
    const items = await fs.readdir(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        // Ricorsione nelle sottodirectory
        const subImages = await scanDirectory(fullPath, extensions);
        images.push(...subImages);
      } else if (item.isFile()) {
        const ext = path.extname(item.name).toLowerCase();
        if (extensions.includes(ext)) {
          images.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Errore scansionando ${dir}:`, error.message);
  }
  
  return images;
}

// Funzione principale
async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  const outputDir = path.join(publicDir, 'optimized');
  
  console.log('🎯 Oracle Executive Protection - Ottimizzatore Immagini');
  console.log(`📁 Directory pubblica: ${publicDir}`);
  console.log(`📁 Directory output: ${outputDir}`);
  
  // Crea la directory di output
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    console.error('Errore creando directory di output:', error.message);
    return;
  }
  
  // Scansiona le immagini
  console.log('\n🔍 Scansionando immagini...');
  const images = await scanDirectory(publicDir);
  const filteredImages = images.filter(img => !img.includes('/optimized/'));
  
  console.log(`📊 Trovate ${filteredImages.length} immagini da ottimizzare`);
  
  if (filteredImages.length === 0) {
    console.log('✨ Nessuna immagine da ottimizzare!');
    return;
  }
  
  // Ottimizza tutte le immagini
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  const results = [];
  
  for (const imagePath of filteredImages) {
    const type = getImageType(imagePath);
    const result = await optimizeImage(imagePath, outputDir, type);
    
    if (result) {
      results.push(result);
      const stats = await fs.stat(imagePath);
      totalOriginalSize += stats.size;
      totalOptimizedSize += result.results.reduce((sum, r) => sum + r.size, 0);
    }
  }
  
  // Statistiche finali
  const totalSaved = totalOriginalSize - totalOptimizedSize;
  const percentageSaved = ((totalSaved / totalOriginalSize) * 100).toFixed(1);
  
  console.log('\n📈 Statistiche Ottimizzazione:');
  console.log(`📊 Immagini ottimizzate: ${results.length}`);
  console.log(`💾 Dimensione originale: ${Math.round(totalOriginalSize / 1024 / 1024)}MB`);
  console.log(`✨ Dimensione ottimizzata: ${Math.round(totalOptimizedSize / 1024 / 1024)}MB`);
  console.log(`🎉 Risparmio totale: ${Math.round(totalSaved / 1024 / 1024)}MB (${percentageSaved}%)`);
  
  // Genera file di configurazione
  const configPath = path.join(outputDir, 'optimization-report.json');
  await fs.writeFile(configPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    totalImages: results.length,
    totalSaved,
    percentageSaved,
    results,
  }, null, 2));
  
  console.log(`📋 Report salvato in: ${configPath}`);
  console.log('\n✅ Ottimizzazione completata!');
}

// Esegui solo se chiamato direttamente
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  optimizeImage,
  scanDirectory,
  getImageType,
  OPTIMIZATION_CONFIG,
};
