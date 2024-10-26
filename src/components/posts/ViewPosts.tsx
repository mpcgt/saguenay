import { useEffect, useState } from "react";
import { supabase } from "../../api/supabase";
import { faBookmark, faCircle, faComment, faHeart, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
  user_name: number;
}

interface User {
  id: number;
  name: string;
  username: string;
}

const ViewPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data: postsData, error: postsError } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      const { data: usersData, error: usersError } = await supabase
        .from("users")
        .select("*");

      if (postsError || usersError) {
        console.error("Error fetching data:", postsError || usersError);
      } else {
        setPosts(postsData as Post[]);
        setUsers(usersData as User[]);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const findUserName = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-white p-5">
      <h1 className="text-3xl font-bold mb-4">
        Publications in real time&nbsp;&nbsp;
        <FontAwesomeIcon
          icon={faCircle}
          fade
          style={{ fontSize: "20px", color: "#ff0000" }}
        />
        <span className="text-red-600 text-2xl">&nbsp;Live</span>
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul className=" w-full max-w-lg">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border-t border-b border-gray-700 p-4 rounded"
            >
              <h2 className="text-sm text-gray-400">
                
                {findUserName(post.user_name)}
              </h2>
              <hr className="w-56 mt-3 mb-3 border-gray-600" />
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p>{post.content}</p>
              <p className="text-sm text-gray-400 mt-2">
                {new Date(post.created_at).toLocaleString()}
              </p>
              <div className="bg-gray-700 mt-3 w-44 rounded-xl">
              <FontAwesomeIcon icon={faHeart} className="m-3 text-xl hover:text-red-500 cursor-pointer transition-all" />
              <FontAwesomeIcon icon={faComment} className="m-3 text-xl hover:text-blue-400 cursor-pointer transition-all" />
              <FontAwesomeIcon icon={faShareFromSquare} className="m-3 text-xl hover:text-green-300 cursor-pointer transition-all" />
              <FontAwesomeIcon icon={faBookmark} className="m-3 text-xl hover:text-indigo-400 cursor-pointer transition-all" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewPosts;
