import { Snippet } from "../Snippet/Snippet";
import { useEffect } from "react";
import { useGetSnippetsQuery } from "../../app/redux/api/snippetsApi";
import { setSnippets } from "../../app/redux/slice/snippetSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/redux/store/store";

const SnippetList = () => {
    const { data: fetchedSnippets, isLoading } = useGetSnippetsQuery();
    const dispatch = useDispatch();
    const snippets = useSelector((state: RootState) => state.snippets.snippets);

    useEffect(() => {
        if (fetchedSnippets && Array.isArray(fetchedSnippets)) {
            dispatch(setSnippets(fetchedSnippets));
        }
    }, [fetchedSnippets, dispatch]);

    return (
        <>
            {!isLoading && Array.isArray(snippets) && snippets.map(snippet => (
                <Snippet key={snippet.id} snippet={snippet} />
            ))}
            {isLoading && <p>Loading...</p>}
        </>
    );
};

export { SnippetList };
