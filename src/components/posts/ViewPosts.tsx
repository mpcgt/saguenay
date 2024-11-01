import { useEffect, useState } from "react";
import { supabase } from "../../api/supabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

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

  const trends = [
    {
      title: "#Saguenay",
      category: "Technology",
      posts: "∞ Posts",
    },
    {
      title: "#France",
      category: "Country",
      posts: "∞ Posts",
    },
    {
      title: "#GitHub",
      category: "Programming",
      posts: "∞ Posts",
    },
    {
      title: "#Music",
      category: "Activity",
      posts: "∞ Posts",
    },
    {
      title: "#NFL",
      category: "Sports",
      posts: "∞ Posts",
    },
  ];

  const findUserName = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Saguenay";
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-xl mx-auto bg-zinc-900 border border-zinc-800 mb-4 rounded-2xl mt-20">
        <div className="flex items-center gap-2 p-4">
          <div className="w-8 h-8 bg-zinc-700 rounded-full"></div>
          <input
            type="text"
            placeholder="What's new?"
            className="flex-1 bg-transparent border-none text-white placeholder-zinc-500 focus:outline-none"
          />
          <button className="px-4 py-2 bg-zinc-800 hover:border-transparent hover:bg-zinc-600 hover:transition-all text-white rounded-2xl transition-colors">
            Post
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full text-white bg-black mt-16">
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
          <ul className="w-full max-w-lg bg-zinc-900 rounded-2xl">
            {posts.map((post) => (
              <li key={post.id} className="border-b border-zinc-800 last:border-b-0">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-zinc-700 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">{findUserName(post.user_name)}</p>
                        <p className="text-xs text-zinc-500">{new Date(post.created_at).toLocaleString()}</p>
                      </div>
                    </div>
                    <button className="text-zinc-500 hover:text-white hover:border-transparent hover:bg-zinc-600 hover:transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </div>
                  <h2 className="text-xl font-bold my-2">{post.title}</h2>
                  <p className="text-zinc-300">{post.content}</p>
                  <div className="flex items-center justify-between mt-4">
                    <button className="flex items-center gap-1 text-zinc-500 hover:text-red-500 hover:border-transparent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Like</span>
                    </button>
                    <button className="flex items-center gap-1 text-zinc-500 hover:text-blue-500 hover:border-transparent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Comment</span>
                    </button>
                    <button className="flex items-center gap-1 text-zinc-500 hover:text-green-500 hover:border-transparent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <span className="text-sm">Share</span>
                    </button>
                    <button className="flex items-center gap-1 text-zinc-500 hover:text-purple-500 hover:border-transparent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                      <span className="text-sm">Save</span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

      <div className="fixed top-20 right-10 justify-end text-white hidden lg:block ">
        <div className="bg-zinc-900 text-white p-4 rounded-2xl w-80">
          <h2 className="text-lg font-semibold mb-2">You might like</h2>
          <hr className="border-gray-600 w-32 mb-4" />
          <ul className="space-y-4">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center text-black ahsing pb-1">
                    {suggestion.name[0]}
                  </div>
                  <div>
                    <p className="cursor-pointer font-semibold">
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
                <button className="px-4 py-1 border border-white rounded-full text-white hover:bg-gray-600 hover:text-white hover:border-transparent transition-colors">
                  Follow
                </button>
              </li>
            ))}
          </ul>
          <button className="bg-zinc-800 text-indigo-400 hover:border-transparent mt-4 text-sm">
            Show more
          </button>
        </div>
      </div>

      <div className="fixed top-80 right-10 justify-end text-white hidden lg:block">
        <div className="bg-zinc-900 text-white p-4 rounded-2xl w-80">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold">Trends for you</h2>
          </div>
            <hr className="border-gray-600 w-36 mb-4" />
          <ul className="space-y-4">
            {trends.map((trend, index) => (
              <li
              key={index}
              className="cursor-pointer hover:bg-zinc-800 p-2 rounded"
              >
                <div className="text-sm text-gray-400">{trend.category}</div>
                <div className="font-bold">{trend.title}</div>
                <div className="text-sm text-gray-400">{trend.posts}</div>
              </li>
            ))}
          </ul>
          <button className="bg-zinc-800 text-indigo-400 hover:border-transparent mt-4 text-sm">
            Show more
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewPosts;
