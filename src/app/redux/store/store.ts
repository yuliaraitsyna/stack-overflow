import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi/authApi";
import { snippetsApi } from "../api/snippetsApi/snippetsApi";
import { questionsApi } from "../api/questionsApi/questionsApi";
import { persistReducer, persistStore } from 'redux-persist';
import { usersApi } from "../api/usersApi/usersApi";
import authReducer from "../slices/authSlice/authSlice";
import snippetsReducer from "../slices/snippetsSlice/snippetsSlice";
import questionsReducer from "../slices/questionsSlice/questionsSlice";
import usersReducer from "../slices/usersSlice/usersSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["snippets"],
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [snippetsApi.reducerPath]: snippetsApi.reducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  auth: authReducer,
  snippets: snippetsReducer,
  questions: questionsReducer,
  users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
    })
    .concat(authApi.middleware)
    .concat(snippetsApi.middleware)
    .concat(questionsApi.middleware)
    .concat(usersApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export default store;
