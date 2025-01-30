import { RootState } from "../store/store";

const snippetsSelector = (state: RootState) => state.snippets.snippets;
const totalPagesSelector = (state: RootState) => state.snippets.totalPages;
const currentPageSelector = (state: RootState) => state.snippets.currentPage;
const limitSelector = (state: RootState) => state.snippets.limit;
const snippetSelector = (id: number) => (state: RootState) => state.snippets.snippets.find(snippet => snippet.id === id);
const commentsSelector = (id: number) => (state: RootState) => state.snippets.snippets.find(snippet => snippet.id === id)?.comments;

const commentSelector = (snippetId?: number, commentId?: number) => {
    if(!snippetId || !commentId) return () => null;
    return (state: RootState) => state.snippets.snippets.find(snippet => snippet.id === snippetId)?.comments.find(comment => comment.id === commentId)
};

export { 
    snippetsSelector,
    totalPagesSelector, 
    currentPageSelector, 
    limitSelector,
    snippetSelector,
    commentsSelector,
    commentSelector,
};