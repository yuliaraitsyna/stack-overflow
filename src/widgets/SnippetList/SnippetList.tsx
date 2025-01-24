import styles from './SnippetList.module.css';

import { Snippet } from "../Snippet/Snippet";
import React, { useEffect } from "react";
import { useGetSnippetsQuery } from "../../app/redux/api/snippetsApi";
import { setCurrentPage, setLimit, setSnippets } from "../../app/redux/slice/snippetSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/redux/store/store";
import { Box, CircularProgress, Pagination } from "@mui/material";
import { LimitButtons } from "../../features/LimitButtons/LimitButtons";
import { v4 as uuidv4 } from 'uuid'

const SnippetList = () => {
    const snippets = useSelector((state: RootState) => state.snippets.snippets);
    const totalPages = useSelector((state: RootState) => state.snippets.totalPages);
    const currentPage = useSelector((state: RootState) => state.snippets.currentPage);
    const limit = useSelector((state: RootState) => state.snippets.limit);

    const { data: fetchedSnippets, isLoading } = useGetSnippetsQuery({page: currentPage, limit});

    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchedSnippets) {
            dispatch(setSnippets(fetchedSnippets));
        }
    }, [fetchedSnippets, dispatch]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentPage(value));
    }

    const handleLimitChange = (limit: number) => {
        dispatch(setLimit(limit));
    }

    return (
        <>
            <Box className={styles.pagination}>
                <LimitButtons onLimitChange={handleLimitChange}></LimitButtons>
            </Box>
            <Pagination count={totalPages} page={currentPage} onChange={handlePageChange}/>
            {
                isLoading 
                ? 
                <CircularProgress /> 
                : 
                snippets.map(snippet => <Snippet key={uuidv4()} snippet={snippet} />)
            }
        </>
    );
};

export { SnippetList };
