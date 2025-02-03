import { Question } from "../../entities/Question/Question";

export type ModalType = 'edit' | 'ask';

export interface QuestionModalProps {
    open: boolean;
    onClose: () => void;
    type: ModalType;
    question?: Question;
}