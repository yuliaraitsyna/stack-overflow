import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UsersResponse } from "../slice/usersSlice.types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({

    getUsers: builder.query<UsersResponse, { page?: number; limit?: number }>({
        query: ({page, limit}) => `/users?page=${page}&limit=${limit}`,
    }),

  }),
});

export const { useGetUsersQuery } = usersApi;
