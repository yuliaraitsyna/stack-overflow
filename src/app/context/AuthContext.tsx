import { createContext } from "react";
import { User } from "../../entities/User/User";
import { useState, ReactNode } from "react";

type Props = {
    children?: ReactNode;
}

interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

const initialValue = {
    user: null,
    setUser: () => {}
}

const AuthContext = createContext<AuthContextType>(initialValue);

const AuthProvider = ({children}: Props) => {
    const [user, setUser] = useState<User | null>(null);

    return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext }