import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import authSlice from "../slice/authSlice";
import snippetsSlice from "../slice/snippetSlice";
import { snippetsApi } from "../api/snippetsApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [snippetsApi.reducerPath]: snippetsApi.reducer,
    auth: authSlice.reducer,
    snippets: snippetsSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    })
    .concat(authApi.middleware)
    .concat(snippetsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
