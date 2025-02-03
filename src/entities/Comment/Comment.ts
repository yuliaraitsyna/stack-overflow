import { User } from "../User/User";

export interface Comment {
    id: number;
    content: string;
    user: User;
}