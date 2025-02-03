import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../../entities/User/User";
import { AuthState } from "./authSlice.types";
import { StatisticResponse } from "../../api/authApi/authApi.types";

const initialState: AuthState = {
  user: null,
  statistic: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    setStatistics(state, action: PayloadAction<StatisticResponse>) {
      state.statistic = action.payload.data.statistic;
    },
  },
});

const authReducer = authSlice.reducer;

export const { setUser, logout, setStatistics } = authSlice.actions;
export default authReducer;
