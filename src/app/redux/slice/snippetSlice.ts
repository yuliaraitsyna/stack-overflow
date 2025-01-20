import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SnippetState } from "./snippetSlice.types";
import { Snippet } from "../../../entities/Snippet/Snippet";
import { ApiResponse } from "../api/parseSnippets.types";
import { parseSnippets } from "../api/parseSnippets";

const initialState: SnippetState = {
  snippets: [],
};

const snippetsSlice = createSlice({
  name: "snippets",
  initialState,
  reducers: {
    addSnippet: (state, action: PayloadAction<Snippet>) => {
      state.snippets.push(action.payload);
    },

    removeSnippet: (state, action: PayloadAction<number>) => {
      state.snippets = state.snippets.filter(snippet => snippet.id !== action.payload);
    },

    updateSnippet: (state, action: PayloadAction<Snippet>) => {
      const index = state.snippets.findIndex(snippet => snippet.id === action.payload.id);
      if (index !== -1) {
        state.snippets[index] = action.payload;
      }
    },

    setSnippets: (state, action: PayloadAction<ApiResponse>) => {
        const parsedSnippets = parseSnippets(action.payload);
        state.snippets = parsedSnippets;
    },
  },
});

export const { addSnippet, removeSnippet, updateSnippet, setSnippets } = snippetsSlice.actions;
export default snippetsSlice;
