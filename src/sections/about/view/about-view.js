'use client';

import AboutHero from '../about-hero';
import AboutWhat from '../about-what';
import AboutTeam from '../about-team';
import AboutTestimonials from '../about-testimonials';
import { useGetStrapiPosts } from '../../../api/strapi';

// ----------------------------------------------------------------------

export default function AboutView({ URL }) {
  const { post, postLoading } = useGetStrapiPosts(URL);

  if (postLoading && !post.data) {
    return null
  }

  return (
    <>
      <AboutHero
        title={post.data.title}
        title2={post.data.title2}
        subtitle={post.data.subtitle}
        coverUrl={post.data.coverUrl}
      />

      <AboutWhat
        title={post.data.what_title}
        subtitle={post.data.what_subtitle}
        images={post.data.what_images}
        skills={post.data.what_skills}
      />

      {/* <AboutVision /> */}

      <AboutTeam
        title={post.data.team_title}
        subtitle={post.data.team_subtitle}
        images={post.data.what_images}
      />

      {/* <AboutTestimonials
        title={post.data.testimonials_title}
        subtitle={post.data.testimonials_subtitle}
        testimonials={post.data.testimonials_json}
      /> */}
    </>
  );
}
