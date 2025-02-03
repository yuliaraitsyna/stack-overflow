export type MarkType = 'like' | 'dislike';

export interface MarkButtonProps {
    type: MarkType;
    marksNumber: number;
    onMarkClick: (type: MarkType, state: MarkAction) => void;
    className?: string;
    currentState: MarkAction;
}

export enum MarkAction {
    LIKE = 'like',
    DISLIKE = 'dislike',
    DEFAULT = 'default'
}