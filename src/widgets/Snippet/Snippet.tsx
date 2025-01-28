import styles from './Snippet.module.css'

import { Box } from "@mui/material";
import { SnippetHeader } from "../../features/SnippetHeader/SnippetHeader";
import { SnippetFooter } from '../../features/SnippetFooter/SnippetFooter';
import { SnippetProps } from './Snippet.types';
import CodeMirror from '@uiw/react-codemirror';

const Snippet: React.FC<SnippetProps> = ({snippet}) => {
    const user = snippet.user;
    const language = snippet.language;
    const code = snippet.code;
    
    return (
        <Box className={styles.snippet}>
            <SnippetHeader user={user} language={language} snippetId={snippet.id}/>
            <CodeMirror value={code} lang={language} height='150px' readOnly />
            <SnippetFooter snippet={snippet} />
        </Box>
    )
}

export { Snippet }