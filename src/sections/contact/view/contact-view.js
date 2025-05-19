'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ContactHero from '../contact-hero';
import ContactForm from '../contact-form';
import { useGetStrapiPosts } from '../../../api/strapi';

// ----------------------------------------------------------------------

export default function ContactView({ URL }) {
  const { post, postLoading } = useGetStrapiPosts(URL);

  if (postLoading && !post.data) {
    return null
  }

  return (
    <>
      <ContactHero title={post.data.title} subtitle={post.data.subtitle} />

      <Container sx={{ py: 10 }}>
        <Box
          gap={6}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <ContactForm title={post.data.contact_title} labels={post.data.form} />

          {/* <ContactMap contacts={_mapContact} /> */}
        </Box>
      </Container>
    </>
  );
}
