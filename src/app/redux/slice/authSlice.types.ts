import { User } from "../../../entities/User/User";

export interface AuthState {
    user: User | null;
}