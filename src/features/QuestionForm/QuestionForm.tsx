import styles from './QuestionForm.module.css';

import { Button, TextField } from "@mui/material"
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { useEffect, useRef, useState } from 'react';
import { usePostQuestionMutation } from '../../app/redux/api/questionsApi';

import { InfoModal } from '../InfoModal/InfoModal';
import { QuestionFormProps } from './QuestionForm.types';
import { useDispatch } from 'react-redux';
import { Question } from '../../entities/Question/Question';
import { addQuestion } from '../../app/redux/slice/questionsSlice';
import { useTranslation } from 'react-i18next';


const QuestionForm: React.FC<QuestionFormProps> = ({onSubmit, type, question}) => {
    const {t} = useTranslation();

    const titleRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLInputElement | null>(null);
    const editorRef = useRef<ReactCodeMirrorRef | null>(null);

    const [errorMessage, setErrorMessage] = useState('');

    const [postQuestion] = usePostQuestionMutation();
    const dispatch = useDispatch();

    const buttonText = type === 'ask' ? t('askQuestion') : t('editQuestion');

    useEffect(() => {
        if (type === 'edit' && question) {
            titleRef.current!.value = question.title;
            descriptionRef.current!.value = question.description || '';
        }
    }, [question, type]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const title = titleRef.current?.value.trim() || '';
        const description = descriptionRef.current?.value.trim();
        const code = editorRef.current?.view?.state.doc.toString().trim() || '';

        try {
            if(type === 'ask') {
                await postQuestion({title, description, attachedCode: code})
                .unwrap()
                .catch(error => {throw new Error(error.message)})
                .then(response => {
                    const responseData = response as unknown as { data: Question };
                    dispatch(addQuestion(responseData.data));
                    onSubmit('Question has been asked successfully');
                });
            }
        }
        catch(error) {
            if(error instanceof Error) {
                setErrorMessage(error.message);
            }
            else {
                setErrorMessage('Something went wrong');
            }
        }

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <TextField inputRef={titleRef} label={t('questionTitle')} variant="outlined" type='text' fullWidth required />
            <TextField inputRef={descriptionRef} label={t('questionDescription')} variant="outlined" type='text' fullWidth multiline rows={2} />
            <CodeMirror ref={editorRef} value={question?.attachedCode} height='100px' />
            <Button type="submit" variant="contained">{buttonText}</Button>
            <InfoModal type='error' message={errorMessage} open={!!errorMessage} />
        </form>
    )
}

export { QuestionForm };