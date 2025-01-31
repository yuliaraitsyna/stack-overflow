import styles from './SnippetList.module.css';

import { Snippet } from "../Snippet/Snippet";
import React, { useEffect, useState } from "react";
import { useGetSnippetsQuery, useGetUserSnippetsQuery } from "../../app/redux/api/snippetsApi/snippetsApi";
import { setCurrentPage, setLimit, setSnippets } from "../../app/redux/slices/snippetsSlice/snippetsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Pagination } from "@mui/material";
import { LimitButtons } from "../../features/LimitButtons/LimitButtons";
import { v4 as uuidv4 } from 'uuid';
import { Loading } from '../Loading/Loading';
import { SnippetListProps } from './SnippetList.types';
import { InfoModal } from '../../features/InfoModal/InfoModal';
import { currentPageSelector, limitSelector, snippetsSelector, totalPagesSelector } from '../../app/redux/selectors/snippetsSelectors';
import { userSelector } from '../../app/redux/selectors/authSelectors';
import { skipToken } from '@reduxjs/toolkit/query';

const SnippetList: React.FC<SnippetListProps> = ({type}) => {
    const snippets = useSelector(snippetsSelector);
    const totalPages = useSelector(totalPagesSelector);
    const currentPage = useSelector(currentPageSelector);
    const limit = useSelector(limitSelector);

    const user = useSelector(userSelector);

    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    const { data: fetchedSnippets, isLoading: isSnippetsLoading } = useGetSnippetsQuery({page: currentPage, limit});

    const { data: fetchedUserSnippets, isLoading: isUserSnippetsLoading } = useGetUserSnippetsQuery(
        user?.id ? { userId: user.id, page: currentPage, limit } : skipToken
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if(type === 'user' && fetchedUserSnippets) {
            dispatch(setSnippets(fetchedUserSnippets));
        }
        else if (fetchedSnippets) {
            dispatch(setSnippets(fetchedSnippets));
        }
    }, [fetchedSnippets, fetchedUserSnippets, dispatch, type]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentPage(value));
    }

    const handleLimitChange = (limit: number) => {
        dispatch(setLimit(limit));
    }

    if(isSnippetsLoading || isUserSnippetsLoading) return <Loading />;

    return (
        <>
            <Box className={styles.pagination}>
                <LimitButtons onLimitChange={handleLimitChange}></LimitButtons>
            </Box>
            <Pagination count={totalPages} page={currentPage} onChange={handlePageChange}/>
            {snippets.map(snippet => 
                <Snippet 
                    key={uuidv4()} 
                    snippet={snippet} 
                    onSuccessfulDelete={(message) => setSuccessMessage(message)}
                    onErroredDelete={(message) => setErrorMessage(message)}
                />
            )}
            <InfoModal message={errorMessage} type='error' open={!!errorMessage} />
            <InfoModal message={successMessage} type='success' open={!!successMessage} />            
        </>
    );
};

export { SnippetList };