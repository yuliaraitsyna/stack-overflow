import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { User } from "../../entities/User/User";

const useAuth = () => {
    const {user, setUser} = useContext(AuthContext);

    const login = async (username: string, password: string) => {
        try {
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
            }
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };

    const logout = () => {
        setUser(null);
    }

    const register = (username: string, password: string) => {

    }

    return {user, login, register, logout};
}

export {useAuth};