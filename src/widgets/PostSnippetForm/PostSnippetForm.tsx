import styles from './PostSnippetForm.module.css';

import { Box, Button, Typography } from "@mui/material";
import { LanguageSelect } from "../../features/LanguageSelect/LanguageSelect"
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { FormEvent, useRef, useState } from 'react';
import { languages } from '../../features/LanguageSelect/model/languages';
import { usePostSnippetMutation } from '../../app/redux/api/snippetsApi';
import { InfoModal } from '../../features/InfoModal/InfoModal';

const PostSnippetForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [currentLanguage, setCurrentLanguage] = useState<string>(languages[0]);
    const editorRef = useRef<ReactCodeMirrorRef | null>(null);
    const [postSnippet] = usePostSnippetMutation();

    const handleSubmit = async (event: FormEvent) => {    
        event.preventDefault();

        try {
            if(editorRef.current) {
                const code = editorRef.current?.view?.state.doc.toString().trim() || '';
                const newSnippet = await postSnippet({code, language: currentLanguage})
                    .unwrap()
                    .catch(error => setErrorMessage(error.data.message));
    
                if(newSnippet) {
                    setSuccessMessage('Snippet posted successfully');
                }
                else {
                    throw new Error('Error while posting snippet');
                }
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
        <Box className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <LanguageSelect onChange={handleLanguageChange}/>
                <Box mt={4}>
                    <Typography variant='body1'>Atached code: </Typography>
                    <CodeMirror 
                        ref={editorRef}
                        className={styles.editor} 
                        height='350px' 
                        lang={currentLanguage} 
                    />
                </Box>
                <InfoModal type='success' message={successMessage} open={!!successMessage}  />
                <InfoModal type='error' message={errorMessage} open={!!errorMessage}  />
                <Button type='submit' variant='contained' color='primary' fullWidth>Create snippet</Button>
            </form>
        </Box>
    )
}

export { PostSnippetForm };