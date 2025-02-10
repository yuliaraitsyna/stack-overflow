import { createContext, FC } from "react";
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

    return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext }