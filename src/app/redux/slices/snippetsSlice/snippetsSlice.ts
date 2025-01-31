import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LIMITS, SnippetsState } from "./snippetsSlice.types";
import { Snippet } from "../../../../entities/Snippet/Snippet";
import { ApiResponse } from "../../api/snippetsApi/parseSnippets/parseSnippets.types";
import { parseSnippets } from "../../api/snippetsApi/parseSnippets/parseSnippets";
import { Comment } from "../../../../entities/Comment/Comment";
import { Mark } from "../../../../entities/Mark/Mark";

const initialState: SnippetsState = {
  totalPages: 1,
  currentPage: 1,
  limit: LIMITS[0],
  snippets: [],
};

const snippetsSlice = createSlice({
  name: "snippets",
  initialState,
  reducers: {
    removeSnippet: (state, action: PayloadAction<number>) => {
      state.snippets = state.snippets.filter(snippet => snippet.id !== action.payload);
      state.currentPage = 1;
    },

    updateSnippet: (state, action: PayloadAction<Pick<Snippet, 'id' | 'language' | 'code'>>) => {
      const index = state.snippets.findIndex(snippet => snippet.id === action.payload.id);
      if (index !== -1) {
        state.snippets[index].code = action.payload.code;
        state.snippets[index].language = action.payload.language;
      };
    },

    addSnippet: (state, action: PayloadAction<Snippet>) => {
      state.snippets.push(action.payload);
    },

    setSnippets: (state, action: PayloadAction<ApiResponse>) => {
        const parsedSnippets = parseSnippets(action.payload);
        state.snippets = parsedSnippets;

        state.totalPages = action.payload.data.meta.totalPages;
        state.currentPage = action.payload.data.meta.currentPage;
        state.limit = action.payload.data.meta.itemsPerPage;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
        state.currentPage = action.payload;
    },

    setLimit: (state, action: PayloadAction<number>) => {
      if(state.limit != action.payload) {
        state.currentPage = 1;
      }
      state.limit = action.payload;
    },

    addComment: (state, action: PayloadAction<{comment: Comment, snippetId: number}>) => {
      const snippet = state.snippets.find(snippet => snippet.id === action.payload.snippetId);

      if (snippet) {
        snippet.comments.push(action.payload.comment);
      }
    },

    updateComment: (state, action: PayloadAction<{content: string, commentId: number, snippetId: number}>) => {
      const snippet = state.snippets.find(snippet => snippet.id === action.payload.snippetId);

      if (snippet) {
        const index = snippet.comments.findIndex(comment => comment.id === action.payload.commentId);

        if (index !== -1) {
          snippet.comments[index].content = action.payload.content;
        }
        else {
          throw new Error('Comment not found');
        }
      }
      else throw new Error('Snippet not found');
    },

    removeComment: (state, action: PayloadAction<{commentId: number, snippetId: number}>) => {
      const snippetIndex = state.snippets.findIndex(snippet => snippet.id === action.payload.snippetId);

      if(snippetIndex === -1) {
        throw new Error('Snippet not found');
      }

      state.snippets[snippetIndex].comments = state.snippets[snippetIndex].comments.filter(comment => comment.id !== action.payload.commentId);
    },

    addMark: (state, action: PayloadAction<{snippetId: number, mark: Mark}>) => {
      const snippetIndex = state.snippets.findIndex(snippet => snippet.id === action.payload.snippetId);

      if(snippetIndex === -1) {
        throw new Error('Snippet not found');
      }

      state.snippets[snippetIndex].marks.push(action.payload.mark);
    },

    updateMark: (state, action: PayloadAction<{snippetId: number, markId: number, type: Mark['type']}>) => {
      console.log(action.payload.snippetId, action.payload.markId, action.payload.type)
      const snippetIndex = state.snippets.findIndex(snippet => snippet.id === action.payload.snippetId);

      if(snippetIndex === -1) {
        throw new Error('Snippet not found');
      }

      const markIndex = state.snippets[snippetIndex].marks.findIndex(mark => mark.id === action.payload.markId);

      if(markIndex === -1) {
        throw new Error('Mark not found');
      }

      state.snippets[snippetIndex].marks[markIndex].type = action.payload.type;
    },

    removeMark: (state, action: PayloadAction<{snippetId: number, markId: number}>) => {
      const snippetIndex = state.snippets.findIndex(snippet => snippet.id === action.payload.snippetId);

      if(snippetIndex === -1) {
        throw new Error('Snippet not found');
      }

      state.snippets[snippetIndex].marks = state.snippets[snippetIndex].marks.filter(mark => mark.id !== action.payload.markId);
    },


  },
});

const snippetsReducer = snippetsSlice.reducer;

export const { 
  removeSnippet, 
  updateSnippet,
  addSnippet,
  setSnippets, 
  setCurrentPage, 
  setLimit, 
  addComment, 
  updateComment, 
  removeComment,
  addMark,
  updateMark,
  removeMark
} = snippetsSlice.actions;

export default snippetsReducer;
