import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StatisticResponse } from "./authApi.types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }: { username: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { username, password },
      }),
    }),
    register: builder.mutation({
      query: ({ username, password }: { username: string; password: string }) => ({
        url: "/register",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { username, password },
      }),
    }),
    logout: builder.mutation<void, void>({
        query: () => ({
            url: '/auth/logout',
            method: 'POST',
            headers: { "Content-Type": "application/json" },
        })
    }),
    deleteUser: builder.mutation<void, number>({
        query: (id) => ({
          url: `/users/${id}`,
          method: 'DELETE',
        }),
    }),
    changePassword: builder.mutation({
        query: ({oldPassword, newPassword} : {oldPassword: string, newPassword: string}) => ({
          url: '/me/password',
          method: 'PATCH',
          headers: {"Content-Type": "application/json"},
          body: {oldPassword, newPassword},
        }),
    }),
    getStatistic: builder.query<StatisticResponse, number>({
      query: (id: number) => ({
          url: `/users/${id}/statistic`,
          method: 'GET',
          headers: { "Content-Type": "application/json" },
      })
    }),
    changeUsername: builder.mutation<void, {username: string, password: string}>({
      query: ({username, password}) => ({
        url: '/me',
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: {username, password},
      })
    })
  }),
});

export const { 
  useLoginMutation, 
  useRegisterMutation, 
  useLogoutMutation, 
  useGetStatisticQuery, 
  useDeleteUserMutation, 
  useChangePasswordMutation, 
  useChangeUsernameMutation 
} = authApi;

