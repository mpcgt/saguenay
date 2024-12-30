import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../api/supabase";
import { Post } from "../../types";
import Navigation from "../navigationDiscovery";
import { t } from "i18next";

interface UserMetadata {
  full_name?: string;
  avatar_url?: string;
  display_name?: string;
}

interface User {
  id: string;
  email?: string;
  user_metadata: UserMetadata;
}

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        const { data: postData, error: postError } = await supabase
          .from("posts")
          .select("*")
          .eq("id", id)
          .single();

        if (postError) {
          console.error(
            "Erreur lors de la récupération du post:",
            postError.message
          );
          setError("Erreur lors de la récupération du post");
          return;
        }

        setPost(postData);

        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du post:", error);
        setError("Erreur lors de la récupération du post");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  const copyLink = () => {
    const postUrl = `${window.location.origin}/post/${id}`;
    navigator.clipboard.writeText(postUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch(err => {
        console.error("Erreur lors de la copie :", err);
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
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
      </div>
    );
  }

  if (error || !post) {
    return <p>{error || "Post not found"}</p>;
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-black">
      <div className="flex bg-zinc-900 rounded-2xl w-full max-w-5xl p-6">
        <Navigation />

        <div className="ml-8 flex flex-col justify-center text-white w-full">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="text-zinc-400">{post.created_at}</p>

          <div className="mt-4 flex items-center gap-4">
            {user?.user_metadata?.avatar_url && (
              <img
                src={user.user_metadata.avatar_url}
                alt="Avatar"
                className="h-12 w-12 rounded-full"
              />
            )}
            <div>
              <p className="text-sm text-zinc-400">
                {user?.user_metadata?.full_name ? (
                  user.user_metadata.full_name
                ) : (
                  <span>
                    Username not defined,{" "}
                    <a href="/profile">log in to view user</a>
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p>{post.content}</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button className="flex items-center gap-1 bg-transparent text-zinc-500 hover:text-red-500 hover:border-transparent transition-colors">
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
              <span className="text-sm">{t("likePost")}</span>
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
            <button onClick={copyLink} className="flex items-center gap-1 bg-transparent text-zinc-500 hover:text-green-500 hover:border-transparent transition-colors">
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

          <div className="mt-6">
            <h3 className="text-xl font-semibold">{t("comments")}</h3>

            <div className="mt-4">
              <textarea
                placeholder={t("writeComment")}
                className="w-full p-2 bg-zinc-800 text-white rounded-2xl focus:outline-none"
                rows={4}
                disabled
              ></textarea>
              <button
                className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-2xl hover:bg-indigo-700 transition-colors"
                disabled
              >
                {t("postSend")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
