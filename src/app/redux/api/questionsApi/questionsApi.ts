import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QuestionsResponse } from "./questionsApi.types";
import { Question } from "../../../../entities/Question/Question";

export const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({

    getQuestions: builder.query<QuestionsResponse, void>({
        query: () => `/questions`,
    }),

    postQuestion: builder.mutation<void, Pick<Question, 'title' | 'description' | 'attachedCode'>>({
        query: ({title, description, attachedCode}) => ({
            url: '/questions',
            method: 'POST',
            body: { title, description, attachedCode },
        }),
    }),

  }),
});

export const { useGetQuestionsQuery, usePostQuestionMutation } = questionsApi;
