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
    logout: builder.mutation({
        query: () => ({
            url: '/auth/logout',
            method: 'POST',
            headers: { "Content-Type": "application/json" },
        })
    }),
    getStatistic: builder.query<StatisticResponse, number>({
      query: (id: number) => ({
          url: `/users/${id}/statistic`,
          method: 'GET',
          headers: { "Content-Type": "application/json" },
      })
    })
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useGetStatisticQuery } = authApi;
