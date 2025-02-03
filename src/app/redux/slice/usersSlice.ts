import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersResponse, UsersState } from "./usersSlice.types";
import { LIMITS } from "./snippetSlice.types";

const initialState: UsersState = {
  users: [],
  totalPages: 1,
  currentPage: 1,
  limit: LIMITS[0],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<UsersResponse>) {
        state.users = action.payload.data.data;
        state.totalPages = action.payload.data.meta.totalPages;
        state.currentPage = action.payload.data.meta.currentPage;
        state.limit = action.payload.data.meta.itemsPerPage;
    },

    setCurrentPage(state, action: PayloadAction<number>) {
        state.currentPage = action.payload;
    },

    setLimit(state, action: PayloadAction<number>) {
        if(state.limit != action.payload) {
            state.currentPage = 1;
        }
        state.limit = action.payload;
    },
  },
});

export const { setUsers, setCurrentPage, setLimit } = usersSlice.actions;
export default usersSlice;
