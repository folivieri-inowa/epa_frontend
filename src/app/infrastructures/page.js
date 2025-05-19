import PostDetailsView from '../../sections/post/view/post-view';
import { endpoints } from '../../utils/axios';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Infrastrutture e siti sensibili',
};

export default function PostListHomePage() {
  const URL = endpoints.strapi.post.infrastructures

  return <PostDetailsView URL={URL+'?populate=coverUrl'} slug='infrastructures' />;
}
