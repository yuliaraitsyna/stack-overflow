export interface CommentModalProps {
    open: boolean;
    onClose: () => void;
    onSuccessfulUpdate: (message: string) => void;
    onErroredUpdate: (message: string) => void;
    commentId?: number;
    snippetId?: number;
}