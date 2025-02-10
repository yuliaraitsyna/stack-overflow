import { RootState } from "../store/store";

export const userSelector = (state: RootState) => state.auth.user;
export const isLoggedInSelector = (state: RootState) => !!userSelector(state);