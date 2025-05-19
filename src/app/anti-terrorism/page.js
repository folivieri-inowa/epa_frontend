import PostDetailsView from '../../sections/post/view/post-view';
import { endpoints } from '../../utils/axios';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Post: Anti Terrorismo',
};

export default function PostListHomePage() {
  const URL = endpoints.strapi.post.anti_terrorism

  return <PostDetailsView URL={URL+'?populate=coverUrl'} slug='anti-terrorism' />;
}
