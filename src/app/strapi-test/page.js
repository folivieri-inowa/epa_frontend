import { Box } from '@mui/material';

import StrapiTestDashboard from '../../components/strapi-test';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Strapi Integration Test - Oracle Executive Protection',
  description: 'Test dashboard per verificare l\'integrazione con Strapi CMS',
};

export default function StrapiTestPage() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      py: 4
    }}>
      <StrapiTestDashboard />
    </Box>
  );
}
