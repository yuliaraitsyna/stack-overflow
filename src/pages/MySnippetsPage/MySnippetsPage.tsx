import styles from './MySnippetsPage.module.css';

import { Box } from "@mui/material";
import { SnippetList } from "../../widgets/SnippetList/SnippetList"

const MySnippetsPage = () => {
    return (
        <Box className={styles.container}>
            <SnippetList type='user'/>
        </Box>
    )
}

export { MySnippetsPage};