import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../api/supabase";
import { createClient } from "@supabase/supabase-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { t } from "i18next";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
  full_name: string;
  user_id: number;
  avatar_url: string;
  hashtags: string[];
  spotify_link?: string;
  likes?: number;
}

interface UserData {
  id: string;
  full_name: string;
  email: string;
  avatar_url: string;
}

const supabaseServiceRole = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_SERVICE_ROLE as string
);

const ViewPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [usersMap, setUsersMap] = useState<Map<string, UserData>>(new Map());
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false); // État pour gérer l'affichage du popup

  const avatarUrl = "https://avatars.githubusercontent.com/u/";

  const findUserName = useCallback(
    (userId: string) => {
      return usersMap.get(userId)?.full_name || "Unknown";
    },
    [usersMap]
  );

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabaseServiceRole.auth.admin.listUsers();
      if (error) throw new Error(error.message);

      const userMap = new Map();
      data.users.forEach((user) => {
        if (user.email) {
          userMap.set(user.id, {
            id: user.id,
            full_name: user.user_metadata?.full_name || "Unknown",
            email: user.email,
            avatar_url:
              user.user_metadata?.avatar_url ||
              "https://github.com/mpcgt/saguenay/blob/main/src/assets/images/others/unknown_avatar.png?raw=true",
          });
        }
      });
      setUsersMap(userMap);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const { data: postsData, error: postsError } = await supabase
          .from("posts")
          .select(
            `id, title, content, created_at, user_id, hashtags, spotify_link, likes`
          )
          .order("created_at", { ascending: false });

        if (postsError) {
          console.error("Error fetching posts:", postsError.message);
          return;
        }

        const postsWithUserDetails = postsData.map((post) => {
          const userId = post.user_id?.toString();
          const user = userId ? usersMap.get(userId) : null;
          return {
            ...post,
            full_name: user ? user.full_name : "Unknown",
            avatar_url:
              user?.avatar_url ||
              "https://github.com/mpcgt/saguenay/blob/main/src/assets/images/others/unknown_avatar.png?raw=true",
          };
        });

        setPosts(postsWithUserDetails);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    if (usersMap.size > 0) {
      fetchPosts();
    }
  }, [usersMap]);

  const likePost = async (postId: number, currentLikes: number, isLiked: boolean) => {
    try {
      const newLikes = isLiked ? currentLikes - 1 : currentLikes + 1;
  
      const { data, error } = await supabase
        .from('posts')
        .update({ likes: newLikes })
        .eq('id', postId)
        .select();
  
      if (error) throw error;
  
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, likes: data[0].likes } : post
        )
      );
    } catch (error) {
      console.error('Error liking or disliking post:', error);
    }
  };
  
  const handleLikeClick = (postId: number, currentLikes: number, isLiked: boolean) => {
    likePost(postId, currentLikes, isLiked);
  };
  

  const trends = [
    { title: "#Saguenay" },
    { title: "#France" },
    { title: "#GitHub" },
    { title: "#TaylorSwift" },
    { title: "#2025" },
    { title: "#OnePiece" },
    { title: "#SanSebatiàn" },
    { title: "#Minecraft" },
  ];

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (postId: number): void => {
    setOpenDropdown((prev) => (prev === postId ? null : postId));
  };

  const copyLink = (postId: number) => {
    const postUrl = `${window.location.origin}/post/${postId}`;
    navigator.clipboard
      .writeText(postUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((err) => {
        console.error("Erreur lors de la copie :", err);
      });
  };

  return (
    <>
      <div className="bg-black text-white p-4">
        <div className="max-w-xl mx-auto bg-zinc-900 border border-zinc-800 mb-4 rounded-2xl mt-20">
          <div className="flex items-center gap-2 p-4">
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-8 h-8 bg-zinc-700 rounded-full"
            />
            <Link to="/create">
              <input
                type="text"
                placeholder={t("placeholderPost")}
                className="flex-1 w-96 bg-transparent border-none text-white placeholder-zinc-500 focus:outline-none cursor-pointer"
                readOnly
              />
            </Link>
            <button className="px-4 py-2  bg-zinc-800 hover:bg-zinc-700 text-white rounded-2xl transition-colors">
              {t("postSend")}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full text-white bg-black">
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
          <p>{t("noPosts")}</p>
        ) : (
          <ul className="w-full max-w-3xl bg-zinc-950 rounded-2xl">
            {posts.map((post) => (
              <li
                key={post.id}
                className="border-b border-zinc-800 last:border-b-0"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-zinc-700 rounded-full">
                        <img
                          src={
                            post.avatar_url ||
                            "https://github.com/mpcgt/saguenay/blob/main/src/assets/images/others/unknown_avatar.png?raw=true"
                          }
                          alt="User Avatar"
                          className="avatar rounded-2xl"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">
                          {post.full_name || "Unknown"}&nbsp;
                          <span className="text-gray-400 font-normal">
                            @
                            {post.user_id
                              ? findUserName(post.user_id.toString())
                              : "Unknown"}
                          </span>
                        </p>
                        <p className="text-xs text-zinc-500">
                          {new Date(post.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="relative inline-block text-left">
                      <button
                        onClick={() => toggleDropdown(post.id)}
                        className="text-zinc-500 hover:text-white hover:border-transparent bg-zinc-800 hover:bg-zinc-600 hover:transition-all p-2 rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </button>

                      {openDropdown === post.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-zinc-950 shadow-lg rounded-2xl border border-zinc-700">
                          <ul className="py-1">
                            <li className="text-red-600 hover:bg-zinc-900 hover:font-bold cursor-pointer rounded-2xl flex items-center px-4 py-2">
                              <Link
                                to="https://forms.gle/KV2bGhFgwg3v2cJH7"
                                target="_blank"
                                className="text-red-600 hover:text-red-600"
                              >
                                <FontAwesomeIcon icon={faCircleExclamation} />
                                &nbsp;&nbsp;{t("reportPost")}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold my-2">
                    <Link
                      to={`/post/${post.id}`}
                      className="text-white hover:text-white hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <div className="mt-2 flex flex-wrap">
                    {post.content.split(" ").map((word, index) => {
                      if (word.startsWith("#")) {
                        return (
                          <Link
                            key={index}
                            to={`/hashtag/${word.substring(1)}`}
                            className="text-indigo-500 mr-1"
                          >
                            {word}
                          </Link>
                        );
                      }
                      return (
                        <span key={index} className="text-white mr-1">
                          {word}
                        </span>
                      );
                    })}
                  </div>
                  {post.spotify_link && (
                    <div className="spotify-widget-container">
                      <iframe
                        src={`https://open.spotify.com/embed/track/${post.spotify_link
                          .split("/")
                          .pop()}`}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="encrypted-media"
                        title="Spotify Widget"
                        className="rounded-2xl mt-2"
                      ></iframe>
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-4">
                  <button
  onClick={() => handleLikeClick(post.id, post.likes || 0, (post.likes || 0) > 0)}
  className="flex items-center gap-1 bg-transparent text-zinc-500 hover:text-red-500 hover:border-transparent transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
  <span className="text-sm">
    {(post.likes || 0) > 0 ? t("dislikePost") : t("likePost")} {post.likes || 0}
  </span>
</button>



                    <button className="flex items-center gap-1 bg-transparent text-zinc-500 hover:text-blue-500 hover:border-transparent transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{t("commentPost")}</span>
                    </button>
                    <button
                      onClick={() => copyLink(post.id)}
                      className="flex items-center gap-1 bg-transparent text-zinc-500 hover:text-green-500 hover:border-transparent transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <span className="text-sm">{t("sharePost")}</span>
                    </button>
                    {copied && (
                      <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-2xl shadow-lg">
                        ✅ {t("copyLink")}
                      </div>
                    )}
                    <button className="flex items-center gap-1 bg-transparent text-zinc-500 hover:text-purple-500 hover:border-transparent transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                      <span className="text-sm">{t("savePost")}</span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="fixed top-24 right-10 justify-end text-white lg:block">
        <div className="text-white p-4 rounded-2xl w-80 border border-zinc-800">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xl font-bold">
              {t("trendingPost")}&nbsp;&nbsp;
              <FontAwesomeIcon
                icon={faArrowTrendUp}
                style={{ color: "#4F46E5" }}
              />
            </p>
          </div>
          <p className="text-xs font-bold pb-4 text-zinc-400">
            {t("trendingText")}
          </p>
          <hr className="border-gray-600 w-36 mb-4" />
          <ul className="grid grid-cols-2 gap-4">
            {trends.map((trend, index) => (
  <Link
    key={index}
    to={`/hashtag/${trend.title.substring(1)}`}
    className="cursor-pointer text-white hover:text-white hover:bg-zinc-800 p-2 rounded-2xl border border-zinc-800 transition-all"
    >
    {trend.title}
  </Link>
))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ViewPosts;
