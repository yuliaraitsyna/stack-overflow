import { createContext, FC, useMemo } from "react";
import { User } from "../../entities/User/User";
import { useState } from "react";
import { AuthContextType, Props } from "./AuthContext.types";

const initialValue = {
    user: null,
    setUser: () => {}
}

const AuthContext = createContext<AuthContextType>(initialValue);

const AuthProvider: FC<Props> = ({children}: Props) => {
    const [user, setUser] = useState<User | null>(null);

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext }