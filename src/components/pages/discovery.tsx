import { useEffect } from "react";
import Navigation from "../navigationDiscovery"
import ViewPosts from '../posts/ViewPosts';
import '../posts/posts.css'
import ScreenTime from "../features/limitTime/screenTime";

export default function Discovery() {
  useEffect(() => {
    document.title = 'Discovery - Saguenay';
  }, []);
    return (
      <>
      <div>
        <Navigation />
      </div>
      <ViewPosts />
        <div className="min-h-screen flex items-center justify-center">
        <ScreenTime />
        </div>
    </>
    );
  }
  