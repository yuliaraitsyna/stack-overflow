import styles from './HomePage.module.css'

import { Box } from "@mui/material"
import { Welcomer } from "../../features/Welcomer/Welcomer"
import { SnippetList } from '../../widgets/SnippetList/SnippetList'

const HomePage = () => {
    return (
        <Box className={styles.container}>
            <Welcomer />
            <SnippetList type='all'/>
        </Box>
    )
}

export { HomePage }