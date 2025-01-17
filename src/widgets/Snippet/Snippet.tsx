import styles from './Snippet.module.css'

import { Box } from "@mui/material";
import { SnippetHeader } from "../../features/SnippetHeader/SnippetHeader";
import { SnippetProps } from "./Snippet.types";
import CodeMirror from "@uiw/react-codemirror";
import { SnippetFooter } from '../../features/SnippetFooter/SnippetFooter';

const Snippet: React.FC<SnippetProps> = ({username, language, code, likes, dislikes, comments}) => {
    return (
        <Box className={styles.snippet}>
            <SnippetHeader username={username} language={language}/>
            <CodeMirror value={code} lang={language} minHeight='150px'></CodeMirror>
            <SnippetFooter likes={likes} dislikes={dislikes} comments={comments} />
        </Box>
    )
}

export { Snippet }