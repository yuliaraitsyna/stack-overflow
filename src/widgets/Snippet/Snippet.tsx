import styles from './Snippet.module.css'

import { Box } from "@mui/material";
import { SnippetHeader } from "../../features/SnippetHeader/SnippetHeader";
import { SnippetFooter } from '../../features/SnippetFooter/SnippetFooter';
import { SnippetProps } from './Snippet.types';
import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';
import { useDeleteSnippetMutation } from '../../app/redux/api/snippetsApi/snippetsApi';
import { removeSnippet } from '../../app/redux/slices/snippetsSlice/snippetsSlice';
import { useDispatch } from 'react-redux';

const Snippet: FC<SnippetProps> = ({snippet, onErroredDelete, onSuccessfulDelete}) => {
    const user = snippet.user;
    const language = snippet.language;
    const code = snippet.code;

    const [deleteSnippet] = useDeleteSnippetMutation();
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = async () => {
        try {
            await deleteSnippet(snippet.id)
            .unwrap()
            .catch(error => {throw new Error(error.message)})
            .then(() => {
                dispatch(removeSnippet(snippet.id));
                onSuccessfulDelete('Snippet has been deleted successfully');
            })
        }
        catch(error) {
            if(error instanceof Error) {
                onErroredDelete(error.message);
            }
            else {
                onErroredDelete('Something went wrong');
            }
        }
    }
    
    return (
        <>
            <Box className={styles.snippet}>
                <SnippetHeader user={user} language={language} snippetId={snippet.id} onDelete={() => setIsModalOpen(true)}/>
                <CodeMirror value={code} lang={language} height='150px' readOnly />
                <SnippetFooter snippet={snippet} />
            </Box>
            <ConfirmModal 
                message='Are you sure you want to delete this snippet?'
                open={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onConfirm={handleDelete} 
            />
        </>
    )
}

export { Snippet }