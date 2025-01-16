import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router"

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Typography variant="h1" align="center">Something went wrong</Typography>
            <Button onClick={() => navigate('/')}>Go back</Button>
        </>
    )
}

export { ErrorPage }