import PostDetailsView from '../../sections/post/view/post-view';
import { endpoints } from '../../utils/axios';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Vip',
};

export default function PostListHomePage() {
  const URL = endpoints.strapi.post.vip

  return <PostDetailsView URL={URL+'?populate=coverUrl'} slug='vip' />;
}
