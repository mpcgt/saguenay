import Navigation from "../navigationDiscovery"
import CreatePost from '../../components/posts/CreatePost';
import ViewPosts from '../posts/ViewPosts';
import ButtonCreate from "../posts/ButtonCreate";
import '../posts/posts.css'
import ScreenTime from "../features/limitTime/screenTime";

export default function Discovery() {  
    return (
      <>
      <div>
        <Navigation />
      </div>
      <CreatePost />
      <ViewPosts />
      <ButtonCreate />
        <div className="min-h-screen flex items-center justify-center">
        <ScreenTime />
        </div>
    </>
    );
  }
  