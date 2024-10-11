import Navigation from "../navigation"
import CreatePost from '../../components/posts/CreatePost';
import ViewPosts from '../posts/ViewPosts';
import ButtonCreate from "../posts/ButtonCreate";
import '../posts/posts.css'

export default function Discovery() {
    return (
      <>
      <div>
        <Navigation />
      </div>
      <CreatePost />
      <ViewPosts />
      <ButtonCreate />
    </>
    );
  }
  