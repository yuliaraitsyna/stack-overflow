import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Snippet } from "../../../entities/Snippet/Snippet";
import { ApiResponse } from "./parseSnippets.types";
import { MarkType } from "../../../features/MarkButtons/MarkButton.types";

export const snippetsApi = createApi({
  reducerPath: "snippetsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({

    getSnippets: builder.query<ApiResponse, { userId?: number, page?: number; limit?: number }>({
      query: ({userId, page, limit}) => {
        if(userId) {
          return `/snippets?userId=${userId}&page=${page}&limit=${limit}`;
        }
        else {
          return `/snippets?page=${page}&limit=${limit}`;
        }
      },
    }),

    getConcreteSnippet: builder.query<{data: Snippet}, number>({
      query: (id) => ({
        url: `/snippets/${id}`,
        method: 'GET',
      })
    }),

    postSnippet: builder.mutation<Snippet, Partial<Snippet>>({
      query: (newSnippet) => ({
        url: '/snippets',
        method: 'POST',
        body: newSnippet,
      }),
    }),

    updateSnippet: builder.mutation<void, Pick<Snippet, 'id' | 'code' | 'language'> >({
      query: ({id, code, language}) => ({
        url: `/snippets/${id}`,
        method: 'PATCH',
        body: { code, language },
      }),
    }),

    addSnippetMark: builder.mutation<void, { snippetId: number, type: MarkType }>({
        query: ({snippetId, type}) => ({
            url: `/marks`,
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: { type, snippetId},
        }),
    }),

    updateSnippetMark: builder.mutation<void, { snippetId: number, type: MarkType }>({
        query: ({snippetId, type}) => ({
            method: 'PATCH',
            url: `/marks`,
            body: { type, snippetId },
        }),
    }),

    removeSnippetMark: builder.mutation<void, number>({
        query: (id) => ({
            url: `/marks/${id}`,
            method: 'DELETE',
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
  useUpdateSnippetMutation,
  useDeleteSnippetMutation,
  useAddSnippetMarkMutation,
  useRemoveSnippetMarkMutation,
} = snippetsApi;
