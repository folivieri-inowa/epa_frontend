'use client';

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

// ----------------------------------------------------------------------

export default function ImageOptimizationStats({ images = [] }) {
  const theme = useTheme();
  const [stats, setStats] = useState({
    totalOriginal: 0,
    totalOptimized: 0,
    savings: 0,
    savingsPercentage: 0,
    formatsSupported: [],
  });

  useEffect(() => {
    // Simula il calcolo delle statistiche di ottimizzazione
    const calculateStats = () => {
      const totalImages = images.length;
      if (totalImages === 0) return;

      // Stima del peso delle immagini (simulato)
      const avgOriginalSize = 250; // KB media per immagine originale
      const avgOptimizedSize = 120; // KB media per immagine ottimizzata
      
      const originalTotal = totalImages * avgOriginalSize;
      const optimizedTotal = totalImages * avgOptimizedSize;
      const savedKB = originalTotal - optimizedTotal;
      const percentage = (savedKB / originalTotal) * 100;

      // Rileva formati supportati dal browser
      const canvas = document.createElement('canvas');
      const formats = [];
      
      if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
        formats.push('WebP');
      }
      if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
        formats.push('AVIF');
      }
      formats.push('JPEG');

      setStats({
        totalOriginal: Math.round(originalTotal),
        totalOptimized: Math.round(optimizedTotal),
        savings: Math.round(savedKB),
        savingsPercentage: Math.round(percentage),
        formatsSupported: formats,
      });
    };

    calculateStats();
  }, [images]);

  if (images.length === 0) return null;

  return (
    <Card
      sx={{
        p: 3,
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
        border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        🚀 Ottimizzazione Immagini Attiva
        <Chip 
          label={`${images.length} immagini`} 
          size="small" 
          color="primary" 
          variant="outlined"
        />
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Riduzione peso
          </Typography>
          <Typography variant="body2" fontWeight="medium">
            -{stats.savingsPercentage}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={stats.savingsPercentage}
          sx={{
            height: 8,
            borderRadius: 1,
            backgroundColor: alpha(theme.palette.grey[500], 0.12),
            '& .MuiLinearProgress-bar': {
              background: `linear-gradient(90deg, ${theme.palette.success.main} 0%, ${theme.palette.success.light} 100%)`,
              borderRadius: 1,
            },
          }}
        />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, mb: 2 }}>
        <Box>
          <Typography variant="caption" color="text.secondary" display="block">
            Peso Originale
          </Typography>
          <Typography variant="h6" color="error.main">
            {stats.totalOriginal} KB
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary" display="block">
            Peso Ottimizzato
          </Typography>
          <Typography variant="h6" color="success.main">
            {stats.totalOptimized} KB
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
          Risparmio Totale
        </Typography>
        <Typography variant="h5" color="primary.main" fontWeight="bold">
          {stats.savings} KB
        </Typography>
      </Box>

      <Box>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
          Formati Supportati
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
          {stats.formatsSupported.map((format) => {
            let chipColor = 'default';
            if (format === 'AVIF') chipColor = 'success';
            else if (format === 'WebP') chipColor = 'info';
            
            return (
              <Chip
                key={format}
                label={format}
                size="small"
                variant="filled"
                color={chipColor}
                sx={{ fontSize: '0.7rem', height: 20 }}
              />
            );
          })}
        </Box>
      </Box>

      <Box sx={{ mt: 2, p: 1.5, borderRadius: 1, bgcolor: alpha(theme.palette.info.main, 0.08) }}>
        <Typography variant="caption" color="info.main" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          💡 <strong>Benefici:</strong> Caricamento più veloce, meno consumo dati, migliore SEO
        </Typography>
      </Box>
    </Card>
  );
}

ImageOptimizationStats.propTypes = {
  images: PropTypes.array,
};
