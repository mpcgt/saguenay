import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { supabase } from '../api/supabase';
import type { User } from '@supabase/supabase-js';

interface AuthContextType {
    user: User | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const location = useLocation();

    // Définissez les routes publiques
    const publicRoutes = ['/about', '/contact', '/home']; // Ajoutez ici toutes les routes accessibles sans connexion

    useEffect(() => {
        async function checkUser() {
            try {
                const { data: { user }, error } = await supabase.auth.getUser();

                if (error) {
                    console.error("Error fetching current user:", error.message);
                    setUser(null);
                    setLoading(false);
                    return;
                }

                setUser(user);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching current user:", error);
                setUser(null);
                setLoading(false);
            }
        }

        checkUser();

        if (supabase.auth) {
            const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
                if (!session) {
                    setUser(null);
                } else {
                    checkUser();
                }
            });
            return () => {
                authListener?.subscription.unsubscribe();
            };
        }
    }, [navigate, location.pathname]);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Autorisez l'accès aux routes publiques même si l'utilisateur n'est pas connecté
    if (!user && !publicRoutes.includes(location.pathname) && ['/discovery', '/profile'].includes(location.pathname)) {
        return <Navigate to="/profile" replace />;
    }

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};
