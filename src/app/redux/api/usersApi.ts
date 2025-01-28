import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UsersResponse } from "../slice/usersSlice.types";
import { User } from "../../../entities/User/User";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({

    getUsers: builder.query<UsersResponse, { page?: number; limit?: number }>({
        query: ({page, limit}) => `/users?page=${page}&limit=${limit}`,
    }),

    getConcreteUser: builder.query<{data: User}, number>({
        query: (id) => ({
            url: `/users/${id}`,
            method: 'GET',
        })
    }),

  }),
});

export const { useGetUsersQuery, useGetConcreteUserQuery } = usersApi;
