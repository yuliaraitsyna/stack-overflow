import styles from './EditSnippetPage.module.css';

import { Box, Typography } from "@mui/material";
import { SnippetForm } from "../../widgets/SnippetForm/SnippetForm";
import { useTranslation } from "react-i18next";

const EditSnippetPage = () => {
    const {t} = useTranslation();
    
    return (
        <Box className={styles.container}>
            <Typography variant="h5">{t('editSnippetHeader')}</Typography>
            <SnippetForm />
        </Box>
    )
}

export { EditSnippetPage };
