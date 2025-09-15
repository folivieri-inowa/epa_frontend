'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, Chip, CircularProgress } from '@mui/material';
import { useStrapi, useStrapiConnection } from '../hooks/use-strapi';

const StrapiTestDashboard = () => {
  const { isConnected, isLoading: connectionLoading } = useStrapiConnection();
  const { data: pages, loading: pagesLoading, error: pagesError } = useStrapi('/pages');
  const { data: homeComponents, loading: componentsLoading, error: componentsError } = useStrapi('/home-components');

  if (connectionLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
        <Typography sx={{ ml: 2 }}>Verificando connessione Strapi...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        🧪 Strapi Integration Test Dashboard
      </Typography>

      {/* Connection Status */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            📡 Stato Connessione
          </Typography>
          <Chip 
            label={isConnected ? '✅ Connesso' : '❌ Disconnesso'} 
            color={isConnected ? 'success' : 'error'}
            variant="filled"
          />
        </CardContent>
      </Card>

      {/* Pages */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            📄 Pagine (Total: {pages?.data?.length || 0})
          </Typography>
          
          {pagesLoading && <CircularProgress size={20} />}
          {pagesError && (
            <Typography color="error">
              ❌ Errore: {typeof pagesError === 'string' ? pagesError : pagesError.message || 'Errore sconosciuto'}
            </Typography>
          )}
          
          {pages?.data && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              {pages.data.map((page) => (
                <Chip 
                  key={page.id}
                  label={`${page.title} (${page.slug})`}
                  variant="outlined"
                  color="primary"
                />
              ))}
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Home Components */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🏠 Componenti Homepage (Total: {homeComponents?.data?.length || 0})
          </Typography>
          
          {componentsLoading && <CircularProgress size={20} />}
          {componentsError && (
            <Typography color="error">
              ❌ Errore: {typeof componentsError === 'string' ? componentsError : componentsError.message || 'Errore sconosciuto'}
            </Typography>
          )}
          
          {homeComponents?.data && (
            <Box sx={{ mt: 2 }}>
              {homeComponents.data.map((component) => (
                <Card key={component.id} variant="outlined" sx={{ mb: 1, p: 1 }}>
                  <Typography variant="subtitle2" color="primary">
                    {component.component_type}
                  </Typography>
                  <Typography variant="body2">
                    {component.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Posizione: {component.order_position} | 
                    Visibile: {component.is_visible ? '✅' : '❌'}
                  </Typography>
                </Card>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Debug Info */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🔍 Debug Info
          </Typography>
          <Typography variant="body2" component="pre" sx={{ 
            backgroundColor: '#f5f5f5', 
            p: 2, 
            borderRadius: 1,
            fontSize: '0.8rem',
            overflow: 'auto'
          }}>
            {JSON.stringify({ 
              connection: { isConnected, connectionLoading },
              pages: { 
                loading: pagesLoading, 
                error: pagesError ? (typeof pagesError === 'string' ? pagesError : pagesError.message) : null, 
                count: pages?.data?.length || 0 
              },
              homeComponents: { 
                loading: componentsLoading, 
                error: componentsError ? (typeof componentsError === 'string' ? componentsError : componentsError.message) : null, 
                count: homeComponents?.data?.length || 0 
              }
            }, null, 2)}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StrapiTestDashboard;
