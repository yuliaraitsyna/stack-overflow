import { RootState } from "../store/store";

const usersSelector = (state: RootState) => state.users.users;
const totalPagesSelector = (state: RootState) => state.users.totalPages;
const currentPageSelector = (state: RootState) => state.users.currentPage;
const limitSelector = (state: RootState) => state.users.limit;

export { usersSelector, totalPagesSelector, currentPageSelector, limitSelector };
