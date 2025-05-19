import PostDetailsView from '../../sections/post/view/post-view';
import { endpoints } from '../../utils/axios';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Corporate e società',
};

export default function PostListHomePage() {
  const URL = endpoints.strapi.post.corporate

  return <PostDetailsView URL={URL+'?populate=coverUrl'} slug='corporate' />;
}
