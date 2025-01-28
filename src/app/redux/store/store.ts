import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import authSlice from "../slice/authSlice";
import snippetsSlice from "../slice/snippetSlice";
import { snippetsApi } from "../api/snippetsApi";
import { questionsApi } from "../api/questionsApi";
import questionsSlice from "../slice/questionsSlice";
import usersSlice from "../slice/usersSlice";
import { usersApi } from "../api/usersApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [snippetsApi.reducerPath]: snippetsApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    auth: authSlice.reducer,
    snippets: snippetsSlice.reducer,
    questions: questionsSlice.reducer,
    users: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    })
    .concat(authApi.middleware)
    .concat(snippetsApi.middleware)
    .concat(questionsApi.middleware)
    .concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
