import { useState } from "react";
import supabase from "../../../utils/supabase";
import { motion } from "framer-motion";
import NavigationBar from "../../features/navbar/navigation";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/update-password',
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
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
              Réinitialiser le mot de passe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-sm px-4"
            >
              Entrez votre adresse email pour recevoir un lien de réinitialisation.
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
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-2xl bg-[#9683ec] text-white font-semibold hover:bg-[#8670e6] hover:border-transparent transition-colors"
              onClick={handleResetPassword}
              disabled={loading}
            >
              {loading ? 'Chargement...' : 'Réinitialiser le mot de passe'}
            </motion.button>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">Un email de réinitialisation a été envoyé !</p>}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
