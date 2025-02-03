import { RootState } from "../store/store";

const userSelector = (state: RootState) => state.auth.user;
const statisticSlector = (state: RootState) => state.auth.statistic;

export { userSelector, statisticSlector };