import { MarkType } from "../../features/MarkButtons/MarkButton.types";
import { User } from "../User/User";

export interface Mark {
    id: number;
    type: MarkType;
    user: User;
}