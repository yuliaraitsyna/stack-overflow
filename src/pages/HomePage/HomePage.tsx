import styles from './HomePage.module.css'

import { Box } from "@mui/material"
import { Welcomer } from "../../features/Welcomer/Welcomer"
import { Snippet } from '../../widgets/Snippet/Snippet'

const HomePage = () => {
    return (
        <Box className={styles.container}>
            <Welcomer />
            <Snippet 
                code={"jhello"} 
                language='JS' 
                username='user' 
                likes={1} 
                dislikes={1}
                comments={2}
            />
        </Box>
    )
}

export { HomePage }