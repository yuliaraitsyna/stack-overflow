export type MarkType = 'like' | 'dislike';

export interface MarkButtonProps {
    type: MarkType;
    value: number;
    onClick: (type: MarkType, state: SnippetState) => void;
    isOn: boolean;
}

export enum SnippetState {
    LIKE = 'like',
    DISLIKE = 'dislike',
    DEFAULT = 'default'
}