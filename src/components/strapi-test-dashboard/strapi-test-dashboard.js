'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import { alpha, useTheme } from '@mui/material/styles';

import { 
  useStrapiConnection, 
  useStrapiPage, 
  useStrapiHome,
  clearStrapiCache 
} from '../../hooks/use-strapi';

// ----------------------------------------------------------------------

export default function StrapiTestDashboard() {
  const theme = useTheme();
  const [testResults, setTestResults] = useState({});
  
  const { isConnected, lastCheck, checkConnection } = useStrapiConnection();
  const { data: homePage, loading: homeLoading, error: homeError } = useStrapiPage('home');
  const { data: homeComponents, loading: componentsLoading, error: componentsError } = useStrapiHome();

  const runTests = async () => {
    setTestResults({});
    
    const tests = [
      {
        name: 'Connessione Base',
        test: async () => {
          await checkConnection();
          return isConnected;
        }
      },
      {
        name: 'API Token Valido',
        test: async () => {
          const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
          return !!token && token !== '';
        }
      },
      {
        name: 'Content Types Disponibili',
        test: async () => {
          const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/page-contents?pagination[limit]=1`);
          return response.ok;
        }
      },
      {
        name: 'Pagina Home',
        test: async () => {
          return !homeError && (homePage !== null || homeLoading);
        }
      },
      {
        name: 'Componenti Home',
        test: async () => {
          return !componentsError && (Array.isArray(homeComponents) || componentsLoading);
        }
      },
    ];

    const results = {};
    for (const test of tests) {
      try {
        results[test.name] = {
          success: await test.test(),
          error: null,
        };
      } catch (error) {
        results[test.name] = {
          success: false,
          error: error.message,
        };
      }
    }
    
    setTestResults(results);
  };

  const handleClearCache = () => {
    clearStrapiCache();
    setTestResults({});
    window.location.reload();
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        🔧 Strapi Test Dashboard
        <Chip 
          label={isConnected ? 'Connesso' : 'Disconnesso'} 
          color={isConnected ? 'success' : 'error'}
          size="small"
        />
      </Typography>

      {/* Stato Connessione */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Stato Connessione
          </Typography>
          
          <Alert severity={isConnected ? 'success' : 'error'} sx={{ mb: 2 }}>
            {isConnected ? '✅ Strapi è raggiungibile' : '❌ Strapi non raggiungibile'}
          </Alert>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Typography variant="body2">
              <strong>URL:</strong> {process.env.NEXT_PUBLIC_STRAPI_URL}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Typography variant="body2">
              <strong>Token:</strong> {process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ? '🟢 Configurato' : '🔴 Mancante'}
            </Typography>
          </Box>
          
          {lastCheck && (
            <Typography variant="caption" color="text.secondary">
              Ultimo controllo: {lastCheck.toLocaleTimeString()}
            </Typography>
          )}
        </CardContent>
      </Card>

      {/* Test Automatici */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">
              Test Automatici
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button variant="outlined" onClick={runTests}>
                Esegui Test
              </Button>
              <Button variant="outlined" color="warning" onClick={handleClearCache}>
                Pulisci Cache
              </Button>
            </Box>
          </Box>

          {Object.keys(testResults).length > 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {Object.entries(testResults).map(([testName, result]) => (
                <Box
                  key={testName}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1,
                    borderRadius: 1,
                    bgcolor: result.success 
                      ? alpha(theme.palette.success.main, 0.1)
                      : alpha(theme.palette.error.main, 0.1),
                  }}
                >
                  <Typography variant="body2">
                    {testName}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {result.error && (
                      <Typography variant="caption" color="error" sx={{ maxWidth: 200, wordBreak: 'break-word' }}>
                        {result.error}
                      </Typography>
                    )}
                    <Chip 
                      label={result.success ? 'OK' : 'ERRORE'} 
                      color={result.success ? 'success' : 'error'}
                      size="small"
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Dati di Test */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
        {/* Pagina Home */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Pagina Home
            </Typography>
            
            {homeLoading && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CircularProgress size={16} />
                <Typography variant="body2">Caricamento...</Typography>
              </Box>
            )}
            
            {homeError && (
              <Alert severity="error" size="small">
                {homeError.message}
              </Alert>
            )}
            
            {homePage && (
              <Box>
                <Typography variant="body2">
                  <strong>Titolo:</strong> {homePage.title}
                </Typography>
                <Typography variant="body2">
                  <strong>Slug:</strong> {homePage.slug}
                </Typography>
                <Typography variant="body2">
                  <strong>Pubblicato:</strong> {homePage.isPublished ? '✅' : '❌'}
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>

        {/* Componenti Home */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Componenti Home
            </Typography>
            
            {componentsLoading && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CircularProgress size={16} />
                <Typography variant="body2">Caricamento...</Typography>
              </Box>
            )}
            
            {componentsError && (
              <Alert severity="error" size="small">
                {componentsError.message}
              </Alert>
            )}
            
            {homeComponents && (
              <Box>
                <Typography variant="body2" gutterBottom>
                  <strong>Componenti trovati:</strong> {homeComponents.length}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {homeComponents.map((component, index) => (
                    <Chip 
                      key={index}
                      label={component.componentType || `Comp. ${index + 1}`}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>

      {/* Istruzioni */}
      <Card sx={{ mt: 3, bgcolor: alpha(theme.palette.info.main, 0.05) }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            📋 Prossimi Passi
          </Typography>
          
          <Box component="ol" sx={{ pl: 2 }}>
            <li>
              <Typography variant="body2">
                Assicurati che Strapi sia in esecuzione: <code>npm run develop</code>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Crea l'admin user su http://localhost:1337/admin
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Esegui lo script di setup: <code>node scripts/setup-content.js</code>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Verifica che il token API sia stato aggiornato in .env.local
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Riavvia il frontend Next.js per applicare le modifiche
              </Typography>
            </li>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
