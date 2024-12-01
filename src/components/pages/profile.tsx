import { useState, useEffect } from "react";
import { supabase } from "../../api/supabase";
import type { User } from "@supabase/supabase-js";
import Navigation from "../navigationDiscovery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import NavigationBar from "../features/navbar/navigation";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function initializeUser() {
      setLoading(true);
      await checkUser();
      setLoading(false);
    }

    initializeUser();
    
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  async function checkUser() {
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !sessionData.session) {
      console.log("No active session or error fetching session");
      setUser(null);
      return;
    }

    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error("Error fetching user:", error.message);
    } else {
      setUser(data?.user ?? null);
    }
  }

  async function signInWithGitHub() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: window.location.origin + "/profile",
      },
    });
    if (error) console.error("Error signing in:", error.message);
  }

  if (user) {
    const avatarUrl = user.user_metadata?.avatar_url || "https://avatars.githubusercontent.com/u/";
    const fullName = user.user_metadata?.full_name || "Name";
    const userName = user.user_metadata?.user_name || "user";
    // const providerId = user.user_metadata?.provider_id || "";
    
    if (loading) {
      return <svg
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
    }

    return (
      <>
        <Navigation />
        <div className="flex min-h-screen bg-zinc-900">
        <Navigation />
        <main className="flex-grow">
          <div className="mx-auto max-w-2xl bg-zinc-800 shadow-md">
            <div className="flex items-center gap-4 border-b p-4 dark:border-gray-700">
              <button className="text-white dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">{fullName}</h1>
                <p className="text-sm text-white">1 Post</p>
              </div>
            </div>

            <div className="relative">
              <div className="h-32 bg-zinc-700 dark:bg-gray-700" />
              <div className="p-4">
                <div className="relative -mt-16 mb-4">
                  <img
                    src={avatarUrl}
                    alt=""
                    className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-700 object-cover"
                  />
                  <button className="absolute right-0 top-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm font-semibold border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link to="/development" className="text-black hover:text-black">
                    Edit Profile
                    </Link>
                  </button>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-3xl font-bold text-white">{fullName}</h2>
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500"><FontAwesomeIcon icon={faCircle} fade style={{color: "#0f7b6e",}} />Online</span>

                  </div>
                  <p className="text-white">@{userName}</p>
                </div>

                {/* <p className="mb-4 text-gray-700 dark:text-gray-300">{bio}</p> */}

                <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {/* {location} */}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {/* {createdAt} */}
                  </span>
                </div>

                <div className="mb-4 flex gap-4 text-sm">
                  <span>
                    {/* <strong className="font-bold text-gray-900 dark:text-white">{following}</strong>{" "} */}
                    <span className="text-white"><span className="text-2xl font-bold">0 </span>Following</span>
                  </span>
                  <span>
                    {/* <strong className="font-bold text-gray-900 dark:text-white">{followers}</strong>{" "} */}
                    <span className="text-white"><span className="text-2xl font-bold">0 </span> Followers</span>
                  </span>
                </div>

                <div className="border-b border-gray-200 dark:border-gray-700">
                  <nav className="-mb-px flex">
                    <a href="#" className="border-b-2 border-indigo-500 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">Posts</a>
                    <a href="#" className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Media</a>
                    <a href="#" className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Likes</a>
                  </nav>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                    <p className="flex items-center justify-center">No publication...</p>

                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      </>
    );
  }

  return (
    <>
    <NavigationBar />
    <div className="min-h-screen bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#FFF] text-5xl ahsing font-bold mb-5"
          >
            Saguenay
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm px-4"
          >
            Saguenay is a privacy-focused, ad-free social network that prioritizes user well-being by avoiding algorithms and tracking, offering an authentic experience while ensuring safety, transparency, and ethical data practices.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm font-bold px-4 mt-5"
          >
          For security reasons, you must create a Saguenay account via your GitHub account (Continue with GitHub).
          </motion.p>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-zinc-900 p-4 rounded-2xl shadow-xl space-y-4"
        >
          <input
            type="text"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-2xl bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#1877f2] transition-colors"
            disabled
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-2xl  bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#1877f2] transition-colors"
            disabled
          />
          <Link to="/development" className="text-white hover:text-gray-400 transition-all flex ml-64">Forgot password?</Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-2xl bg-[#9683ec] text-white font-semibold hover:bg-[#8670e6] hover:border-transparent transition-colors"
            disabled
          >
            Log in
          </motion.button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-zinc-900 text-gray-400 text-sm">or</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={signInWithGitHub}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-zinc-800 text-white font-semibold hover:bg-zinc-700 hover:border-transparent transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
            Continue with GitHub
          </motion.button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-2xl bg-[#6a53d2] text-white font-semibold hover:bg-[#5e45ce] hover:border-transparent transition-colors"
          disabled
        >
          Create new account
        </motion.button>
      </div>
    </div>
    </>
  );
};

export default Profile;
