import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QuestionsResponse } from "./questionsApi.types";

export const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({

    getQuestions: builder.query<QuestionsResponse[], void>({
        query: () => `/questions`,
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
