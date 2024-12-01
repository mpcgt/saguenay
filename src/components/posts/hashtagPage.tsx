import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../api/supabase";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const HashtagPage = () => {
  const { hashtag } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .ilike("content", `%${hashtag}%`);

      if (error) console.error(error);
      else setPosts(data);

      setLoading(false);
    };

    fetchPosts();
  }, [hashtag]);

  return (
    <div>
      <h1>Posts for #{hashtag}</h1>
      {loading ? <p>Loading...</p> : (
        posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts found for this hashtag.</p>
        )
      )}
    </div>
  );
};

export default HashtagPage;
