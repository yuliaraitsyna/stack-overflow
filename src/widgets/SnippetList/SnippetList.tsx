import { Snippet } from "../Snippet/Snippet";
import { useEffect } from "react";
import { useGetSnippetsQuery } from "../../app/redux/api/snippetsApi";
import { setSnippets } from "../../app/redux/slice/snippetSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/redux/store/store";
import { CircularProgress } from "@mui/material";
import { v4 as uuidv4 } from 'uuid'

const SnippetList = () => {
    const { data: fetchedSnippets, isLoading } = useGetSnippetsQuery();
    const dispatch = useDispatch();
    const snippets = useSelector((state: RootState) => state.snippets.snippets);

    useEffect(() => {
        if (fetchedSnippets) {
            dispatch(setSnippets(fetchedSnippets));
        }
    }, [fetchedSnippets, dispatch]);

    return (
        <>
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
