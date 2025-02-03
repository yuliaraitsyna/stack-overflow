import { User } from "../../entities/User/User";

export interface UserMenuItemProps {
    user: User | null;
    isOpen: boolean;
    onMenuOpen: () => void;
}