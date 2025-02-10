import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <>
            <Typography variant="h1" align="center">Something went wrong</Typography>
            <Button>
                <Link to="/">Go back</Link>
            </Button>
        </>
    )
}

export { ErrorPage }