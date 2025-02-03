import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const useIsLoggedIn = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    return !!user;
};

export { useIsLoggedIn }