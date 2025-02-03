import { Statistic } from "../../../../entities/Statistics/Statistic";
import { User } from "../../../../entities/User/User";

export interface AuthState {
    user: User | null;
    statistic: Statistic | null;
}