import styles from './SnippetForm.module.css';

import { Box, Button, Typography } from "@mui/material";
import { LanguageSelect } from "../../features/LanguageSelect/LanguageSelect"
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { FormEvent, useRef, useState } from 'react';
import { languages } from '../../features/LanguageSelect/model/languages';
import { useGetConcreteSnippetQuery, usePostSnippetMutation, useUpdateSnippetMutation } from '../../app/redux/api/snippetsApi/snippetsApi';
import { InfoModal } from '../../features/InfoModal/InfoModal';
import { useLocation, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Loading } from '../Loading/Loading';
import { useDispatch } from 'react-redux';
import { addSnippet } from '../../app/redux/slices/snippetsSlice/snippetsSlice';
import { SnippetState } from '../../features/MarkButtons/MarkButton.types';

const SnippetForm = () => {
    const {t} = useTranslation();
    
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    const [currentLanguage, setCurrentLanguage] = useState<string>(languages[0]);
    const editorRef = useRef<ReactCodeMirrorRef | null>(null);
    const [postSnippet] = usePostSnippetMutation();
    const [updateSnippet] = useUpdateSnippetMutation();

    const location = useLocation();
    const params = useParams();
    const dispatch = useDispatch();

    const {data: concreteSnippet, isLoading} = useGetConcreteSnippetQuery(Number(params.id), {
        skip: !params.id,
    });

    const buttonText = location.pathname.includes('/post_snippet') ? t('createSnippet') : t('editSnippet');

    const handleSubmit = async (event: FormEvent) => {    
        event.preventDefault();

        try {
            if(editorRef.current) {
                const code = editorRef.current?.view?.state.doc.toString().trim() || '';

                if(location.pathname === '/post_snippet') {
                    await postSnippet({code, language: currentLanguage})
                    .unwrap()
                    .then(response => {
                        dispatch(addSnippet({
                            id: response.data.id,
                            code: response.data.code,
                            language: response.data.language,
                            user: response.data.user,
                            marks: [],
                            comments: [],
                            state: SnippetState.DEFAULT

                        }));
                        setSuccessMessage('Snippet posted successfully');
                    })
                    .catch(error => setErrorMessage(error.data.message))
                }
                else if(location.pathname.includes('/edit_snippet')) {
                    await updateSnippet({id: Number(params.id), code, language: currentLanguage})
                    .unwrap()
                    .then (() => setSuccessMessage('Snippet updated successfully'))
                    .catch(error => setErrorMessage(error.data.message));


                }
                else throw new Error("Invalid pathname")
            }
        }  
        catch(error) {
            if(error instanceof Error) {
                setErrorMessage(error.message);
            }
            else {
                setErrorMessage('Error while posting snippet');
            }
        }
    }
    
    const handleLanguageChange = (language: string) => {
        setCurrentLanguage(language);
    }

    return (
        <>
            {
                isLoading
                ?
                <Loading />
                :
                <Box className={styles.container}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <LanguageSelect onChange={handleLanguageChange} value={concreteSnippet?.data.language || ''}/>
                        <Box mt={4}>
                            <Typography variant='body1'>{t('codeText')}: </Typography>
                            <CodeMirror 
                                ref={editorRef}
                                value={concreteSnippet?.data.code || ''}
                                className={styles.editor} 
                                height='350px' 
                                lang={currentLanguage} 
                            />
                        </Box>
                        <InfoModal type='success' message={successMessage} open={!!successMessage}  />
                        <InfoModal type='error' message={errorMessage} open={!!errorMessage}  />
                        <Button type='submit' variant='contained' color='primary' fullWidth>{buttonText}</Button>
                    </form>
                </Box>
            }
        </>
    )
}

export { SnippetForm };