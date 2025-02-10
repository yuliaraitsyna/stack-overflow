import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import { AuthResponse } from "./useAuth.types";
import { useAuthContext } from "./useAuthContext";

const baseUrl = 'https://codelang.vercel.app';

const useAuth = () => {
    const {user, setUser} = useAuthContext();
    const navigate = useNavigate();

    const login = useCallback(async (username: string, password: string) => {
        try {
            const response = await fetch(`${baseUrl}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            if (response.ok) {
                const result: AuthResponse = await response.json();

                if(!result) throw new Error("No user was fetched");

                setUser(result.data);
                navigate('/');
            }
            else {
                throw new Error('Failed to login');
            }
        }
        catch(error) {
            console.error(error);
        }
    }, [navigate, setUser]);

    const logout = () => {
        setUser(null);
    }

    const register = useCallback(async (username: string, password: string) => {
        const response = await fetch(`${baseUrl}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });

        if(response.ok) {
            const data = await response.json();
            setUser(data);
            navigate('/');
        }
        else {
            throw new Error('Failed to register');
        }
    }, [navigate, setUser])

    const memoizedUser = useMemo(() => ({user}), [user]);

    return {memoizedUser, logout, login, register};
}

export {useAuth};