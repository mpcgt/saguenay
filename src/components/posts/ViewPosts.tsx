import { useEffect, useState } from "react";
import { supabase } from "../../api/supabase";
import {
  faBookmark,
  faCircle,
  faCircleCheck,
  faComment,
  faHeart,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
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

  const suggestions = [{ name: "Saguenay", username: "@saguenay" }];

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
    <>
      <div className="flex flex-col items-center justify-center h-full text-white mt-20">
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
          <svg
            aria-hidden="true"
            className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        ) : posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          <ul className=" w-full max-w-lg">
            {posts.map((post) => (
              <li
                key={post.id}
                className="border-t border-b border-gray-700 bg-black p-4 mb-3 rounded"
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
                <div className="bg-gray-900 mt-3 w-44 rounded-xl">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="m-3 text-lg hover:text-red-500 cursor-pointer transition-all"
                  />
                  <FontAwesomeIcon
                    icon={faComment}
                    className="m-3 text-lg hover:text-blue-400 cursor-pointer transition-all"
                  />
                  <FontAwesomeIcon
                    icon={faShareFromSquare}
                    className="m-3 text-lg hover:text-green-300 cursor-pointer transition-all"
                  />
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="m-3 text-lg hover:text-indigo-400 cursor-pointer transition-all"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="fixed top-20 right-10 justify-end text-white hidden lg:block ">
        <div className="bg-black text-white p-4 rounded-lg max-w-xs">
          <h2 className="text-lg font-semibold mb-4">You might like</h2>
          <ul className="space-y-4">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center text-black ahsing pb-1">
                    {suggestion.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold">
                      {suggestion.name}{" "}
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{ color: "#8896F7" }}
                      />
                    </p>
                    <p className="text-sm mr-10 text-gray-400">
                      {suggestion.username}
                    </p>
                  </div>
                </div>
                <button className="px-4 py-1 border border-white rounded-full text-white hover:bg-gray-600 hover:text-white hover:border-indigo-600 transition-colors">
                  Follow
                </button>
              </li>
            ))}
          </ul>
          <button className="text-blue-400 mt-4 text-sm">Show more</button>
        </div>
      </div>
    </>
  );
};

export default ViewPosts;
