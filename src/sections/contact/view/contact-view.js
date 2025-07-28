'use client';

import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ContactHero from '../contact-hero';
import ContactForm from '../contact-form';

// ----------------------------------------------------------------------

export default function ContactView({ data }) {

  return (
    <>
      <ContactHero title={data.title} subtitle={data.subtitle} />

      <Container sx={{ py: 10 }}>
        <Box
          gap={6}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <ContactForm title={data.contact_title} labels={data.form} />
        </Box>
      </Container>
    </>
  );
}

ContactView.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    contact_title: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
  }).isRequired,
};
