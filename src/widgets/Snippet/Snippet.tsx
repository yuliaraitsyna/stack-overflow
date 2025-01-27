import styles from './Snippet.module.css'

import { Box } from "@mui/material";
import { SnippetHeader } from "../../features/SnippetHeader/SnippetHeader";
import { SnippetFooter } from '../../features/SnippetFooter/SnippetFooter';
import { SnippetProps } from './Snippet.types';
import CodeMirror from '@uiw/react-codemirror';

const Snippet: React.FC<SnippetProps> = ({snippet}) => {
    const username = snippet.user.username;
    const language = snippet.language;
    const code = snippet.code;
    
    return (
        <Box className={styles.snippet}>
            <SnippetHeader username={username} language={language}/>
            <CodeMirror value={code} lang={language} readOnly />
            <SnippetFooter snippet={snippet} />
        </Box>
    )
}

export { Snippet }