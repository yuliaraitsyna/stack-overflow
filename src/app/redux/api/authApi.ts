import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://codelang.vercel.app/api" }),
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
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
