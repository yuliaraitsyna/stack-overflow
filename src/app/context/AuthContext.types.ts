import { ReactNode } from "react";
import { User } from "../../entities/User/User";

export interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

export type Props = {
    children?: ReactNode;
}
