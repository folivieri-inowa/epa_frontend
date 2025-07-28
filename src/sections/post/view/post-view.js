'use client';

import useCompanyColors from 'src/hooks/use-company-colors';

import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';
import EmptyContent from 'src/components/empty-content';

import PostDetailsHero from '../post-details-hero';
import { PostDetailsSkeleton } from '../post-skeleton';
import { useGetStrapiPosts } from '../../../api/strapi';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import { MotionContainer } from '../../../components/animate';
import Divider from '@mui/material/Divider';

// ----------------------------------------------------------------------

export default function PostDetailsView({ URL, slug, menu }) {
  const { post, postLoading, postError } = useGetStrapiPosts(URL);

  const params = usePathname();

  let postDetails = null;

  if (!postLoading && post.data) {
    postDetails = Array.isArray(post.data)
      ? post.data.find((item) => item.slug === slug)
      : post.data;
  }

  const renderSkeleton = <PostDetailsSkeleton />;

  const renderError = (
    <EmptyContent
      filled
      title={`${postError?.message}`}
      action={
        <Button
          component={RouterLink}
          href={paths.dashboard.post.root}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
          sx={{ mt: 3 }}
        >
          Back to List
        </Button>
      }
      sx={{
        py: 20,
      }}
    />
  );

  const renderPost = postDetails && (
    <>
      <PostDetailsHero
        title={postDetails.title}
        subtitle={postDetails.subtitle}
        coverUrl={postDetails.coverUrl.url}
        createdAt={postDetails.createdAt}
      />

      <Container sx={{ my: 6 }}>
        <Stack spacing={3} alignItems="center">
          <Breadcrumbs>
            <Link color="inherit" href="/">
              Home
            </Link>
            {params
              .split('/')
              .slice(1)
              .map((part, index, array) => {
                if (slug === part) {
                  return (
                    <Typography
                      key={`/${array.slice(0, index + 1).join('/')}`}
                      sx={{ color: 'common.white' }}
                    >
                      {part}
                    </Typography>
                  );
                } else {
                  return (
                    <Typography key={`/${array.slice(0, index + 1).join('/')}`}>{part}</Typography>
                  );
                }
              })}
          </Breadcrumbs>
        </Stack>
      </Container>

      <Box
        sx={{
          width: '105%',
          py: { xs: 10, md: 0 },
          overflow: 'hidden',
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          bgcolor: 'background.neutral',
        }}
      >
        <Container component={MotionContainer}>
          <Grid container spacing={3} sx={{ maxWidth: 800, mx: 'auto', mt: 5 }}>
            <Grid item xs={12}>
              <Typography variant='body1' sx={{ color: 'common.white', fontSize: '1.2rem', fontWeight: 'normal' }}>
                {postDetails.content_description}
              </Typography>
              <Typography variant='h5' sx={{ color: 'common.white', mt:5, mb:5 }}>
                {postDetails.content_title}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ maxWidth: 1200, mx: 'auto', mb:5 }}>
            {postDetails.services && postDetails.services.map((service, index) => (
             <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: 280,
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgb(80 67 58 / 52%)',
                      zIndex: 2,
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <CardContent
                    className="card-content"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      zIndex: 3,
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      padding: 4,
                      transform: 'translate(0, -20%)',
                      top: 50,
                    }}
                  >
                    <>
                      <Typography
                        variant="h4"
                        sx={{
                          mt: 2,
                          mb: 1,
                          color: 'company.main',
                          lineHeight: '1.2em', // Adjust line height as needed
                          minHeight: '2.4em', // 2 lines * line height
                          maxHeight: '2.4em', // 2 lines * line height
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Divider sx={{ borderColor: 'rgb(246,142,59)', borderWidth: 1, width: '100%' }} />

                      <Typography variant='h5' sx={{ color: 'common.white', mt:2 }}>
                        {service.description}
                      </Typography>
                    </>
                  </CardContent>
                </Card>
              </Grid>
            ))}

          </Grid>
        </Container>
      </Box>
    </>
  );



  return (
    <Container maxWidth={false}>
      {postLoading && renderSkeleton}

      {postError && renderError}

      {!postLoading && postDetails && renderPost}
    </Container>
  );
}

PostDetailsView.propTypes = {
  title: PropTypes.string,
};
