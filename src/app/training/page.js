import PostDetailsView from '../../sections/post/view/post-view';
import { endpoints } from '../../utils/axios';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Post: Formazione',
};

export default function PostListHomePage() {
  const URL = endpoints.strapi.post.training

  return <PostDetailsView URL={URL+'?populate=coverUrl'} slug={'training'} />;
}
