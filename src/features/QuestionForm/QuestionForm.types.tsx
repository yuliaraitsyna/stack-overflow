import { Question } from "../../entities/Question/Question";
import { ModalType } from "../../widgets/QuestionModal/QuestionModal.types";

export interface QuestionFormProps {
    type: ModalType;
    question?: Question;
    onSubmit: (message: string) => void;
}