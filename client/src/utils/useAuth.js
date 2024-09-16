import { useState, useEffect } from 'react';
import AuthService from './auth';

export function useAuth() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (AuthService.loggedIn()) {
                    const profile = AuthService.getProfile();
                    setUser(profile);
                }
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading, error };
}