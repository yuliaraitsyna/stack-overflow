import { Statistic } from "../../../entities/Statistics/Statistic";
import { User } from "../../../entities/User/User";

export interface StatisticResponse {
    data: {
        id: Pick<User, "id">;
        username: Pick<User, "username">;
        role: Pick<User, "role">;
        statistic: Statistic;
    }
}