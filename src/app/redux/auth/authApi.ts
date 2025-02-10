import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthArgs, AuthPayload } from "./types";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://codelang.vercel.app/api",
    prepareHeaders: (headers) => {  
      headers.set("Content-Type", "application/json")  
      return headers  
    },   
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthPayload, AuthArgs>({
      query: ({ username, password }: AuthArgs) => ({
        url: "/auth/login",
        method: "POST",
        body: { username, password },
      }),
    }),
    register: builder.mutation<AuthPayload, AuthArgs>({
      query: ({ username, password }: AuthArgs) => ({
        url: "/register",
        method: "POST",
        body: { username, password },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
