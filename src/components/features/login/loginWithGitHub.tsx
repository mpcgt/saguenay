import { supabase } from '../../../api/supabase';

const LoginGitHub = () => {
    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: 'github',
        });
        if (error) {
          console.error('Erreur de connexion:', error.message);
        }
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen">
          <button onClick={handleLogin} className="bg-blue-500 text-white py-2 px-4 rounded">
            Se connecter avec GitHub
          </button>
        </div>
      );
    };

export default LoginGitHub;