import { User } from "../../../entities/User/User";

export interface AuthCredentials {
    username: string;
}

export interface AuthArgs extends AuthCredentials {
    password: string;
}

export interface AuthPayload extends AuthCredentials {
    id: number;
    role: string;
}

export interface AuthState {
    user: User | null;
}