import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Snippet } from "../../../entities/Snippet/Snippet";
import { ApiResponse } from "./parseSnippets.types";

export const snippetsApi = createApi({
  reducerPath: "snippetsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://codelang.vercel.app/api" }),
  endpoints: (builder) => ({

    getSnippets: builder.query<ApiResponse, { page?: number; limit?: number }>({
      query: ({page, limit}) => `/snippets?page=${page}&limit=${limit}`,
    }),

    getConcreteSnippet: builder.query<Snippet, string>({
      query: (id) => `/snippets/${id}`,
    }),

    postSnippet: builder.mutation<Snippet, Partial<Snippet>>({
      query: (newSnippet) => ({
        url: '/snippets',
        method: 'POST',
        body: newSnippet,
      }),
    }),

    deleteSnippet: builder.mutation<void, string>({
      query: (id) => ({
        url: `/snippets/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetSnippetsQuery,
  useGetConcreteSnippetQuery,
  usePostSnippetMutation,
  useDeleteSnippetMutation,
} = snippetsApi;
