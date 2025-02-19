import { useState } from "react";
import supabase from "../../../utils/supabase";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavigationBar from "../../features/navbar/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/profile");
    }

    setLoading(false);
  };

  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: window.location.origin + "/profile",
      },
    });

    if (error) {
      console.error("Error signing in:", error.message);
    }
  };

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
              Connectez-vous pour accéder à votre compte.
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
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded-2xl bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#1877f2] transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full px-4 py-3 rounded-2xl bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#1877f2] transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link
              to="/forgot-password"
              className="text-white hover:text-gray-400 transition-all flex justify-end"
            >
              Mot de passe oublié ?
            </Link>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-2xl bg-[#9683ec] text-white font-semibold hover:bg-[#8670e6] hover:border-transparent transition-colors"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? 'Chargement...' : 'Se connecter'}
            </motion.button>

            {error && <p className="text-red-500">{error}</p>}

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-zinc-900 text-gray-400 text-sm">
                  ou
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={signInWithGitHub}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-zinc-800 text-white font-semibold hover:bg-zinc-700 hover:border-transparent transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
              Continuer avec GitHub
            </motion.button>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-2xl bg-[#6a53d2] text-white font-semibold hover:bg-[#5e45ce] hover:border-transparent transition-colors"
            onClick={() => navigate("/signup")}
          >
            Créer un nouveau compte
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
