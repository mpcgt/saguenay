import { useState } from 'react';
import { supabase } from '../../../api/supabase';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            alert(error.message); // Handle signup error
            return;
        }

        const user = data.user;

        if (user) {
            const { error: insertError } = await supabase
                .from('users')
                .insert([
                    {
                        id: user.id,
                        name,
                        username,
                        location,
                        age,
                        created_at: new Date(),
                    },
                ]);

            if (insertError) {
                alert(insertError.message); // Handle user insert error
            } else {
                alert('Inscription réussie !');
            }
        } else {
            alert("L'utilisateur n'a pas pu être créé.");
        }
    };

    return (
        <form onSubmit={handleSignup} className="max-w-md mx-auto mt-10 p-5 border rounded shadow-md">
            <h2 className="text-2xl font-bold mb-5">Inscription</h2>
            <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full p-2 mb-3 border rounded"
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-2 mb-3 border rounded"
                required
            />
            <input
                type="text"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full p-2 mb-3 border rounded"
                required
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="block w-full p-2 mb-3 border rounded"
                required
            />
            <input
                type="text"
                placeholder="Âge"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="block w-full p-2 mb-3 border rounded"
                required
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full p-2 mb-5 border rounded"
                required
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">S'inscrire</button>
        </form>
    );
};

export default Signup;