export type MarkType = 'like' | 'dislike' | 'comment';

export  interface MarkButtonProps {
    type: MarkType;
    marksNumber: number;
    className?: string;
}