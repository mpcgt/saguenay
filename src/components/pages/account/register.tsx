import { useState } from "react";
import supabase from "../../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NavigationBar from "../../features/navbar/navigation";

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignup = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/login");
    }

    setLoading(false);
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
              Créez un compte pour rejoindre notre communauté.
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
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-2xl bg-[#9683ec] text-white font-semibold hover:bg-[#8670e6] hover:border-transparent transition-colors"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? 'Chargement...' : 'S\'inscrire'}
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
              onClick={() => navigate("/login")}
              className="w-full py-3 rounded-2xl bg-zinc-800 text-white font-semibold hover:bg-zinc-700 hover:border-transparent transition-colors"
            >
              Se connecter
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
