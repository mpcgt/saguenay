import Navigation from "../navigation"
import CreatePost from '../../components/posts/CreatePost';
import ViewPosts from '../posts/ViewPosts';

export default function Discovery() {
    return (
      <>
      <div>
        <Navigation />
      </div>
      <CreatePost />
      <ViewPosts />
    </>
    );
  }
  