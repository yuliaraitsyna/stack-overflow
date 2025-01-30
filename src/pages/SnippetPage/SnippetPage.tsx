import styles from './SnippetPage.module.css';

import { useNavigate, useParams } from 'react-router';
import { Snippet } from '../../widgets/Snippet/Snippet';
import { Box } from "@mui/material"
import { useState } from 'react';
import { InfoModal } from '../../features/InfoModal/InfoModal';
import { useSelector } from 'react-redux';
import { Loading } from '../../widgets/Loading/Loading';
import { CommentsList } from '../../widgets/CommentsList/CommentsList';
import { snippetSelector } from '../../app/redux/selectors/snippetsSelectors';

const SnippetPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const snippet =  useSelector(snippetSelector(Number(params.id)));
    const [errorMessage, setErrorMessage] = useState('');

    const handleSuccessfullDelete = () => {
        navigate('/');
    }

    const handleErroredDelete = (message: string) => {
        setErrorMessage(message);
    }

    if(!snippet) {
        return <Loading />
    }

    return (
        <Box className={styles.container}>
            <Snippet snippet={snippet} onSuccessfulDelete={handleSuccessfullDelete} onErroredDelete={handleErroredDelete} />
            <CommentsList comments={snippet.comments} snippetId={snippet.id} />
            <InfoModal message={errorMessage} type='error' open={!!errorMessage} />
        </Box>
    )
}

export { SnippetPage };