import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const useAuth = () => {
    const {user, setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const login = async (username: string, password: string) => {
        const response = await fetch('https://codelang.vercel.app/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            setUser(data);
            navigate('/');
        }
        else {
            throw new Error('Failed to login');
        }
    };

    const logout = () => {
        setUser(null);
    }

    const register = async (username: string, password: string) => {
        const response = await fetch('https://codelang.vercel.app/api/register', {
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
    }

    return {user, login, register, logout};
}

export {useAuth};