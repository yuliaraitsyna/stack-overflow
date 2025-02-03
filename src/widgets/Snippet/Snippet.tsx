import styles from './Snippet.module.css'

import { Box } from "@mui/material";
import { SnippetHeader } from "../../features/SnippetHeader/SnippetHeader";
import CodeMirror from "@uiw/react-codemirror";
import { SnippetFooter } from '../../features/SnippetFooter/SnippetFooter';
import { SnippetProps } from './Snippet.types';

const Snippet: React.FC<SnippetProps> = ({snippet}) => {
    const username = snippet.user.username;
    const language = snippet.language;
    const code = snippet.code;
    const likes = snippet.likes;
    const dislikes = snippet.dislikes;
    const comments = snippet.comments;

    return (
        <Box className={styles.snippet}>
            <SnippetHeader username={username} language={language}/>
            <CodeMirror value={code} lang={language} minHeight='150px'></CodeMirror>
            <SnippetFooter likes={likes} dislikes={dislikes} comments={comments} />
        </Box>
    )
}

export { Snippet }