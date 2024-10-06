import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const ViewPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data as Post[]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full text-white p-5">
      <h1 className="text-3xl font-bold mb-4">Publications in real time&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} fade style={{fontSize: "20px", color: "#ff0000",}} /><span className='text-red-600 text-2xl'>&nbsp;Live</span></h1>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul className="space-y-4 w-full max-w-lg">
          {posts.map((post) => (
            <li key={post.id} className="border border-gray-700 p-4 rounded">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p>{post.content}</p>
              <p className="text-sm text-gray-400">
                {new Date(post.created_at).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewPosts;
