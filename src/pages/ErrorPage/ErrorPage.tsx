import { Button, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const ErrorPage = () => {
    const {t} = useTranslation();

    return (
        <>
            <Typography variant="h1" align="center">Something went wrong</Typography>
            <Button>
                <Link to="/">{t('goBack')}</Link>
            </Button>
        </>
    )
}

export { ErrorPage }